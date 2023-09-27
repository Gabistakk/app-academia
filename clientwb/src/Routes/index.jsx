
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Exercicios from '../pages/Exercicios'
import Metas from '../pages/Metas'
import Dietas from '../pages/Dietas'
import Resultados from '../pages/Resultados'
import Registro from '../pages/Registro'
import Login from '../pages/Login'
import Peso from '../pages/Peso'

export default function MinhasRotas() {
  return (
    <BrowserRouter>
    
    <Routes> 

      <Route path='/' element={<Registro/>}/>
      <Route path='/peso' element={<Peso/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/exercicios' element={<Exercicios/>}/>
      <Route path='/Meta' element={<Metas/>}/>
      <Route path='/dietas' element={<Dietas/>}/>
      <Route path='/resultados' element={<Resultados/>}/>


    </Routes>
    
    </BrowserRouter>
  )
}
