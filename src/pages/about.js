import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import BannerImage from "../components/bannerImage";
import FoundingStorySection from "../components/foundingStorySection";
import SideText from "../components/sideTexts";
import CustomerLogoSection from "../components/customersLogoSection";
import Footer from "../components/footer";
const TextSection = styled.p`
  font-size: 30px;
  color: #606c38;
  padding: 50px;
  margin-right: 300px;
  margin-bottom: 50px;
`;

const About = () => {
  return (
    <>
      <Row className="m-0">
        <Col className="p-0">
          <BannerImage title="About Us" />
        </Col>
      </Row>
      <Row>
        <FoundingStorySection />
      </Row>
      <Row>
        <SideText
          title="Values and Philosophy"
          alignment="right-align"
          border="left-border"
        />
      </Row>
      <CustomerLogoSection />
      <Row>
        <SideText
          title="Our Mission"
          alignment="left-align"
          border="right-border"
        />
      </Row>
      <Row>
        <Col>
          <TextSection>
            At MRMC Foods, our mission is simple: to deliver premium rice
            products that exceed expectations. We're committed to quality,
            sustainability, and creating memorable dining experiences for our
            customers worldwide.s
          </TextSection>
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </>
  );
};

export default About;
