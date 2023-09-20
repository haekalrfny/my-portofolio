import React from "react";
import "../../App.css"
import { useState } from "react";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex "
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex "
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qalification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Pondok IT</h3>
                <span className="qualification__subtitle">
                  Yogyakarta - Islamic Boarding School
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">SMK Telkom Bandung</h3>
                <span className="qualification__subtitle">
                  Bandung - Senior High School
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SMPIT Al Aitaam</h3>
                <span className="qualification__subtitle">
                  Bandung - Junior High School
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">SDIT Al Bina</h3>
                <span className="qualification__subtitle">
                  Purwakarta - Elementary School
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2010 - 2016
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qalification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <d iv className="qualification__data">
              <div>
                <h3 className="qualification__title">Maken Living</h3>
                <span className="qualification__subtitle">
                  Yogyakarta - Web Development
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </d>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">SMK Telkom Bandung (Intership) </h3>
                <span className="qualification__subtitle">
                  Bandung - Intership
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2022
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
