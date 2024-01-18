import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./CertificateCard";
import Particle from "../Particle";
import backend from "../../Assets/certificate/backend.PNG";
import dsa from "../../Assets/certificate/dsa.PNG";
import frontend from "../../Assets/certificate/frontend.PNG";
import java from "../../Assets/certificate/java.PNG";

function Certificate() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Certifications and <strong className="purple">Licenses</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my all Certifications and Achievements
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dsa}
              isBlog={false}
              title="Data Structures in Java"
              company="Coding Ninja"
              date="Oct 22"
              cerLink="https://drive.google.com/file/d/1hruCELHPZQ-9WKi6hupXhjuyHy8Zaagb/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={frontend}
              isBlog={false}
              title="FrontEnd | FullStack Web Development"
              company="Coding Ninja"
              date="Dec 22"
              cerLink="https://drive.google.com/file/d/1mwIhKuLuC8YNMvz2VyOJv4y2sSZbITLQ/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={backend}
              isBlog={false}
              title="BackEnd | FullStack Web Development"
              company="Coding Ninjas"
              date="Mar 23"
              cerLink="https://drive.google.com/file/d/1LUQNVBSAwsWmERA-lEISK25Wpe3vIJIs/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={java}
              isBlog={false}
              title="Introduction to JAVA"
              company="Coding Ninjas"
              date="July 22"
              cerLink="https://drive.google.com/file/d/10RZfFCkUErhUTMOibfeDSEeWagSMqVv_/view?usp=sharing"
            />
          </Col>
          </Row>
      </Container>
    </Container>
  );
}

export default Certificate;
