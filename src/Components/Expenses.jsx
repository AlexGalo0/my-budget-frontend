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
        <label htmlFor="select">Ver:  </label>
        <select name="" id="">
          <option value="">Gastos</option>
          <option value="">Ingresos</option>
        </select>
      </div>


      <h2 id='tituloTabla'>Información de Gastos</h2>
<div class="table-wrapper">
    <table class="fl-table">
        <thead>
        <tr>
            <th>Nombre de Transacción</th>
            <th>ID</th>
            <th>Fecha</th>
            <th>Monto</th>
          
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Content 1</td>
            <td>Content 1</td>
            <td>Content 1</td>
            <td>Content 1</td>
           
        </tr>
        <tr>
            <td>Content 2</td>
            <td>Content 2</td>
            <td>Content 2</td>
            <td>Content 2</td>
            
        </tr>
        <tr>
            <td>Content 3</td>
            <td>Content 3</td>
            <td>Content 3</td>
            <td>Content 3</td>
          
        </tr>
        <tr>
            <td>Content 4</td>
            <td>Content 4</td>
            <td>Content 4</td>
            <td>Content 4</td>
          
        </tr>
        <tr>
            <td>Content 5</td>
            <td>Content 5</td>
            <td>Content 5</td>
            <td>Content 5</td>
          
        </tr>
        <tr>
            <td>Content 6</td>
            <td>Content 6</td>
            <td>Content 6</td>
            <td>Content 6</td>
           
        </tr>
        <tr>
            <td>Content 7</td>
            <td>Content 7</td>
            <td>Content 7</td>
            <td>Content 7</td>
         
        </tr>
        <tr>
            <td>Content 8</td>
            <td>Content 8</td>
            <td>Content 8</td>
            <td>Content 8</td>
        
        </tr>
        <tr>
            <td>Content 9</td>
            <td>Content 9</td>
            <td>Content 9</td>
            <td>Content 9</td>
          
        </tr>
        <tr>
            <td>Content 10</td>
            <td>Content 10</td>
            <td>Content 10</td>
            <td>Content 10</td>
           
        </tr>
        </tbody>
    </table>
</div>





    </main>
  );
};
