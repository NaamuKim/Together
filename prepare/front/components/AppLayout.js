import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import Global from "./Global";
import Header from "./Header";
import LogInForm from "./LogInForm";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Global />
      <Header />
      <Row gutter={8}>
        <Col xs={24} md={6}>
          <LogInForm />
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://lost731.github.io"
            target="_black"
            rel="noreferrer noopener"
          >
            made by KimNaMu
          </a>
          <a
            href="https://github.com/CheeseLatte"
            target="_black"
            rel="noreferrer noopener"
          >
            made by CheeseLatte
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
