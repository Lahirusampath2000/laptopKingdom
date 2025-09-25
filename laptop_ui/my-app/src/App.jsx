import { useState } from 'react'
import './App.css'
import NavigationBar from './Modules/Navbar/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Modules/Dashboard/Dashboard.jsx'
import Nomatch from './Modules/Nomatch/Nomatch.jsx'
import Laptop from './Modules/Laptop/Laptop.jsx'

function App() {
  

  return (
    <>
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/laptop' element={<Laptop/>}/>
        <Route path='*' element={<Nomatch/>}/>
      </Routes>
    </>
    
  )
}

export default App
