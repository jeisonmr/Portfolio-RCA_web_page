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
          {dataSkill.skills.map((sol) => (
            <div key={sol.id} className="skill">
              {sol.name}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
