import React, { useEffect, useState } from "react";
import TrendingProducts from "../../Components/TrendingProducts/TrendingProducts";
import axios from "axios";
import SpecialProducts from "../../Components/SpecialProducts/SpecialProduct";

const Section7 = () => {
  const [card, setCard] = useState([]);
  const [minicards, setMinicards] = useState([]);
  const [features, setFeatures] = useState([]);

  const fetchingCard = async () => {
    try {
      const response = await axios.get("http://localhost:1000/card");
      setCard(response.data[0]);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchingMinicards = async () => {
    try {
      const response = await axios.get("http://localhost:1000/minicard");
      setMinicards(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchingFetures = async () => {
    try {
      const response = await axios.get("http://localhost:1000/features");
      setFeatures(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingCard();
    fetchingMinicards();
    fetchingFetures();
  }, []);

  return (
    <section>
      <div className="omi-products py-5">
        <h1 className="mb-3">Special Products</h1>
        <div className="border border-5-dark mb-4 mx-auto"></div>

        <div className="container">
          <div className="row mt-4 g-3">
            {/* LEFT BIG CARD */}
            <div className="col-lg-4">
              <TrendingProducts
                roundtext={card.roundtext}
                img={`http://localhost:1000/uploads/${card.img}`}
                card_title={card.card_title}
                card_text={card.card_text}
                rating={5}
                card_price={card.card_price}
                card_price_two={card.card_price_two}
                line1={card.line1}
                line2={card.line2}
                btn_text={card.btn_text}
                text1={card.text1}
                text2={card.text1}
              />
            </div>
            <div className="col-lg-8">
              <div className="row g-3">
                {minicards.map((item) => (
                  <SpecialProducts
                    product_title={item.product_title}
                    product_title2={item.product_title2}
                    product_price={item.product_price}
                    stock_info1={item.stock_info1}
                    stock_info2={item.stock_info2}
                    btn_text={item.btn_text}
                    img={`http://localhost:1000/uploads/${item.img}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid py-4 mt-5"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="container">
          <div className="row g-0">
            {features.map((feature, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-3">
                <div className="d-flex align-items-center p-3 h-100">
                  <div className="flex-shrink-0 me-3">
                    <i className={feature.icon}></i>
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="mb-1 shipping-title">{feature.title}</h6>
                    <p className="mb-0 shipping-subtitle">{feature.subtitle}</p>
                  </div>
                </div>
                {index < features.length - 1 && (
                  <div
                    className="d-none d-lg-block position-absolute top-50 end-0 translate-middle-y"
                    style={{
                      width: "1px",
                      height: "40px",
                      backgroundColor: "#dee2e6",
                    }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
