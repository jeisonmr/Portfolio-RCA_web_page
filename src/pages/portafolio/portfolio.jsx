import React from "react";
import { dataPortfolio } from "../../components/data/portfolio.data";
import "./portfolio.css";
export const Portfolio = () => {

  const all = () =>{}
  const app = () =>{}
  const pages = () =>{}
  const desktop = () =>{}

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
          <button onClick={all}>ALL</button>
          <button onClick={app}>APP</button>
          <button onClick={pages}>PAGES</button>
          <button onClick={desktop}>DESKTOP</button>
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
