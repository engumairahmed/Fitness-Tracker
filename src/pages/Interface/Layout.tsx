
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'

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