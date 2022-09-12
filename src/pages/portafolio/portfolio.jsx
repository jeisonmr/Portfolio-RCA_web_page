import React from "react";
import { dataPortfolio } from "../../components/data/portfolio.data";
import "./portfolio.css";
export const Portfolio = () => {
  return (
    <>
      <section className="portfolio">
        <div className="title-3">
          <p>{dataPortfolio.title}</p>
        </div>
        <div className="subTitle-2">
          <p>{dataPortfolio.subTitle}</p>
        </div>
        <div className="option">
          <button>ALL</button>
          <button>APP</button>
          <button>PAGES</button>
          <button>DESKTOP</button>
        </div>
        <div className="container_projects">
          {dataPortfolio.projects.map((sol) => (
            <div className="project" key={sol.id}>
              {sol.name}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
