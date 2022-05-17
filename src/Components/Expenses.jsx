import React from "react";
import "../Assets/Expenses.css";
export const Expenses = () => {
  return (
    <main>
      <div id="navbar">
        <h1 id="welcome-text">Gastos e Ingresos</h1>
      </div>

      {/* Nombre de Gasto/Ingreso
ID
Fecha
Monto */}

      <div id="filters">
        <label htmlFor="select">Filter By : </label>
        <select name="" id="">
          <option value="">Gastos</option>
          <option value="">Ingresos</option>
        </select>
      </div>
      <div id="table">
        <h4>Información de: Gastos</h4>
        <table>
          <tbody>
            <tr>
              <th>Nombre</th>
              <th>ID</th>
              <th>Fecha</th>
              <th>Monto</th>
            </tr>
            <tr>
              <td>UNAH Matricula</td>
              <td>0801256568</td>
              <td>5 de Febrero 2022</td>
              <td>500 Lps</td>
            </tr>
            <tr>
              <td>UNAH Matricula</td>
              <td>0801256568</td>
              <td>5 de Febrero 2022</td>
              <td>500 Lps</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};
