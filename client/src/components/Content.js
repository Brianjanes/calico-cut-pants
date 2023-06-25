import React from "react";
import CalicoCut1 from "../images/CalicoCut1.jpeg";
import CalicoCut2 from "../images/CalicoCut2.jpeg";
import CalicoCut3 from "../images/CalicoCut3.jpeg";
import CalicoCut4 from "../images/CalicoCut4.jpeg";
import CalicoCut5 from "../images/CalicoCut5.jpeg";
import CalicoCut6 from "../images/CalicoCut6.jpeg";

const Content = () => {
  return (
    <div className="content-main">
      <div className="container">
        <div className="upper-content">
          <p className="home-men">Home / Men /</p>
          <p className="casual">Casual Pants</p>
        </div>
        <div className="all-pants-container">
          <div className="pants-container">
            <img
              className="pants-image"
              src={CalicoCut1}
              alt="a pair of pants"
            />
            <div className="price-description">
              <p className="pants-name">Extra Long Officer's Pants</p>
              <p>
                <span className="crossOut">$199.00</span> Sold Out
              </p>
            </div>
          </div>

          <div className="pants-container">
            <img
              className="pants-image"
              src={CalicoCut2}
              alt="a pair of pants"
            />
            <div className="price-description">
              <p className="pants-name">Stretch Washed Chinos</p>
              <p>
                <span className="crossOut">$89.00</span> Sold Out
              </p>
            </div>
          </div>

          <div className="pants-container">
            <img
              className="pants-image"
              src={CalicoCut3}
              alt="a pair of pants"
            />
            <div className="price-description">
              <p className="pants-name">Bootcut "Ramlinero" Jeans</p>
              <p>
                <span className="crossOut">$120.00</span> Sold Out
              </p>
            </div>
          </div>

          <div className="pants-container">
            <img
              className="pants-image"
              src={CalicoCut4}
              alt="a pair of pants"
            />
            <div className="price-description">
              <p className="pants-name">Frickin Skate Chino Pants</p>
              <p>
                <span className="crossOut">$145.00</span> Sold Out
              </p>
            </div>
          </div>

          <div className="pants-container">
            <img
              className="pants-image"
              src={CalicoCut5}
              alt="a pair of pants"
            />
            <div className="price-description">
              <p className="pants-name">Slim-fit Stretch Pant</p>
              <p>
                <span className="crossOut">$76.00</span> Sold Out
              </p>
            </div>
          </div>

          <div className="pants-container">
            <img
              className="pants-image"
              src={CalicoCut6}
              alt="a pair of pants"
            />
            <div className="price-description">
              <p className="pants-name">Surf N' Turf Pants</p>
              <p>
                <span className="crossOut">$188.00</span> Sold Out
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
