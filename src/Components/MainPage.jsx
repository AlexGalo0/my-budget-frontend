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
        <Link to='expenses'>
        <button className='botones'>
        <i class="fa-solid fa-wallet fa-6x"></i>
          <p className="buttonText">View Expense and Incomes</p>
        </button>
        </Link>
        <Link to='transfer'>
        <button className='botones '>
          <i class="fa-solid fa-money-bill-transfer fa-6x"></i>
          <p className="buttonText">Transfer Money</p>
        </button>
        </Link>
        <Link to='dashboard'>
        <button className='botones '>
        <i class="fa-solid fa-coins fa-6x"></i>
          <p className="buttonText">General Dashboard</p>
        </button>
        </Link>
      </div>
    </main>
  );
};

