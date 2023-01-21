import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/github.png";

export const Footer_Resume = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="Brand_name">
            <h1>AIZA MALIK</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ayza-malik-5b251b260"><img src={navIcon1} alt="Linkedin Profile" /></a>
              <a href="https://www.facebook.com/ayza.malik.186?mibextid=ZbWKwL"><img src={navIcon2} alt="Facebook Profile" /></a>
              <a href="https://github.com/aiza5malik"><img src={navIcon3} alt="Githib Profile" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
