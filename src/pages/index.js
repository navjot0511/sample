import React from "react";
import { Row, Col } from "react-bootstrap";
import BannerImage from "../components/bannerImage";
import HeritageSection from "../components/ourHeritageSection";
import ChooseUsSection from "../components/chooseUs";
import Footer from "../components/footer";
import CustomerLogoSection from "../components/customersLogoSection";
import SideText from "../components/sideTexts";
import Products from "../components/Products";
import Testimonials from "../components/testimonials";

const Home = () => {
  return (
    <>
      <Row className="m-0">
        <Col className="p-0">
          <BannerImage title="The Flavors of Tradition" />
        </Col>
      </Row>
      <Row>
        <Col>
          <HeritageSection />
        </Col>
      </Row>
      <Row>
        <Col>
          <ChooseUsSection />
        </Col>
      </Row>
      <Row>
        <CustomerLogoSection />
      </Row>
      <Row>
        <SideText
          title="Explore Our"
          alignment="right-align"
          border="left-border"
        />
      </Row>
      <Row>
        <Products />
      </Row>
      <Row>
        <SideText
          title="Wide Range"
          alignment="left-align"
          border="right-border"
        />
      </Row>
      <Row>
        <Testimonials />
      </Row>
      <Row>
        <Footer />
      </Row>
    </>
  );
};

export default Home;
