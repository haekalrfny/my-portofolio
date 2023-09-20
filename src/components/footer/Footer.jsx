import React from "react";
import "../../App.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Haekal</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portofolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="#"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/abdurrahman-haekal-rifany-a1a057261/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://t.me/haekalrfny"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-telegram "></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Crypticalcoder. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
