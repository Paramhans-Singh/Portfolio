import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "3em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I developed a deep passion for coding, and through my journey, I've gained valuable insights.
              <br />
              <br />I am proficient in languages such as
              <i>
                <b className="purple"> React JS, Java, and Node JS. </b>
              </i>
              <br />
              <br />
              My focus revolves around crafting innovative &nbsp;
              <i>
                <b className="purple">Web Technologies and Solutions </b> and
                exploring realms associated with{" "}
                <b className="purple">
                  Artificial Intelligence and Machine Learning.
                </b>
              </i>
              <br />
              <br />
              Whenever feasible, I channel my enthusiasm into building applications
              with <b className="purple">AI</b> and
              <i>
                <b className="purple">
                  {" "}
                  Cutting-edge Programming Languages and Frameworks
                </b>
              </i>
              &nbsp; such as
              <i>
                <b className="purple"> React.js and Typescript</b>
              </i>
            </p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Paramhans-Singh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/ParamSingh1303"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/paramhans-singh13/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
