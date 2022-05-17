import React from "react";
import { Link } from "react-router-dom";
import "../Assets/Main.css";
export const MainPage = () => {
  return (
    <main id="bg-main">
      <div id="navbar">
        <h1 id="welcome-text">Bienvenido a tu cuenta, Alex! </h1>
      </div>

      <div id="categories">
        <Link to="addacount">
          {" "}
          {/* Change name */}
          <button className="botones ">
          <i class="fa-solid fa-hand-holding-dollar fa-6x"></i>
    
            <p className="buttonText">Añadir Cuenta</p>
          </button>
        </Link>

        <Link to="addexpense">
          {/* Change name */}
          <button className="botones ">
          <i class="fa-solid fa-money-bill-trend-up fa-6x"></i>
            <p className="buttonText">Añadir Gastos o Ingresos</p>
          </button>
        </Link>

        <Link to="expenses">
          <button className="botones">
            <i class="fa-solid fa-wallet fa-6x"></i>
            <p className="buttonText">Ver Gastos o Ingresos</p>
          </button>
        </Link>
        <Link to="transfer">
          <button className="botones ">
            <i class="fa-solid fa-money-bill-transfer fa-6x"></i>
            <p className="buttonText">Transferir Dinero</p>
          </button>
        </Link>
        <Link to="dashboard">
          <button className="botones ">
          <i class="fa-solid fa-chart-line fa-6x"></i>
            <p className="buttonText">Informacion General</p>
          </button>
        </Link>
      </div>
    </main>
  );
};
