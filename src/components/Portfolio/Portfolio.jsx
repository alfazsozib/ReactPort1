import React from "react";
import "./portfolio.css";
import Data from "./port";

function Portfolio(props) {
  return (
    <div className="portfolio_container" id="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio_content">
        {Data.map((val, ind) => {
          return (
            <div className="card">
              <img className="portImage" src={val.img} alt="" />
              <div className="port_text">
                <h3>{val.title}</h3>
                <p>{val.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
