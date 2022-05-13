import React from "react";
import { Link } from "react-router-dom";
import "../Assets/LandingPage.css";
export const LandingPage = () => {
  return (
    <main id="bg-landing">
      <h1 id="titulo">Bienvenido a MyBudget!</h1>
      <section id="options">
        <Link to="/registry">
          <button class="btn btn1">Registrate</button>
        </Link>
        <Link to='login'>
        <button class="btn btn2">Inicia Sesion</button>
        
        </Link>
      </section>
    </main>
  );
};
