import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import correo from "../../images/correo.png";
import local from "../../images/local.png";
import cv from "../../images/cv.png";
import git from "../../images/github.png";
import "./contacto.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Contacto = () => {
  const [state, setstate] = useState(0);

  return (
    <>
      <section className="contacto">
        {/* <div className="info">
          <div className="img-contact">
            <img src={correo} alt="correo" />
            <span>JEISONMZR@GMAIL.COM</span>
          </div>
          <div className="img-contact">
            <img src={local} alt="Localización" />
            <span>BARRANQUILLA, COLOMBIA</span>
          </div>
          <div className="img-contact">
            <img src={cv} alt="CV" />
            <span>DESCARGAR MI CV</span>
          </div>
          <div className="img-contact">
            <img src={git} alt="GitHub" />
            <span>JEISONMR</span>
          </div>
        </div> */}

        {/* -------------------------------------------------------------- */}

        <div className="social-2">
        <div className="info">
          <div className="img-contact">
            <img src={correo} alt="correo" />
            <span>JEISONMZR@GMAIL.COM</span>
          </div>
          <div className="img-contact">
            <img src={local} alt="Localización" />
            <span>BARRANQUILLA, COLOMBIA</span>
          </div>
          <div className="img-contact">
            <img src={cv} alt="CV" />
            <span>DESCARGAR MI CV</span>
          </div>
          <div className="img-contact">
            <img src={git} alt="GitHub" />
            <span>JEISONMR</span>
          </div>
          </div>
        </div>
        <div className="formulario">
          <div className="form">
            <Form
              className="formSub"
              ReactRef="formContact"
              action="https://formspree.io/f/xlevdpge"
              method="POST"
            >
              <Form.Group className="formGroup">
                <Form.Control
                  className="formControl"
                  size="small"
                  placeholder="TU NOMBRE"
                  name="Nombre"
                  type="text"
                  id="contactName"
                  autocomplete="off"
                />

                <Form.Control
                  className="formControl"
                  placeholder="TU EMAIL"
                  name="Correo"
                  type="email"
                  id="contactEmail"
                  autocomplete="off"
                />

                <Form.Control
                  className="formControl"
                  placeholder="ASUNTO"
                  name="Asunto"
                  type="contactAsunto"
                  autocomplete="off"
                />

                <Form.Control
                  className="formControl area"
                  placeholder="MENSAJE"
                  name="Mensaje"
                  as="textarea"
                  rows={6}
                  id="contactMensaje"
                  autocomplete="off"
                  resize="none"
                />
                <Button className="btnSend" type="submit">
                  ENVIAR MENSAJE
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
};
