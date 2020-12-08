import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <div className="background">
      <div>
        <Carousel fade={false}>
          <Carousel.Item>
            <img
              className="d-block w-1100"
              src="https://i.imgur.com/9A9XjeR.jpeg/800x400?"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Finance 2021</h3>
              <p>A portal to follow stock prices.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-1100"
              src="https://i.imgur.com/ErRlqf7.jpeg/800x400?"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Make wiser investments</h3>
              <p>Analyze and choose top stocks to invest.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-1100"
              src="https://i.imgur.com/S4TmZi2.jpeg/800x400?"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Real time market</h3>
              <p>You can track latest prices if you create an account.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Button variant="primary">Primary</Button>{" "}
      </div>
    </div>
  );
};

export default Home;
