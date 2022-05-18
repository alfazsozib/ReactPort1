import React from "react";
import ban from "../../images/about.c07f3d2b.png";
import './section.css'

function section() {
  return (
    <div id="aboutSection">
        <h1>About</h1>
      <div className="section_container">
        <img src={ban} className="banImg" alt="" />
        <div className="section_content">
          <h1>I Develope Business Not Just Website</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
            veritatis sunt. Dolores non, consectetur molestiae, dignissimos
            labore facere dolorem libero esse placeat fuga architecto et!
            Repellat fugiat enim quam explicabo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default section;
