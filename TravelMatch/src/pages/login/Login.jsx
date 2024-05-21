import React from "react";
import "./login.scss"
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import Swal from "sweetalert2";

import imageUser from "../../assets/user_747376.png";
import imageEmail from "../../assets/email_1159936.png";
import imagePassword from "../../assets/lock_8472244.png";
import { actionLoginWithEmailAndPassword } from "../../redux/userAuth/userAuthActions";
//import { loginProviders } from "../../data/loginProviders";
//import { logout } from "../../redux/userAuth/userAuthSlice";


const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Por ingrese un correo válido")
                .required("Debe digitar su correo electrónico"),
            password: Yup.string().required("Debe digitar una contraseña"),
        }),
        onSubmit: async (values) => {
            dispatch(actionLoginWithEmailAndPassword(values));
            console.log(values)
        },
    });

   
    return (
        <> 
            <main className="login">
                <figure className="login__image">
                    <img src={imageUser} alt="avatar" />
                </figure>
                <form onSubmit={formik.handleSubmit}>
                    <label
                        htmlFor="email"
                        className={formik.touched.email && formik.errors.email ? "error" : ""}
                    >
                        <img src={imageEmail} alt="email" />
                        <input
                            type="email"
                            placeholder="ejemplo@email.com"
                            id="email"
                            {...formik.getFieldProps("email")}
                        />
                    </label>
                    {formik.touched.email && formik.errors.email ? (
                        <div className="errorText">{formik.errors.email}</div>
                    ) : null}
                    <label
                        htmlFor="password"
                        className={
                            formik.touched.password && formik.errors.password ? "error" : ""
                        }
                    >
                        <img src={imagePassword} alt="password" />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            id="password"
                            {...formik.getFieldProps("password")}
                        />
                    </label>
                    {formik.touched.password && formik.errors.password ? (
                        <div className="errorText">{formik.errors.password}</div>
                    ) : null}
                    <button type="submit">Iniciar Sesión</button>
                    <button
                        className="goToRegister"
                        type="button"
                        onClick={() => navigate("/register")}
                    >
                        Registrarse
                    </button>
                    {/* {loginProviders.map((item, index) => (
                        <ProvidersLogin
                            key={index}
                            name={item.name}
                            image={item.image}
                            colorButton={item.colorButton}
                            provider={item.provider}
                        />
                    ))} */}
                </form>

            </main>

        </>
    )
};

export default Login;