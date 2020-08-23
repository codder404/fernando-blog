import React from "react";

import SocialLinks from "../../constants/socialLinks";

import './styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
      </div>
    </footer>
  )
}

export default Footer;
