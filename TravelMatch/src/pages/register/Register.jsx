import React from "react";
import { ErrorMessage, useFormik } from "formik";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import styled from "styled-components";
import HeaderDos from "../../components/header/headerDos"
import Footer from "../../components/Footer/Footer"

const passwordRegex =
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])\S{3,16}$/;

const StyledForm = styled.form`
    display: flex;
    flex-direction:column;
    width:60%;
    gap:15px;
    div{
        display:flex;
        flex-direction:column;
        gap:8px;
    }
    button{
        cursor:pointer;
    }
    .error {
        border: 2px solid red;
        color: red;
      }
    .errorsms {
        color: red;
    }

`
const StyledLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    height: 80vh;
 `

const Register = ({ }) => {

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            name: '',
            nameUser: '',
            status: '',
            urlPerfil: '',
            urlBarnner: '',
            password: '',
            confpassword: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(40, "* El nombre no debe exceder los 20 caracteres")
                .required("* Este campo es obligatorio")
                .matches(/^[a-zA-Z\s]+$/, "Solo se permiten letras"),
            nameUser: Yup.string()
                .max(10, "* El nombre no debe exceder los 10 caracteres")
                .required("* Este campo es obligatorio"),
            status: Yup.string()
                .max(50, "* No debes exceder los 50 caracteres"),
            password: Yup.string()
                .required("* Debe digitar una contraseña")
                .matches(
                    passwordRegex,
                    "* La contraseña al menos debe tener un dígito, una minúscula, una mayúscula, debe contener más de 3 caracteres pero no exceder los 16 caracteres."
                )
                .oneOf(
                    [Yup.ref("confpassword")],
                    "* La contraseña ingresada no coincide"
                ),
            confpassword: Yup.string()
                .required("* Debe digitar una contraseña")
                .matches(
                    passwordRegex,
                    "* La contraseña al menos debe tener un dígito, una minúscula, una mayúscula y debe contener más de 3 caracteres pero no exceder los 16 caracteres."
                )
        }),


        onSubmit: async (values) => {
            console.log("Pase por summit");
            console.log(values);
            const user = {
                nombre: values.name,
                usuario: values.nameUser,
                contraseña: values.password,
                estado: values.status,
                urlPerfil: values.urlPerfil,
                urlBarnner: values.urlBarnner,
                seguidores: [],
                seguidos: [],
                totalLikes: 0,
                etiquetas: []



            }
            const response = await createUser(user);
            console.log(response);
            if (response) {
                alert("Excelente! Haz creado exitosamente tu cuenta")
                navigate('/');
            } else {
                alert("Oops! Ha ocurrido un error")
            }
        },
    });


    return (
        <>
            <HeaderDos />
            <StyledLogin>
                <h1>Registro a Findy</h1>
                <StyledForm onSubmit={formik.handleSubmit}>
                    <div>
                        <label htmlFor="">Nombre completo</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Lola Perez"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            className={formik.touched.name && formik.errors.name ? "error" : ""}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className="errorsms">{formik.errors.name}</div>
                        ) : null}

                        <label htmlFor="">Nombre de usuario</label>
                        <input
                            type="text"
                            name="nameUser"
                            id="nameUser"
                            placeholder="Lola"
                            onChange={formik.handleChange}
                            value={formik.values.nameUser}
                        />
                        {formik.touched.nameUser && formik.errors.nameUser ? (
                            <div className="errorsms">{formik.errors.nameUser}</div>
                        ) : null}
                    </div>
                    <div>
                        <label htmlFor="">Tu estado</label>
                        <input
                            type="text"
                            name="status"
                            id="status"
                            placeholder="Taste that pink venom"
                            onChange={formik.handleChange}
                            value={formik.values.status}
                        />
                        {formik.touched.status && formik.errors.status ? (
                            <div className="errorsms">{formik.errors.status}</div>
                        ) : null}
                    </div>
                    <div>
                        <label htmlFor="">Foto de perfil</label>
                        <input
                            type="url"
                            name="urlPerfil"
                            id="urlPerfil"
                            placeholder="https://ilarge.lisimg.com/image/22555717/740full-jennie-kim.jpg"
                            onChange={formik.handleChange}
                            value={formik.values.urlPerfil}
                        />
                        {formik.touched.urlPerfil && formik.errors.urlPerfil ? (
                            <div className="errorsms">{formik.errors.urlPerfil}</div>
                        ) : null}
                    </div>
                    <div>
                        <label htmlFor="">Foto de portada</label>
                        <input
                            type="url"
                            name="urlBarnner"
                            id="urlBarnner"
                            placeholder="https://ilarge.lisimg.com/image/22555717/740full-jennie-kim.jpg"
                            onChange={formik.handleChange}
                            value={formik.values.urlBarnner}
                        />
                    </div>
                    {formik.touched.urlBarnner && formik.errors.urlBarnner ? (
                        <div className="errorsms">{formik.errors.urlBarnner}</div>
                    ) : null}
                    <div>
                        <label htmlFor="">Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Contaseña"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="errorsms">{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <div>
                        <label htmlFor="">Confirmar contraseña</label>
                        <input
                            type="password"
                            name="confpassword"
                            id="confpassword"
                            placeholder="Contaseña"
                            onChange={formik.handleChange}
                            value={formik.values.confpassword}
                        />
                        {formik.touched.confpassword && formik.errors.confpassword ? (
                            <div className="errorsms">{formik.errors.confpassword}</div>
                        ) : null}
                    </div>
                    <button type="submit">Registrar</button>

                </StyledForm>
                <p>si ya tiene una cuenta registrada inicie sesión <Link to={"/login"}>aquí!</Link></p>
            </StyledLogin>
            <Footer />



        </>
    )

};

export default Register;