import React, { useState } from "react";
import { dataSkill } from "../../components/data/skill.data";
import "./skills.css";

export const Skills = () => {
  return (
    <>
      <section className="mySkills">
        <div className="title-2">
          <p className="name">{dataSkill.title}</p>
          <p>{dataSkill.title2}</p>
        </div>
        <div className="subTitle">
          <p>{dataSkill.parraf}</p>
        </div>
        <div className="skills">
          <div className="category">
            <label>{dataSkill.category[0]}</label>
            <div>
            {dataSkill.lenguejes.map((sol) => (
              <div key={sol.id} className="skill">
                {<img src={sol.img} atl={sol.name} className="imgSkill" />}
              </div>
            ))}
            </div>
    
          </div>

          <div className="category">
            <label>{dataSkill.category[1]}</label>
            <div>
            {dataSkill.frameworks.map((sol) => (
              <div key={sol.id} className="skill">
                {<img src={sol.img} atl={sol.name} className="imgSkill" />}
              </div>
            ))}
            </div>
          </div>

          <div className="category">
            <label>{dataSkill.category[2]}</label>
            <div>
            {dataSkill.devops.map((sol) => (
              <div key={sol.id} className="skill">
                {<img src={sol.img} atl={sol.name} className="imgSkill" />}
              </div>
            ))}
            </div>
          </div>

          <div className="category">
            <label>{dataSkill.category[3]}</label>
            <div>
            {dataSkill.cms.map((sol) => (
              <div key={sol.id} className="skill">
                {<img src={sol.img} atl={sol.name} className="imgSkill" />}
              </div>
            ))}
            </div>
          </div>

          <div className="category">
            <label>{dataSkill.category[4]}</label>
            <div>
            {dataSkill.management.map((sol) => (
              <div key={sol.id} className="skill">
                {<img src={sol.img} atl={sol.name} className="imgSkill" />}
              </div>
            ))}
            </div>
          </div>

          <div className="category">
            <label>{dataSkill.category[5]}</label>
            <div>
            {dataSkill.desing.map((sol) => (
              <div key={sol.id} className="skill">
                {<img src={sol.img} atl={sol.name} className="imgSkill" />}
              </div>
            ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
