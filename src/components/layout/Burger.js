import React, { useState } from "react";
import { Link } from "react-router-dom";
import { elastic as Menu } from "react-burger-menu";

const Burger = () => {
  const [open, setOpen] = useState(true);

  return (
    <Menu isOpen={!open} right>
      <Link id="home" className="menu-item" to="/">
        Home
      </Link>
      <Link id="about" className="menu-item" to="/about">
        About
      </Link>
      <Link id="expect" className="menu-item" to="/expect">
        What to Expect
      </Link>
      <Link id="expect" className="menu-item" to="/team">
        Team
      </Link>
    </Menu>
  );
};

export default Burger;
