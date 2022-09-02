import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import Contato from './components/pages/Contato'
import Login from  './components/pages/Login'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import SobreNos from  './components/pages/SobreNos'

import React from 'react'

import Container from './components/layout/Container'
function App() {
  return (

    <div className='App'>
         <Router>
          <Navbar />
            <Container customClass="min-height">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route exact path='/home' element={<Home/>} />
            <Route exact path='/Contato' element={<Contato/>} />
            <Route exact path='Login' element={<Login />} />
            <Route exact path='SobreNos' element={<SobreNos />} />
          </Routes>
          </Container>
         
          <Footer />
       </Router>
         
    </div>
  )
}

export default App;
