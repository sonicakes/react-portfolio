import React from "react";
import "./portfolio.css";
import Proj1 from "../../assets/proj-1.jpg";
import Proj2 from "../../assets/proj-2.jpg";
import Proj3 from "../../assets/proj-3.jpg";
import Proj4 from "../../assets/proj-4.jpg";
import Proj5 from "../../assets/proj-5.jpg";
import Proj6 from "../../assets/proj-6.jpg";

const data = [
  {
    id: 1,
    image: Proj1,
    title: "Title1",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 2,
    image: Proj2,
    title: "Title2",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 3,
    image: Proj3,
    title: "Title3",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 4,
    image: Proj4,
    title: "Title4",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 5,
    image: Proj5,
    title: "Title5",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 6,
    image: Proj6,
    title: "Title6",
    github: "https://github.com",
    demo: "https://github.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title}></img>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live project
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
