
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Novo from './pages/novo'
import Erro from './pages/erro'
import Layout from './components/layout'


export default function App() {
    return (
      <BrowserRouter>
      <Routes>
          <Route element={<Layout/>} >
          <Route path='/' element={<Home/>} />
          <Route path='/novo' element={<Novo/>} />
          </Route>  
        <Route path='*' element={<Erro/>} />
     
      </Routes>
      </BrowserRouter>
    )
 }