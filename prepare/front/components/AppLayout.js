import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import Global from "./Global";
import Header from "./Header";
import LogInForm from "./LogInForm";
import { useSelector } from "react-redux";
import UserProfile from "./UserProfile";
import styled from "@emotion/styled";

const WriterInfo = styled.a`
  padding-right: 20px;
  padding-bottom: 10px;
`;

const WriterDiv = styled.div`
  padding-top: 20px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
`;
const AppLayout = ({ children }) => {
  const { me } = useSelector((state) => state.user);
  return (
    <div>
      <Global />
      <Header />
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {me ? <UserProfile /> : <LogInForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <WriterDiv>
            <WriterInfo
              href="https://naamukim.github.io"
              target="_black"
              rel="noreferrer noopener"
            >
              front-end: made by KimNaMu
            </WriterInfo>
            <WriterInfo
              href="https://github.com/CheezeLatte"
              target="_black"
              rel="noreferrer noopener"
            >
              back-end: made by CheeseLatte
            </WriterInfo>
          </WriterDiv>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
