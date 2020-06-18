import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Burger from "./Burger";

const Navbar = ({ title }) => {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-primary">
        <h1>
          <Link to="/">{title}</Link>
        </h1>
      </nav>
      <Burger />
    </div>
  );
};

Navbar.defaultProps = {
  title: "LLCC CM",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
