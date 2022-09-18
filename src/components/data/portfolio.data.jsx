import ultColombia from "../../images/portfolio/ultracem-colombia.png";
import agnPopuli from "../../images/portfolio/agencia-populi.png";
import altLed from "../../images/portfolio/alutraficled.png";
import dexIo from "../../images/portfolio/dexio.png";
import gasCaribe from "../../images/portfolio/Gases-del-Caribe.png";
import aLeal from "../../images/portfolio/andreis-leal.png";

export const dataPortfolio = {
  title: "PORTAFOLIO",
  subTitle: "Estos son algunos de los proyectos en los que he trabajado",
  app: [
    {
      id: 1,
      name: "Andreis Leal",
      skills: ["React", "Bootstrap"],
      img: aLeal,
      type: "App",
    },
  ],
  sw: [
    {
      id: 1,
      name: "Ultrace Colombia",
      skills: ["WordPress", "Elementor"],
      img: ultColombia,
      type: "sw",
    },
    {
      id: 2,
      name: "Agencia Populi",
      skills: ["WordPress", "Elementor"],
      img: agnPopuli,
      type: "sw",
    },
    {
      id: 3,
      name: "Alutrafic Led",
      skills: ["WordPress", "Elementor"],
      img: altLed,
      type: "sw",
    },
    {
      id: 4,
      name: "Dexfreight",
      skills: ["WordPress", "Elementor"],
      img: dexIo,
      type: "sw",
    },
    {
      id: 5,
      name: "Gases del Caribe",
      skills: ["WordPress", "Divi"],
      img: gasCaribe,
      type: "sw",
    },
  ],
};
