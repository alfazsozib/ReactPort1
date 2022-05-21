import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./test.css";
import Img1 from "../../images/angela.jpg";
import Img2 from "../../images/yuji.jpg";
import Img3 from "../../images/max.jpg";
// import Img1 from "../../images/img-1.jpg";
// import Img1 from "../../images/img-1.jpg";

function Testimonial() {


  return (
    <div className="carousel-wrapper">
        <h1>Testimonials</h1>
      <Carousel infiniteLoop autoPlay='2' >
        <div className="car-item">
          {/* <img src={Img1} /> */}
          <div className="car-content">
            <img className="image" src={Img2} alt="" />
            <h3>Max Jervis</h3>
            
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              magni? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Adipisci, id.
            </p>
          </div>
        </div>
        <div className="car-item">
          {/* <img src={Img1} />
           */}
          <div className="car-content">
            <img className="image" src={Img1} alt="" />
            <h3>Angela Hu</h3>
            
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              magni?
            </p>
          </div>
        </div>
        <div className="car-item">
          {/* <img src={Img1} /> */}
          <div className="car-content">
            <img className="image" src={Img3} alt="" />
            <h3>Yuji La</h3>
            
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              magni?
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Testimonial;
