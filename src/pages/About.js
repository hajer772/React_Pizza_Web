import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id illo enim nulla nemo eveniet odio exercitationem blanditiis sit debitis? Commodi soluta est consequatur eaque? Deleniti odio sit corrupti impedit commodi tenetur, dolorum cumque nulla quae reprehenderit harum distinctio praesentium labore deserunt, accusamus delectus nisi a rerum est incidunt? Perspiciatis, unde?        
        </p>
      </div>
    </div>
  );
}

export default About;