import React from "react";
import "../Assets/AddExpense.css";
export const AddExpenses = () => {
  return (
    <main id="bg-addExpense">
      <h1 id="titulo">Añade un Gasto / Ingreso </h1>

      <form id="formulario">
        <label htmlFor="date" className="inputs">
          Ingrese el Tipo de Transaccion:
        </label>
        <select name="" id="">
          <option value="">Gasto</option>
          <option value="">Ingreso</option>
        </select>


        <label htmlFor="date" className="inputs">
          Ingrese la Categoria del Gasto / Ingreso :
        </label>
        <select name="" id="">
          <option value="">Abono Deuda</option>
          <option value="">No tengo Idea</option>
          <option value="">Que otra Categoria</option>
          <option value="">ESPN+</option>


        </select>

        <label htmlFor="name" className="inputs">
          Ingrese el Nombre del Gasto?:{" "}
        </label>
        <input
          type="text"
          name="name"
          // value={formValues.firstName}
          // onChange={handleChange}
          placeholder="Pago de Cuota de Carro"
        />
        <label htmlFor="date" className="inputs">
          Ingrese la Fecha:{" "}
        </label>
        <input
          type="date"
          name="date"
          // value={formValues.lastName}
          // onChange={handleChange}
          placeholder="Apellido"
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
