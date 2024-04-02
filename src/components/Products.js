import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import logo1 from "../assets/range-1.png";
import logo2 from "../assets/range-2.png";
import logo3 from "../assets/range-3.png";

const DivWrapper = styled.div`
  background: white;
  width: 100%;
  height: 500px;
  padding: 10px;
  display: flex;
  align-items: center;
  margin-top: 150px;
`;
const BackgroundDiv = styled.div`
  background: #606c38;
  width: 100%;
  height: auto;
  max-height: 200px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  .products {
    margin-top: -250px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Products = () => {
  return (
    <DivWrapper>
      <BackgroundDiv>
        <img className="products" height="500px" src={logo1} alt="logo"></img>
        <img className="products" height="500px" src={logo2} alt="logo"></img>
        <img className="products" height="500px" src={logo3} alt="logo"></img>
      </BackgroundDiv>
    </DivWrapper>
  );
};

export default Products;
