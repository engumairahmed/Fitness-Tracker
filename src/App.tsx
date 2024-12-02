
import { Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Interface/Footer'
import { Navbar } from './components/Interface/Navbar'
import { Router } from './Router'
import { Landing } from './components/Interface/Landing'
import { About } from './components/Interface/About'
import { Values } from './components/Interface/Values'
import { Features } from './components/Interface/Features'
import { Teams } from './components/Interface/Teams'
import { Contactus } from './components/Interface/Contactus'
import DashboardLayout from './components/Dashboard/Layout'
import Home from './components/Home'
import NotFound from './components/Notfound'
import DashboardHome from './components/Dashboard/Home'


function App() {


  return (
    <>
      <Routes>
        {/* Authentication Routes */}

        {/* Landing page Interface Routes */}

        <Route path='/' element={<Home />}>
          <Route path='*' element={<NotFound/>}></Route>
          <Route index element={<Landing />}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/values' element={<Values></Values>}></Route>
          <Route path='/feature' element={<Features></Features>}></Route>
          <Route path='/team' element={<Teams></Teams>}></Route>
          <Route path='/contactus' element={<Contactus></Contactus>}></Route>
        </Route>

        {/* Dashboard Routes */}

        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route path='*' element={<NotFound/>}></Route>
          <Route index element={<DashboardHome/>}></Route>
        </Route>

      </Routes>
    </>
  )
}

export default App
