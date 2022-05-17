import React from 'react'
import {Routes,Route} from 'react-router'
import {LandingPage} from './Components/LandingPage'
import {RegistryForm} from './Components/RegistryForm'
import {Login} from './Components/Login'
import { MainPage } from './Components/MainPage'
import { UserAccount } from './Components/UserAccount'
import { NoMatch } from './Components/NoMatch'
// importar cs general
import './Assets/General.css'
import { Expenses } from './Components/Expenses'
import { GeneralDash } from './Components/GeneralDash'
import { Transfer } from './Components/Transfer'
export const App = () => {
  
  return (
    <>
    <Routes>
        <Route path='/' element={<LandingPage /> } />
        <Route path='registry' element={<RegistryForm />}></Route>
        <Route path='login' element={<Login />} ></Route>
        <Route path='main' element={<MainPage />}></Route>
        <Route path='user' element={<UserAccount/>}></Route>
        <Route path='*' element={<NoMatch/>} /> 
        <Route path='main/expenses' element={<Expenses />}></Route>
        <Route path='main/dashboard' element={<GeneralDash />}></Route>
        <Route path='main/transfer' element={<Transfer />}></Route>
        
    </Routes>

    </>
  )
}
/* 
background error : https://www.pluralsight.com/guides/change-page-background-color-each-route
*/
