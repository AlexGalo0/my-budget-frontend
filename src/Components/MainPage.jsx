import React from "react";
import "../Assets/Main.css";
export const MainPage = () => {
  return (
    <main id="bg-main">
      <div id="navbar">
        <h1 id="welcome-text">Bienvenido a tu cuenta, Alex! </h1>
      </div>

      <div id="categories">
        <button>View Expenses <br>
        </br>and Incomes!</button>
        <button>Transfer Money!</button>
        <button>General Dashboard</button>
      </div>
    </main>
  );
};

