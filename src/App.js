import React from 'react'
import Navbar from './components/Navbar'
/* import Login from './components/LogIn' */
import Header from './components/Header'
import { Routes, Router } from 'react-router'

const App = () => {
  return (


    <div>
      <Navbar />
      <Header />
    </div>
    /* <Routes>
      <Router path='/' element={} />
      <Router path='/login' element={<Login />} />

    </Routes> */



  )
}

export default App