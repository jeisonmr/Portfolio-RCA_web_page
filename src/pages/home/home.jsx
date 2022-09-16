import React, { useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import PhotoPerfil from "../../images/perfil.jpeg";
import { dataHome } from "../../components/data/home.data";
import "./home.css";

export const Home = () => {
  const title = "HOLA";

  const { text } = useTypewriter({
    words: [
      dataHome.subTitle[0],
      dataHome.subTitle[1],
      dataHome.subTitle[2],
      dataHome.subTitle[3],
    ],
    loop: {},
    typeSpeed: 120,
  });

  return (
    <>
      <section className="home">
        <div className="container">
          <img src={PhotoPerfil} className="img-profile" />
          <div className="container-tl">
            <p className=" title">{title}</p>
            <div className="container-logos">
              {dataHome.social.map((i) => (
                <a href={i.url} target="_blank"><img src={i.img} atl={i.name} className="logos" /></a>
              ))}
            </div>
          </div>
          {/* -------------------- */}
          <div className="description">
            <p>{text}</p>
          </div>
        </div>
      </section>
    </>
  );
};
