import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ExperienceCards";
import Particle from "../Particle";
import squareboat from "../../Assets/Experience/squareboat.png";
import drdo from "../../Assets/Experience/drdo.png";
import turing from "../../Assets/Experience/turing.png";
import algoexpert from "../../Assets/Experience/algoexpert.png";
import ssoc from "../../Assets/Experience/ssoc.png";
import gssoc from "../../Assets/Experience/gssoc.png";
import codingninja from "../../Assets/Experience/codingninja.png";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Work <strong className="purple">Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my all interships I have done.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drdo}
              isBlog={false}
              title="DRDO - CFEES"
              post = "Research and Devlopment Intern"
              date="May 23 - Aug 23"
              location= "New Delhi,India"
              description="• Spearheaded the implementation of Cuckoo sandbox technology for malware analysis, resulting in a 60% reduction in
              successful cyberattacks and ensuring a secure web environment
              • Got 2 Letter of Recommendation from the University and
              DRDO for the research work."
              cerLink="https://drive.google.com/file/d/1GgX5QDUjyI_tKmxbj15xD44EBjXpXvNw/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={squareboat}
              isBlog={false}
              title="SquareBoat"
              post="Software Developer"
              date="Apr 23 - June 23"
              location="Delhi, India"
              description="• Teamed up with development team to improve different facets
              of the project, leading to an impressive 25% decrease in the
              number of bugs.
              • Implemented advanced React-Redux concepts to achieve a
              15% enhancement in performance. Worked on React Js, and
              Node Js."
              cerLink="https://drive.google.com/file/d/1D-OoGcxHfMq1VrVs6HIH-b8qMCsGe0Gv/view?usp=sharing"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={turing}
              isBlog={false}
              title="Turing"
              post="Front-End Web Developer"
              date="Dec 22 - Jan 23"
              location="Gurgaon, India"
              description="• Worked on an E-commerce website and created features using React JS. Design Client-side and Server-side architecture.
              Making an overall increase of 25% in sales.
              • Connected Back-End APIs to display data using the Custom
              Components and Redux."
              cerLink="https://drive.google.com/file/d/1r_cZ4EsUQPkH73CGi-X_6vWiyU1VhAp7/view?usp=sharing"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={algoexpert}
              isBlog={false}
              title="AlgoExpert"
              post="Problem Setter and Mentor"
              date="Oct 22 - Feb 23"
              location="New Delhi, India"
              description="• Working as a Problem Setter in AlgoExpert. 
              • Framed ​ 300+ new Questions for various contests and courses."
              cerLink="https://drive.google.com/file/d/1XpnqR6_VIYkkN952NMF8KCIe7PukZgNr/view?usp=sharing"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ssoc}
              isBlog={false}
              title="Social(Formerly Script Foundation)"
              post="Open Source Developer"
              date="May 23 - Aug 23"
              location="Noida, India"
              description="• Ranked in the Top 20 in SSOC 
              • Got Swags and Prizes from Team SSOC
              • Enhanced my skills in Open-Source and Web Development"
              cerLink="https://drive.google.com/file/d/1aIZFDXXd9zR231jh0clZyfnCWyh4zk-f/view?usp=sharing"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gssoc}
              isBlog={false}
              title="GirlScript Summer of Code"
              post="Open Source Developer"
              date="May 23 - Aug 23"
              location="Gurgaon, India"
              description="• Ranked in the Top 20 in GSSOC 
              • Got Swags and Prizes from Team GSSOC
              • Enhanced my skills of Open-Source"
              cerLink="https://drive.google.com/file/d/172IjK0VNpkQlqrRwx3OvR7cAXFP3Zn8K/view?usp=sharing"
            />

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codingninja}
              isBlog={false}
              title="Coding Ninja"
              post="Teaching Assistant"
              date="Apr 23 - Sep 23"
              location="Gurgaon, India"
              description="Working as a Teaching Assistant for Data Structures and Algorithms in JAVA course. Solved ​ 500+ doubts of more than 100 students enrolled in the online batch."
              cerLink="https://drive.google.com/file/d/12_eUyZFj7CjjDFBnNRtwSlkGeFM9IWZn/view?usp=sharing"
            />

          </Col>
        
          </Row>
      </Container>
    </Container>
  );
}

export default Experience;
