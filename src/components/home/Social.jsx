import React from "react";
import "../../App.css"

const Social = () => {
  return (
    <div className="home__social">
      <a href="https://www.instagram.com/haekalrfny" className="home__social-icon" target="_blank">
        <i className="uil uil-instagram"></i>
      </a>
      <a href="https://github.com/haekalrfny" className="home__social-icon" target="_blank">
        <i className="uil uil-github"></i>
      </a>
      <a href="#" className="home__social-icon" target="_blank">
        <i className="uil uil-twitter"></i>
      </a>
    </div>
  );
};

export default Social;
