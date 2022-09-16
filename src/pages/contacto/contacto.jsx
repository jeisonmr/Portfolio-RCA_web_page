import React from "react";
import { Button, Form } from "react-bootstrap";
import "./contacto.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Contacto = () => {

  const title = 'CONTACTO';

  return (
    <>
      <section className="contacto" id="contact">
      <div className="title-5">{title}</div>
        <div className="formulario">
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
      </section>
    </>
  );
};
