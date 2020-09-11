import React from "react";

import DarkTheme from "../DarkTheme";

import { FaBars } from "react-icons/fa";
import PageLinks from "../../constants/menu";

import './styles.css';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <h1>Fernando</h1>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaBars></FaBars>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
        <DarkTheme />
      </div>
    </nav>
  )
}

export default Navbar;
