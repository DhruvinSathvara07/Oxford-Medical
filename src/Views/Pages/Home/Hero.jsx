import axios from "axios";
import React, { useEffect, useState } from "react";
const Slider = () => {
  const [herodata, setHerodata] = useState();

  const fetchingData = async () => {
    try {
      const response = await axios.get("http://localhost:1000/hero");
      setHerodata(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  const herosectionData =
    Array.isArray(herodata) && herodata.length > 0 ? herodata[0] : {};
  const heroStyle = {
    background: herosectionData.hero_img
      ? `url(http://localhost:1000/uploads/${herosectionData.hero_img}) no-repeat center center`
      : "No Image",
    minHeight: "400px",
  };

  return (
    <div className="slider-container">
      <div className="slider-hero">
        <div className="slider-left d-flex justify-content-center align-items-center">
          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className="fa-solid fa-star"
                style={{ color: "#E4040E" }}
              ></i>
            ))}
            <span className="rating-text">{herosectionData.rating_text}</span>
          </div>

          <div className="hero-text">
            <h2>{herosectionData.hero_text1}</h2>
            <h2>{herosectionData.hero_text2}</h2>
            <h2>{herosectionData.hero_text3}</h2>
            <p>
              {herosectionData.hero_para1}
              <br />
              {herosectionData.hero_para2}
            </p>
            <span className="price-info">{herosectionData.price_info}</span>
          </div>

          <div className="button-section ms-0 ps-0 ms-lg-5 ps-lg-5">
            <a href="#" className="shop-button">
              {herosectionData.btn_text}
            </a>
            <span className="genuine-text">{herosectionData.text}</span>
          </div>
        </div>

        <div className="slider-right" style={heroStyle}></div>
      </div>
    </div>
  );
};

export default Slider;
