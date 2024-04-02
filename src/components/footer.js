import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import navbarLogo from "../assets/navbar-logo.png";
import instagramIcon from "../assets/Instagram-circle.png";
import TwitterIcon from "../assets/TwitterX.png";
import facebookIcon from "../assets/Facebook.png";
import HomeAddress from "../assets/Home-address.png";
import Email from "../assets/Email.png";
import Phone from "../assets/Phone.png";
import { NavLink as Link } from "react-router-dom";

const DivWrapper = styled.div`
  background: #606c38;
  width: 100%;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  .footer-logo {
    background-color: white;
    border-color: #606c38;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -100px;
    border: 5px solid #606c38;
    margin-left: 20px;
  }
  .footer-logo-text {
    display: inline-block;
    color: #dda15e;
    font-weight: bold;
  }
  .footer-links-heading {
    color: #dda15e;
    font-weight: 500;
    font-size: 30px;
    margin-top: 20px;
  }
  .social-login-logos {
    margin-top: 100px;
  }
  .footer-contact-us {
    margin-bottom: 20px;
    align-items: center;
    border-bottom: 2px solid white;
    padding: 20px;
  }
  .footer-contact-us-text {
    margin-left: 40px;
    color: #dda15e;
    font-weight: 500;
    font-size: 20px;
  }
`;
export const FooterLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 2rem;
  height: 100%;
  cursor: pointer;
`;
const Footer = () => {
  return (
    <DivWrapper>
      <Row>
        <Col>
          <div className="footer-logo">
            <div className="text-center">
              <img
                height="100px"
                width="100px"
                src={navbarLogo}
                alt="navbar-logo"
              ></img>
              <span className="footer-logo-text">MRMD FOODS</span>
            </div>
          </div>
          <div className="social-login-logos">
            <img
              height="100px"
              width="100px"
              src={instagramIcon}
              alt="instagram-logo"
            ></img>
            <img
              height="100px"
              width="100px"
              src={TwitterIcon}
              alt="Twitter-icon"
            ></img>
            <img
              height="100px"
              width="100px"
              src={facebookIcon}
              alt="facebook-icon"
            ></img>
          </div>
        </Col>
        <Col>
          <p className="footer-links-heading">Quick links</p>
          <div>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/">About Us</FooterLink>
            <FooterLink to="/">Products</FooterLink>
            <FooterLink to="/">Events</FooterLink>
            <FooterLink to="/">Infrastructure</FooterLink>
            <FooterLink to="/">Contact us</FooterLink>
          </div>
        </Col>
        <Col>
          <div className="footer-contact-us">
            <img
              className="mr-5"
              height="60px"
              width="60px"
              src={Phone}
              alt="Phone-logo"
            ></img>
            <span className="footer-contact-us-text">+91 90000000</span>
          </div>
          <div className="footer-contact-us">
            <img
              height="60px"
              width="60px"
              src={HomeAddress}
              alt="home-address-logo"
            ></img>
            <span className="footer-contact-us-text">Punjab-India</span>
          </div>
          <div className="footer-contact-us">
            <img height="60px" width="60px" src={Email} alt="email-logo"></img>
            <span className="footer-contact-us-text">xyz@gmail.com</span>
          </div>
        </Col>
      </Row>
    </DivWrapper>
  );
};

export default Footer;
