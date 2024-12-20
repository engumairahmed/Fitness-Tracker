import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'
import { Landing } from './Landing'

const InterfaceLayout = () => {
    return (
        <>
            <Navbar></Navbar>
                <Outlet />
            <Footer></Footer>
        </>
    )
}

export default InterfaceLayout