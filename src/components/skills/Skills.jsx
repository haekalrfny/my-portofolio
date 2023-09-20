import React from "react";
import "../../App.css"
import Frontend from "./Frontend";
import Backend from "./Backend";
import Language from "./Language";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <Language/>
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
