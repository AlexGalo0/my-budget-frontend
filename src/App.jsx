import React from 'react'
import {Routes,Route} from 'react-router'
import {LandingPage} from './Components/LandingPage'
import {RegistryForm} from './Components/RegistryForm'
import {Login} from './Components/Login'
import { MainPage } from './Components/MainPage'
import { UserAccount } from './Components/UserAccount'
import { NoMatch } from './Components/NoMatch'
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
    </Routes>

    </>
  )
}
/* 
background error : https://www.pluralsight.com/guides/change-page-background-color-each-route
*/
