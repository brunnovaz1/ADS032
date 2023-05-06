import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Novo from './pages/novo'
import Erro from './pages/erro'
import Navbar from './components/navbar'
import Layout from './components/layout'


export default function App() {
    return (
      <BrowserRouter>
      <Routes>
          <Route>
          <Route path='/' element={<Home/>} />
          <Route path='/novo' element={<Novo/>} />
          </Route>  
        <Route path='*' element={<Erro/>} />
     
      </Routes>
      </BrowserRouter>
    )
 }