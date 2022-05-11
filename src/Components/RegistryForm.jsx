import React from "react";
import "../Assets/RegistryForm.css";

export const RegistryForm = () => {














  return (
    <>
      <h1 id="titulo">Ingresa tus Datos para Registrarte</h1>

      <div id="formulario">
        <label htmlFor="firstName" className="inputs">
          Ingrese su Nombre:{" "}
        </label>
        <input type="text" name="" id="" />
        <label htmlFor="lastName" className="inputs">
          Ingrese su Apellido:{" "}
        </label>
        <input type="text" name="" id="" />

        <label htmlFor="email" className="inputs">
          Ingrese su Email:{" "}
        </label>
        <input type="text" name="" id="" />

        <label htmlFor="password" className="inputs">
          Ingrese su Contraseña:{" "}
        </label>
        <input type="text" name="" id="" />

        <label htmlFor="password" className="inputs">
          Confirme su Contraseña:{" "}
        </label>
        <input type="text" name="" id="" />

        <button type="submit" id="boton" className="button-58">
          Enviar
        </button>
      </div>
    </>
  );
};
