import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
        Hello There ✋,I am,
         <br /> <span className="info-name">Muhammad Idrees khan</span>.
         <br /> Crafting Dynamic Digital Experiences with React: A Developer's Journey into Web Innovation
        </div>
        <div className="about-photo">
          <img 
            src={require("../../../assets/coding.png")}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;