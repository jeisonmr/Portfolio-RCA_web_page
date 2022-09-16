import git from "../../images/social/github.png";
import lnkd from "../../images/social/lkdn.png";
import correo from "../../images/social/correo.png";
import cv from "../../images/social/cv.png";

export const dataHome = {
  title: "HOLA",
  subTitle: [
    "MI NOMBRE ES JEISON MUÑOZ",
    "SOY DESARROLLADOR DE SOFTWARE FRONT END",
    "CREO APLICACIONES Y PAGINAS WEB",
    "BIENVENIDO A MI PORTAFOLIO",
  ],
  social: [
    {
      id: 1,
      name: 'GitHub',
      img : git,
      url: 'https://github.com/jeisonmr'
    },
    {
      id: 2,
      name: 'Linkedin',
      img : lnkd,
      url:'https://www.linkedin.com/in/jeison-mu%C3%B1oz-74549817b/'
    },
    {
      id: 3,
      name: 'Correo',
      img : correo,
      url:'#contact'
    },
    {
      id: 4,
      name: 'Curriculum Vitae',
      img : cv,
      url: 'https://www.canva.com/design/DAEvSRk3KMg/g69ILB8iT91szVPqaPs-Hg/view#1'
    },
  ],
};
