import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <div className="background">
      <div className="container">
        <Carousel>
          <Carousel.Item>
            <div className="item">
              <img
                className="d-block"
                src="https://i.imgur.com/9A9XjeR.jpeg/"
                alt="First slide"
              />
            </div>
            <Carousel.Caption>
              <div>
                <h3 className="carousel-header">FINANCE 2021</h3>
                <p1 className="carousel-text">
                  A portal to follow stock prices
                </p1>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="item">
              <img
                className="d-block"
                src="https://i.imgur.com/ErRlqf7.jpeg/"
                alt="Third slide"
              />
            </div>
            <Carousel.Caption>
              <div>
                <h3 className="carousel-header">INVEST WISER</h3>
                <p1 className="carousel-text">
                  Choose from top stocks to invest
                </p1>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="item">
              <img
                className="d-block"
                src="https://i.imgur.com/S4TmZi2.jpeg/"
                alt="Third slide"
              />
            </div>
            <Carousel.Caption>
              <div>
                <h3 className="carousel-header">REAL TIME MARKETS</h3>
                <p1 className="carousel-text">
                  Track stocks live by creating an account
                </p1>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
