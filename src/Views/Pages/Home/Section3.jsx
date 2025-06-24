import axios from "axios";
import React, { useEffect, useState } from "react";

const Section3 = () => {
  const [data, setData] = useState([]);

  const fetchingData = async () => {
    try {
      const response = await axios.get("http://localhost:1000/productline");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  const productLineData = data.length > 0 ? data[0] : {};

  // Define the styles for the section
  const section3style = {
    minHeight: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Lato, sans-serif",
    padding: "50px 5vw",
    marginBottom: "10px",
    backgroundImage: productLineData.img
      ? `url(http://localhost:1000/uploads/${productLineData.productline_img})`
      : "No Image",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    textAlign: "center",
  };

  return (
    <section>
      <div className="container-fluid main-section">
        <div className="promotion-section" style={section3style}>
          <h1 className="text-center">{productLineData.title}</h1>
          <div className="text-center mt-0 mt-lg-2">
            <h3>{productLineData.sub_title}</h3>
          </div>
          <h2 className="text-center mt-0 mt-lg-2">
            {productLineData.para1} <span>{productLineData.price}</span>
            <br />
            <span>{productLineData.price2}</span> {productLineData.para2}
          </h2>
          <div className="btn-container">
            <button className="mt-0 mt-lg-3">
              <a href="#">{productLineData.btn_text}</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
