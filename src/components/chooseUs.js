import React from "react";
import Banner from "../assets/mrmc-image-home.png";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

const DivWrapper = styled.div`
  background: white;
  width: 100%;
  height: auto;
  text-align: center;
  padding: 100px;

  .heading {
    color: #dda15e;
    font-size: 48px;
    font-weight: bold;
    @media screen and (max-width: 768px) {
      font-size: 30px;
    }
  }
  .details {
    color: #dda15e;
    font-size: 30px;
    color: #374724;
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

const ChooseUsSection = () => {
  return (
    <DivWrapper>
      <h1 className="heading">Why Choose Us?</h1>
      <p className="details">
        Firstly, MRMC FOODS is loyal to Quality that's why we have access to the
        world’s infinite customers. MRMC FOODS has all the essential
        certifications which are vital for the export of basmati rice through
        out the world. 1121 SELA, 1121 STEAM, 1509 SELA, 1509 STEAM, SUGANDHA
        SELA, SUGANDHA STEAM, SHARBATIISELA, SHARBATI STEAM, PR11 SELA, PR11
        STEAM, IR 64 SELA, IR 64 STEAM, SONA MUSSORIE are our best leading
        varieties.
      </p>
    </DivWrapper>
  );
};

export default ChooseUsSection;
