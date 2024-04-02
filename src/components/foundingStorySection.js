import React from "react";
import Banner from "../assets/image-founding-story.png";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

const DivWrapper = styled.div`
  background: white;
  width: 100%;
  height: auto;
  padding: 40px;
  .heading {
    color: #dda15e;
    font-size: 58px;
    font-weight: bold;
    text-align: left;
    @media screen and (max-width: 768px) {
      font-size: 30px;
    }
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
    max-width: 800px;
    height: auto;
  }
  .info {
    color: #374724;
    font-size: 32px;
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const FoundingStorySection = () => {
  return (
    <DivWrapper>
      <div className="image-section">
        <Row>
          <Col>
            <span className="heading">Founding Story</span>
            <p className="info">
              Welcome to MRMC Foods, your premier destination for premium rice
              products. With a rich heritage and a commitment to quality, we
              bring you the finest rice varieties, carefully cultivated and
              processed to perfection. From farm to table, we uphold sustainable
              practices to ensure each grain maintains its purity and
              nutritional value. Join us in creating memorable dining
              experiences that nourish the body and soul. Choose MRMC Foods for
              excellence in every grain
            </p>
          </Col>
          <Col>
            <img className="responsive" src={Banner} alt="banner"></img>
          </Col>
        </Row>
      </div>
    </DivWrapper>
  );
};

export default FoundingStorySection;
