import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function experienceCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
      <Card.Title>{props.post}</Card.Title>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>{props.date}&nbsp;&nbsp;&nbsp;&nbsp;{props.location}</Card.Text>
      {/* <Card.location>{props.location}</Card.location> */}
      
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <Button variant="primary" href={props.cerLink} target="_blank">Internship Certificate</Button>
        
      </Card.Body>
    </Card>
  );
}
export default experienceCard;
