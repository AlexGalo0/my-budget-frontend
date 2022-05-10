import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Login } from './Components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RegistryForm } from './Components/RegistryForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Login> </Login> */}
    <RegistryForm> </RegistryForm>
  </React.StrictMode>
);


