import { Formik, Form, Field } from "formik";
import React from "react";
import "../RegistryForm.css";
// import {} from "react-bootstrap";

export const RegistryForm = () => {
  return (
    <>
        <h1 id="titulo">Ingresa tus Datos para Registrarte!</h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
            firstName: "",
            lastName: "",
          }}
        >
          <Form >
            <div id='formulario'>
            <label htmlFor="firstName" className="inputs" >Ingrese su Primer Nombre: </label>
            <Field type="name" name="firstName" placeholder="" />
        
            <label htmlFor="lastName" className="inputs" >Ingrese su Apellido: </label>
            <Field id="lastName" name="lastName" placeholder="" />

            <label htmlFor="email" className="inputs" >Ingrese su Email: </label>
            <Field
              id="email"
              name="email"
              placeholder="abcd@domain.com"
            />

            <label htmlFor="password" className="inputs" >Ingrese su Contraseña: </label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder=""
            />
            <button type="submit" id="boton">Enviar</button>
          </div>
          </Form>
        </Formik>
    </>
  );
};
