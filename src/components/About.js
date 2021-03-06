import React, { useEffect } from "react";
import profilePhoto from "../assets/profile-photo.jpg";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-component">
      <div className="about-container">
        <div className="about-overview-container">
          <h1>About Me</h1>
          <p>I am a full-stack software engineer based in London.</p>
          <p>
            I have expertise in designing, implementing, and maintaining
            full-stack applications with proficiency in Node, React, Python,
            Git, CI/CD, and RESTful APIs.
          </p>
          <p>
            I have also experience collaborating in modern software
            methodologies like test-driven development, pair programming, code
            reviews and AGILE.
          </p>
          <p>
            Before becoming a software engineer and graduating from Makers
            Academy, I worked as an architect for five years, where I learnt a
            great deal about attention to detail, team collaboration, developing
            technical documentation and meeting given specifications in time.
          </p>
          <p>
            I'm looking forward to being part of a dynamic, agile team, solving
            new challenges and building innovative digital technology.
          </p>
        </div>
        <img className="profile-photo" src={profilePhoto} alt="Profile"></img>
      </div>
    </div>
  );
};

export default About;
