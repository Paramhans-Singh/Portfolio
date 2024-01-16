import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Paramhans Singh </span>
            from <span className="purple"> Delhi, India.</span>
            <br />
            I am currently doing Research & Development Intern at DRDO (CFEES).
            <br />
            I am pursuing B.Tech from Guru Gobind Singh Indraprastha University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
       </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
