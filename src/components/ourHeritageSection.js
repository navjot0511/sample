import React from "react";
import Banner from "../assets/mrmc-image-home.png";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

const DivWrapper = styled.div`
  background: white;
  width: 100%;
  height: auto;
  padding: 40px;
  .heading {
    color: #dda15e;
    font-size: 48px;
    font-weight: bold;
    text-align: left;
    font-size: 30px;
  }
  .sub-heading {
    color: #dda15e;
    font-size: 96px;
    font-style: normal;
    text-align: left;
    @media screen and (max-width: 768px) {
      font-size: 40px;
    }
  }
  .responsive {
    width: 100%;
    max-width: 564px;
    height: auto;
  }
  .info {
    color: #374724;
    font-size: 32px;
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }

  .know-more {
    background-color: #dda15e;
    color: white;
    width: 108px;
    padding: 8px;
    border-radius: 10px;
    border: none;
  }
`;

const HeritageSection = () => {
  return (
    <DivWrapper>
      <div>
        <Row className="m-0">
          <Col>
            <span className="heading">OUR HERITAGE</span>
            <p className="sub-heading">
              Taste the Essence of Excellence with MRMC Foods
            </p>
          </Col>
        </Row>
      </div>
      <div className="image-section">
        <Row className="m-0">
          <Col>
            <img className="responsive" src={Banner} alt="banner"></img>
          </Col>
          <Col>
            <p className="info">
              Established in 2013, MRMC FOODS PRIVATE LIMITED is situated in the
              village Haan, ferozpur, Punjab. We are an ISO 22000: 2005, ISO
              9001: 2008, HACCP FSSAI, and GOVT. RECOGNIZED STAR EXPORT HOUSE
              (RICE MILLERS & EXPORTERS) certified company. Our office and mills
              are equipped with the most futuristic machinery. With 10 years of
              experience in the rice business, which is a necessary food for
              half of the world's population, our vision is to provide aromatic
              Indian basmati and non-basmati rice to people worldwide.
            </p>
            <div className="text-center">
              <button className="know-more">Know More</button>
            </div>
          </Col>
        </Row>
      </div>
    </DivWrapper>
  );
};

export default HeritageSection;
