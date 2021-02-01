import React from "react";
import PropTypes from "prop-types";
import "./layout.css";
import Header from "../components/header";

const layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);
layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default layout;
