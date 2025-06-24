import React, { useEffect, useState } from "react";
import Productcard from "../../Components/Productcard/Productcard";
import axios from "axios";
const Section5 = () => {
  const [data, setData] = useState();

  const fetchingData = async () => {
    try {
      const response = await axios.get("http://localhost:1000/omiProducts");
      setData(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <section>
      <div className="omi-products">
        <h1>All OMI Products</h1>
        <div className="border border-5-dark"></div>
        <div className="container">
          <div className="mt-5 mainproducts">
            {data &&
              data.map((item) => {
                return (
                  <Productcard
                    key={item.id}
                    product_badge={item.productBadge}
                    producttitle1={item.productTitle1}
                    producttitle2={item.productTitle2}
                    price={item.price}
                    shippinginfo1={item.shippingInfo1}
                    shippinginfo2={item.shippingInfo2}
                    btntext={item.btntext}
                    img={`http://localhost:1000/uploads/${item.productImg}`}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
