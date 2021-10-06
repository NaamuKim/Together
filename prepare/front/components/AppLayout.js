import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { jsx, css } from "@emotion/react";
import Global from "./Global";
import Header from "./Header";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Global />
      <Header />
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
