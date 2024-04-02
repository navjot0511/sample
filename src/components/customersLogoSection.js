import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import logo1 from "../assets/sec3-logo1.png";
import logo2 from "../assets/sec3-logo2.png";
import logo3 from "../assets/sec3-logo3.png";
import logo4 from "../assets/sec3-logo4.png";

const DivWrapper = styled.div`
  background: white;
  width: 100%;
  height: auto;
  padding: 0px 200px;
  margin-bottom: 20px;
  .logo-text {
    font-size: 20px;
    color: #374724;
    font-weight: 400;
  }
`;

const CustomerLogoSection = () => {
  return (
    <DivWrapper>
      <Row>
        <Col>
          <div className="text-center">
            <img height="150px" width="150px" src={logo1} alt="logo"></img>
            <p className="logo-text">
              Uncompromising
              <br /> Quality
            </p>
          </div>
        </Col>
        <Col>
          <div className="text-center">
            <img height="150px" width="150px" src={logo2} alt="logo"></img>
            <p className="logo-text">Diverse Varieties</p>
          </div>
        </Col>
        <Col>
          <div className="text-center">
            <img height="150px" width="150px" src={logo3} alt="logo"></img>
            <p className="logo-text">Trusted Reputation</p>
          </div>
        </Col>

        <Col>
          <div className="text-center">
            <img height="150px" width="150px" src={logo4} alt="logo"></img>
            <p className="logo-text">Customer-Centric</p>
          </div>
        </Col>
      </Row>
    </DivWrapper>
  );
};

export default CustomerLogoSection;
