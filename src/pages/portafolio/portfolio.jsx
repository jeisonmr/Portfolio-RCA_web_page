import React from 'react';
import './portfolio.css';
export const Portfolio = () =>{
      return (
      <>
            <section className="portfolio">
                 <div className="title-3">
                  <p>PORTAFOLIO</p>
                 </div>
                 <div className="subTitle-2">
                  <p>Estos son algunos de los proyectos en los que he trabajado</p>
                 </div>
                 <div className="option">
                  <button>ALL</button>
                  <button>APP</button>
                  <button>PAGES</button>
                  <button>DESKTOP</button>
                 </div>
                 <div className="container_projects">
                  <div className="project"></div>
                  <div className="project"></div>
                  <div className="project"></div>
                  <div className="project"></div>
                  <div className="project"></div>
                  <div className="project"></div>
                 </div>
            </section>
      </>
      );
}