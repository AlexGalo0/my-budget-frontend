import React, { useState,useEffect } from "react";
import "../Assets/RegistryForm.css";

export const RegistryForm = () => {
  const initialValues = { firstName: "", lastName: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({})
  const [submit, setSubmit] = useState(false)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value }); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues))
    setSubmit(true)
  };

  useEffect(()=>{
    console.log(formErrors)
    if(Object.keys(formErrors).length===0 && submit) {
      console.log(formValues);
    }
  },[formErrors])


  const validate=(values)=>{
    const errors={}
    const regex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    if(!values.firstName) errors.firstName= "First Name is Required"
    if(!values.lastName) errors.lastName= "Last Name is Required"
    


    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }


    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }

    return errors
  }


  return (
    <main id="bg-registry">
      <h1 id="titulo">Ingresa tus Datos para Registrarte</h1>


      <form id="formulario" onSubmit={{ handleSubmit }}>
        <label htmlFor="firstName" className="inputs">
          Ingrese su Nombre:{" "}
        </label>
        <input
          type="text"
          name="firstName"
          value={formValues.firstName}
          onChange={handleChange}
          placeholder="Nombre"
        />
        <label htmlFor="lastName" className="inputs">
          Ingrese su Apellido:{" "}
        </label>
        <input
          type="text"
          name="lastName"
          value={formValues.lastName}
          onChange={handleChange}
          placeholder="Apellido"
        />

        <label htmlFor="email" className="inputs">
          Ingrese su Email:{" "}
        </label>
        <input
          type="text"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="Email"
        />

        <label htmlFor="password" className="inputs">
          Ingrese su Contraseña:{" "}
        </label>
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
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
  );
};
