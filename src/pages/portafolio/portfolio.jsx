import { React, useState } from "react";
import { dataPortfolio } from "../../components/data/portfolio.data";
import "./portfolio.css";

export const Portfolio = () => {
  const [stateAll, setAll] = useState(true);
  const [stateApp, setApp] = useState(false);
  const [statePage, setPage] = useState(false);


  const all = () => {
    setPage(false);
    setApp(false);
    setAll(!stateAll);
  };
  const apps = () => {
    setPage(false);
    setAll(false);
    setApp(!stateApp);
  };
  const pages = () => {
    setApp(false);
    setAll(false);
    setPage(!statePage);
  }

  const handleAll = () => {
    return (
      dataPortfolio.all.map((item) => (
        <div className="project" key={item.id}>
          <img src={item.img} atl={item.type} />
        </div>
      ))
    );
  }
  
  const handleApps = () => {
    return (
      dataPortfolio.app.map((item) => (
        <div className="project" key={item.id}>
          <img src={item.img} atl={item.type} />
        </div>
      ))
    );
  }

  const handlePages = () => {
    return (
      dataPortfolio.sw.map((item) => (
        <div className="project" key={item.id}>
          <img src={item.img} atl={item.type} />
        </div>
      ))
    );
  }


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
          <button onClick={apps}>APP</button>
          <button onClick={pages}>PAGES</button>
        </div>
        <div className="container_projects">
          {(stateAll ? handleAll() : stateApp ? handleApps() : statePage ? handlePages() : '')}
        </div>
      </section>
    </>
  );
};
