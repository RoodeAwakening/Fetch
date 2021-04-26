import React from "react";
import "./About.css";

import derek from "../../images/about/derek.jpg";
import bryan from "../../images/about/bryan.png";
import justin from "../../images/about/justin.jpeg";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-container-header">
        <h2>MEET OUR TEAM</h2>
      </div>

      <div className="about-container-header-sub"></div>

      <div className="about-container-user-container">
        <div className="about-container-user-container-each">
          <div className="about-container-user-container-each-img">
            <img alt="derek" src={derek}></img>
          </div>
          <div>
            <h4>Derek Roode</h4>
          </div>
          <div>
            <a href="https://github.com/RoodeAwakening">Github</a>{" "}
          </div>
        </div>

        <div className="about-container-user-container-each">
          <div className="about-container-user-container-each-img">
            <img alt="bryan" src={bryan}></img>
          </div>
          <div>
            <h4>Bryan Burns</h4>
          </div>
          <div>
            <a href="https://github.com/bryanlancy">Github</a>{" "}
          </div>
        </div>

        <div className="about-container-user-container-each">
          <div className="about-container-user-container-each-img">
            <img alt="justin" src={justin}></img>
          </div>
          <div>
            <h4>Justin Payne</h4>
          </div>
          <div>
            <a href="https://github.com/payne-j">Github</a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
