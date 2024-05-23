import React, { useCallback, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Destinos from "../pages/Destinos/Destinos";
import Test from "../pages/Test/Test";
import Detalle from "../pages/Detalle/Detalle";
import Contacto from "../pages/Contacto/Contacto";
import Layout from "../components/Layout/Layout";
import PrivateRoutes from "./PublicRoutes";
import PublicRoutes from "./PrivateRoutes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseconfig";
import { loginRequest, loginSuccess } from "../redux/userAuth/userAuthSlice";

import Cargando from "../components/Cargando/Cargando";
import Reseñas from "../pages/Reseñas/Reseñas";
import AddDestination from "../pages/Destinos/AddDestination/AddDestination";
import DestinosForm from "../pages/DestinosForm/DestinosForm";

function AppRouter() {
  const { user } = useSelector((store) => store.userAuth);
  const dispatch = useDispatch();
  // const location = useLocation();
  // const navigate = useNavigate();

  useEffect(() => {
    //const storeRoute = JSON.parse(sessionStorage.getItem("currentRoute"));
    dispatch(loginRequest);
    onAuthStateChanged(auth, (userCredential) => {
      if (userCredential && !user) {
        dispatch(
          loginSuccess({
            id: userCredential.uid,
            name: userCredential.displayName,
            photo: userCredential.photoURL,
            accessToken: userCredential.accessToken,
          })
        );
      }
    });
  }, [user, dispatch]);

  //if(isLoading) return <Cargando/>

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Destinos" element={<Destinos />} />
          <Route path="/Detalle/:id" element={<Detalle />} />
          <Route path="reseñas" element={<Reseñas />} />
          <Route path="/addDestination" element={<AddDestination />} />
          <Route path="/Agregar-destino" element={<DestinosForm />} />

          <Route element={<PrivateRoutes />}>
            <Route path="Blog/:id" element={<Blog />} />
            <Route path="Test/:id" element={<Test />} />
            <Route path="Home" element={<Home />} />
          </Route>
          <Route element={<PublicRoutes />}>
            <Route path="Home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
