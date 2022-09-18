import { React, useState } from "react";
import { dataPortfolio } from "../../components/data/portfolio.data";
import "./portfolio.css";

export const Portfolio = () => {
  const [stateAll, setAll] = useState(true);
  const [stateApp, setApp] = useState(false);

  const all = () => {
    // setApp(true);

  };
  const app = () => {
    setAll(false);
    return (
    dataPortfolio.app.map((item) => (
      <div className="project" key={item.id}>
        <img src={item.img} atl={item.type} />
      </div>
    ))
    )
  };
  const pages = () => {

    return(
      dataPortfolio.sw.map((item) => (
       <div className="project" key={item.id}>
         <img src={item.img} atl={item.type} />
       </div>
     )) 
     )
  };
  const desktop = () => {};

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
          {stateAll ? all() : ""}
        </div>
      </section>
    </>
  );
};
