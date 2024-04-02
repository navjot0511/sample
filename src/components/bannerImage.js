import React from "react";
import Banner from "../assets/banner1.png";
import styled from "styled-components";

const BannerWrapper = styled.div`
  background: #fefae0;
  width: 100%;
  height: auto;
  text-align: center;
  padding: 4rem;
  .responsive {
    width: 100%;
    max-width: 400px;
    height: auto;
  }
  .title {
    color: #606c38;
    font-size: 64px;
    font-weight: bold;
  }
`;

const BannerImage = ({ title }) => {
  return (
    <BannerWrapper>
      <img className="responsive" src={Banner} alt="banner"></img>
      <p className="title">{title}</p>
    </BannerWrapper>
  );
};

export default BannerImage;
