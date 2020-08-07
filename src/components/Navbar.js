import React from "react";

import { FaBars } from "react-icons/fa";
import PageLinks from "../constants/menu";

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
      </div>
    </nav>
  )
}

export default Navbar;
