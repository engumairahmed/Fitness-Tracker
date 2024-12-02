

import { Route, Routes } from 'react-router-dom'
import { Landing } from './components/Interface/Landing'
import { Contactus } from './components/Interface/Contactus'
import { About } from './components/Interface/About'
import { Values } from './components/Interface/Values'
import { Features } from './components/Interface/Features'
import { Teams } from './components/Interface/Teams'
import DashboardLayout from './components/Dashboard/Layout'
import Home from './components/Home'
export const Router = () => {
  return (
    <div>
        {/* <Routes>
            <Route path='/' element={<Landing/>}>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='/values' element={<Values></Values>}></Route>
                <Route path='/feature' element={<Features></Features>}></Route>
                <Route path='/team' element={<Teams></Teams>}></Route>
                <Route path='/contactus' element={<Contactus></Contactus>}></Route>
                <Route path='/dashboard' element={<DashboardLayout/>}></Route>
            </Route>
        </Routes> */}
    </div>
  )
}
