import { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register"
import Login from "../pages/login/Login"


export const AppContext = createContext(null);

const AppRouter = () => {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </BrowserRouter>

    )
}
export default AppRouter;