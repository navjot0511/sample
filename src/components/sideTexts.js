import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

const MainWrapper = styled.div`
  margin-bottom: 30px;
  .text {
    color: #dda15e;
    font-size: 40px;
    font-weight: bold;
  }

  .right-border {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    background: #606c38;
    width: 100%;
    max-width: 500px;
    height: auto;
    padding: 20px;
  }
  .left-border {
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    background: #606c38;
    width: 100%;
    max-width: 500px;
    height: auto;
    padding: 20px;
  }
  .right-align {
    display: flex;
    justify-content: flex-end;
  }
  .left-align {
    display: flex;
    justify-content: flex-start;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 250px;
    margin-top: 200px;
  }
`;

const SideText = ({ title, alignment, border }) => {
  console.log(border);
  return (
    <MainWrapper>
      <div className={alignment}>
        <div className={border}>
          <span className="text">{title}</span>
        </div>
      </div>
    </MainWrapper>
  );
};

export default SideText;
