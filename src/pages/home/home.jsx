import React, { useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import PhotoPerfil from "../../images/perfil.jpeg";
// import Particles from 'react-particles-js';
import correo from "../../images/correo.png";
import lkdn from "../../images/lkdn.png";
import cv from "../../images/cv.png";
import git from "../../images/github.png";


import "./home.css";

export const Home = () => {


  const [img, setImg] = useState(0);

  const images = () =>{
    setImg ( "src={git2}" )
  }
  const title = "HOLA";

  const { text } = useTypewriter({
    words: [
      "MI NOMBRE ES JEISON MUÑOZ",
      "SOY DESARROLLADOR DE SOFTWARE FRONT END",
      "CREO APLICACIONES Y PAGINAS WEB",
      "BIENVENIDO A MI PORTAFOLIO",
    ],
    loop: {},
    typeSpeed: 120,
  });


  return (
    <>
      <section className="home">
        {/* <Particles/> */}
        <div className="container">
          <img src={PhotoPerfil} className="img-profile" />
          <div className="container-tl">
            <p className=" title">{title}</p>
            <div className="container-logos">
              <img src={git} onMouseOver={images} className="logos" atl="Github"/>
              <img src={lkdn} className="logos" atl="LinkedIn"/>
              <img src={correo} className="logos" atl="Correo"/>
              <img src={cv} className="logos" atl="CV"/>
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
