import React from 'react'
import '../Assets/Expenses.css'
export const AddAcount = () => {
  return (
    <main id="bg-expenses">
    <h1 id="tituloExpenses">Registre una Nueva Cuenta</h1>
    
    <form id="formulario" className='addingAccount' >
      <label htmlFor="nombreCuenta" className="inputs">
        Ingrese un nombre para su Cuenta:
      </label>
      <input
        type="text"
        name="firstName"
        // value={formValues.firstName}
        // onChange={handleChange}
        placeholder="Cuenta Ahorro Principal"
      />
      <label htmlFor="lastName" className="inputs">
        Ingrese el tipo de Cuenta: 
      </label>
     <select name="" id="">
       <option value="">Ahorro</option>
       <option value="">Credito</option>
     </select>

     

      {/* <label htmlFor="password" className="inputs">
        Confirme su Contraseña:{" "}
      </label>
      <input type="password" name="" id="" /> */}

      <button type="submit" id="boton" className="button-58">
        Crear Cuenta
      </button>
    </form>
  </main>
  )
}
