import React from "react";
import { dataCompany } from "../../components/data/empresas.data";
import "./empresas.css";

export const Empresas = () => {
  return (
    <>
      <section className="empresas">
        <div className="title-4">
          <p>{dataCompany.title}</p>
        </div>
        <div className="subTitle-3">
          <p>{dataCompany.subTitle}</p>
        </div>
        <div className="empLogo">
          {dataCompany.companies.map((item) => (
            <div className="logo">{<img src={item.img}/>}</div>
          ))}
        </div>
      </section>
    </>
  );
};
