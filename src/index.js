import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import { RegistryForm } from './Components/RegistryForm';
import { LandingPage } from './Components/LandingPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Login> </Login> */}
    {/* <RegistryForm> </RegistryForm> */}
    <LandingPage> </LandingPage>
  </React.StrictMode>
=======
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
>>>>>>> routing
);


