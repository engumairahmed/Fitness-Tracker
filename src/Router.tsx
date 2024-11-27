import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Landing } from './Components/Interface/Landing'
import { Features } from './Components/Interface/Features'
import { About } from './Components/Interface/About'
import { Contactus } from './Components/Interface/Contactus'
import { Teams } from './Components/Interface/Teams'
import { Values } from './Components/Interface/Values'
export const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Landing></Landing>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/values' element={<Values></Values>}></Route>
            <Route path='/feature' element={<Features></Features>}></Route>
            <Route path='/team' element={<Teams></Teams>}></Route>
            <Route path='/contactus' element={<Contactus></Contactus>}></Route>


        </Routes>
    </div>
  )
}
