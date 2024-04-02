import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import logo1 from "../assets/tes1.png";
import logo2 from "../assets/tes2.png";
import logo3 from "../assets/tes3.png";

const DivWrapper = styled.div`
  background: white;
  width: 100%;
  height: 500px;
  padding: 10px;
  margin-top: 100px;
  margin-bottom: 50px;
`;
const Textimonial = styled.div`
  background: #606c38;
  height: 500px;
  max-height: 400px;
  border-radius: 200px;
  display: flex;
  justify-content: center;
  margin: 50px;
  flex-direction: column;
  padding: 40px;
`;

const Testimonials = () => {
  return (
    <DivWrapper>
      <Row>
        <Col>
          <img width="100%" height="500px" src={logo2} alt="logo"></img>
          {/* <Textimonial>
            <div className="text-center">
              <img
                className="products"
                height="100px"
                src={logo1}
                alt="logo"
              ></img>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
            </div>
               
          </Textimonial> */}
        </Col>
        <Col>
          <img width="100%" height="500px" src={logo1} alt="logo"></img>
        </Col>
        <Col>
          <img width="100%" height="500px" src={logo3} alt="logo"></img>
        </Col>
      </Row>
    </DivWrapper>
  );
};

export default Testimonials;
