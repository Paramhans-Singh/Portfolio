import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import busbooker from "../../Assets/Projects/busbooker.png";
import chatify from "../../Assets/Projects/chatify.png";
import geekguru from "../../Assets/Projects/geekguru.png";
import grubhub from "../../Assets/Projects/grubhub.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={busbooker}
              isBlog={false}
              title="BusBooker"
              description="BusBooker, a MERN stack bus booking app, employs React for a user-friendly interface. Driven by Express.js and MongoDB, it streamlines the booking process, offering users a seamless experience to find, reserve, and manage bus tickets."
              ghLink="https://github.com/Paramhans-Singh/BusBooker"
              demoLink="https://github.com/Paramhans-Singh/BusBooker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chat-X"
              description="ChatX, a MERN stack chatting engine with Socket.io, provides real-time communication through React. Supported by Express.js and MongoDB, it ensures seamless and instant messaging experiences with dynamic updates and efficient data synchronization."
              ghLink="https://github.com/Paramhans-Singh/Chat-X"
              demoLink="https://github.com/Paramhans-Singh/Chat-X"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={geekguru}
              isBlog={false}
              title="GeekGuru"
              description="GeekGuru, a MERN stack eLearning platform, leverages React for an intuitive user interface. Fueled by Express.js and MongoDB, it delivers a robust learning experience with personalized courses, interactive content, and comprehensive progress tracking."
              ghLink="https://github.com/Paramhans-Singh/Geek-Gurus"
              demoLink="https://geek-gurus.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grubhub}
              isBlog={false}
              title="GrubHub"
              description="GrubHub a MERN stack food app offers a user-friendly React frontend for seamless browsing and ordering Powered by Express Js and MongoDB it ensures secure transactions efficient order management and a delightful food ordering experience"
              ghLink="https://github.com/Paramhans-Singh/GrubHub"
              demoLink="https://grub-hubs.vercel.app/"
            />
          </Col>
          </Row>
      </Container>
    </Container>
  );
}

export default Projects;
