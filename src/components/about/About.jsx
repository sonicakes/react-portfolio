import React from "react";
import "./about.css";
import ME from "../../assets/about-me-4.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderActive } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME}></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>
            <article className="about__card">
              <VscFolderActive className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>A front-end developer is responsible for building and maintaining the user interface of websites and web applications. They use HTML, CSS, and JavaScript to translate design concepts into visually appealing and responsive interfaces that provide an excellent user experience across different devices and browsers. Collaborating closely with designers and back-end developers, they ensure seamless functionality, optimal performance, and accessibility in the final product.</p>
        <a href="#contact" className="btn btn-primary">Let's talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
