import React from "react";
import "../Assets/Transfer.css";
export const Transfer = () => {
  return (
    <main id="bg-transfer">
      <h1 id="titulo">Realiza una Transferencia, Alex Galo </h1>

      <form id="formulario">

      <label>
        Ingrese la cuenta de la que desea retirar
      </label>
      <select name="" id="">
        <option value="">Cuenta de Ahorro Carro</option>
      </select>


        <label htmlFor="name" className="inputs">
          Ingrese el Número de Cuenta al que desea Depositar
        </label>
        <input
          type="text"
          name="name"
          // value={formValues.firstName}
          // onChange={handleChange}
          placeholder="26472231"
        />


        <label htmlFor="email" className="inputs">
          Ingrese el Monto (LPS):{" "}
        </label>
        <input
          type="text"
          name="email"
          // value={formValues.email}
          // onChange={handleChange}
          placeholder="500"
        />

        <button type="submit" id="boton" className="button-58">
          Enviar
        </button>
      </form>
    </main>
  );
};
