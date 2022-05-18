import React from 'react'

export const AddExpenses = () => {
  return (
   
  
    <main id="bg-registry">
      <h1 id="titulo">Ingresa tus Datos para Registrarte</h1>


      <form id="formulario">
        <label htmlFor="firstName" className="inputs">
          Ingrese su Nombre:{" "}
        </label>
        <input
          type="text"
          name="firstName"
          // value={formValues.firstName}
          // onChange={handleChange}
          placeholder="Nombre"
        />
        <label htmlFor="lastName" className="inputs">
          Ingrese su Apellido:{" "}
        </label>
        <input
          type="text"
          name="lastName"
          // value={formValues.lastName}
          // onChange={handleChange}
          placeholder="Apellido"
        />

        <label htmlFor="email" className="inputs">
          Ingrese su Email:{" "}
        </label>
        <input
          type="text"
          name="email"
          // value={formValues.email}
          // onChange={handleChange}
          placeholder="Email"
        />

        <label htmlFor="password" className="inputs">
          Ingrese su Contraseña:{" "}
        </label>
        <input
          type="password"
          name="password"
          // value={formValues.password}
          // onChange={handleChange}
          placeholder="Contraseña"
        />

        {/* <label htmlFor="password" className="inputs">
          Confirme su Contraseña:{" "}
        </label>
        <input type="password" name="" id="" /> */}

        <button type="submit" id="boton" className="button-58">
          Enviar
        </button>
      </form>
    </main>
  )
}
