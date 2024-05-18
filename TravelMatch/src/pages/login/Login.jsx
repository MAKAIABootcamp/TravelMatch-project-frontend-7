import { useContext } from "react";
import "./login.scss"
import useForm from "../../hooks/useForm";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import HeaderDos from "../../components/header/headerDos"
import Footer from "../../components/Footer/Footer"


const StyledForm = styled.form`
    display: flex;
    flex-direction:column;
    width:60%;
    gap:15px;
    div{
        display:flex;
        flex-direction:column;
    }
`
const StyledLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    height: 80vh;
 `
 const INITIALVALUE = {
    userName: '',
    password: ''
}

const Login = () => {
    const navigate = useNavigate()
    const [form, handleChange, reset] = useForm(INITIALVALUE)
  
    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = await getUserByEmailAndPassword(form);
        console.log("este es el user de login" +getUserByEmailAndPassword(form.userName));
        reset();
        if (user) {
            setUser(user)
            alert(`Bienvenid@ ${form.userName}`)
            navigate('/home') // recodar enlazar con home
        } else {
            alert("Verifique sus credenciales")
        }

    }

    return (
        <>
            <HeaderDos />
            <StyledLogin>
                <h1>Inicio de sesión</h1>
                <StyledForm onSubmit={handleSubmit}>
                    <div>
                        <label>Nombre de usuario</label>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            placeholder="Usuario"
                            value={form.userName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Contraseña"
                            value={form.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </StyledForm>
                <p>¿Aún no tienes una cuenta? {" "}
                    <Link to={"/register"}>Regístrate ahora </Link>
                </p>
            </StyledLogin>
            <Footer />
        </>
    )
};

export default Login;