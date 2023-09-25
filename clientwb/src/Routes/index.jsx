
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Exercicios from '../pages/Exercicios'
import Metas from '../pages/Metas'
import Dietas from '../pages/Dietas'
import Resultados from '../pages/Resultados'

export default function MinhasRotas() {
  return (
    <BrowserRouter>
    
    <Routes> 

      <Route path='/' element={<Metas/>}/>
      <Route path='/exercicios' element={<Exercicios/>}/>
      <Route path='/dietas' element={<Dietas/>}/>
      <Route path='/resultados' element={<Resultados/>}/>


    </Routes>
    
    </BrowserRouter>
  )
}
