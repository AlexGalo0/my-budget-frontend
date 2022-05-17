import React from "react";
import '../Assets/Expenses.css'
export const Expenses = () => {
  return (
    <main>
      <div id="navbar">
        <h1 id="welcome-text">Gastos e Ingresos</h1>
      </div>


      
      <div id="filters">
        <label htmlFor="select">Filter By : </label>
        <select name="" id="">
          <option value="">Gastos</option>
          <option value="">Ingresos</option>
        </select>
      </div>
      <div id="table">
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
          </tr>
          <tr>
            <td>Hillary</td>
            <td>Nyakundi</td>
            <td>tables@mail.com</td>
          </tr>
          <tr>
            <td>Lary</td>
            <td>Mak</td>
            <td>developer@mail.com</td>
          </tr>
          
        </table>
      </div>
    </main>
  );
};
