import React from 'react'
import { Navbar } from './Interface/Navbar'
import { Footer } from './Interface/Footer'
import { Outlet } from 'react-router-dom'
import { Landing } from './Interface/Landing'

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
                <Outlet />
            <Footer></Footer>
        </>
    )
}

export default Home