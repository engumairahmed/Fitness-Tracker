import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"


const RouterComponent = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
    </Routes>
  )
}

export default RouterComponent