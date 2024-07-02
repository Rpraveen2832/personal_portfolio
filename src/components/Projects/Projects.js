import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emp from "../../Assets/Projects/emp.png";
import digit from "../../Assets/Projects/digit.png";
import jobportal from "../../Assets/Projects/Job portal.png";
import emppdf from "../../Assets/Projects/emp.pdf";
import svmpdf from "../../Assets/Projects/Svm.pdf";

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
              imgPath={digit}
              isBlog={false}
              title={<strong>Handwritten Digit Classification of MNIST Dataset Using Support Vector Machine (SVM)</strong>}
              description="This project involves implementing a linear classification model using a Support Vector Machine (SVM) to classify handwritten digits from the MNIST dataset. The MNIST dataset is a well-known dataset in the field of machine learning and computer vision, consisting of 70,000 grayscale images of handwritten digits (0-9), each of size 28x28 pixels."
              ghLink="https://github.com/Rpraveen2832/Handwritten-Digit-Classification-Using-the-MNIST-Dataset-and-SVM-Algorithm.git"
              demoLink={svmpdf}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emp}
              isBlog={false}
              title={<strong>Employee Management System Using File Handling in C++</strong>}
              description="This project involves creating an Employee Management System (EMS) using file handling in C++. The system allows for the efficient management of employee information, including adding new employees, viewing employee details, updating employee information, and deleting employee records. The project demonstrates the use of C++ file handling techniques to store and retrieve employee data, ensuring data persistence across program executions."
              ghLink="https://github.com/Rpraveen2832/Employee-Management-System-Using-File-Handling-in-C-.git"
              demoLink={emppdf}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobportal}
              isBlog={false}
              title={<strong>Job Portal Web Application Using MERN Stack</strong>}
              description="This Job Portal Web Application is a comprehensive platform designed to bridge the gap between job seekers and employers. Developed using the MERN stack (MongoDB, Express.js, React.js, Node.js), the application provides a robust solution for job recruitment and management. It features three main modules: Admin, Employer, and Job Seeker, each with distinct functionalities to streamline the job search and recruitment processes."
              ghLink="https://github.com/SubramaniyanGS/JobPortal-Web-Application"
              demoLink="https://aristostechjobportal.vercel.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
