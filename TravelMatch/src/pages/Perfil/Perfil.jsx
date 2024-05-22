import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { getAuth, updateProfile } from 'firebase/auth';
import { useNavigate, useLocation } from "react-router-dom";
import * as Yup from "yup";
import "../Perfil/perfil.scss";
import imagePhoto from "../../assets/photo-camera_711191.png";
import fileUpload from "../../services/fileUpload";
import { actionRegisterWithEmailAndPassword } from "../../redux/userAuth/userAuthActions";

const initialImage = "https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg";

const Perfil = () => {
    const location = useLocation();
    const { user } = location.state || {};
    const auth = getAuth();
    const [name, setName] = useState(auth.currentUser?.displayName || '');
    const [photo, setPhoto] = useState(auth.currentUser?.photoURL || initialImage);
    const [message, setMessage] = useState('');
    const [image, setImage] = useState(user.photo || initialImage);
    const [file, setFile] = useState(null);

    const dispatch = useDispatch();
    const { isAuth, isLoading, error } = useSelector(store => store.userAuth);
    const navigate = useNavigate();

    const handleChangeFile = (event) => {
        const fileItem = event.target.files[0];
        setFile(fileItem);
        setImage(URL.createObjectURL(fileItem));
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();

        try {
            const avatar = file ? await fileUpload(file) : photo;
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: avatar,
            });

            setPhoto(avatar);
            setMessage('Perfil actualizado con éxito');

            setTimeout(() => {
                navigate('/');
                window.location.reload();
            }, 1000);
        } catch (error) {
            setMessage(`Error actualizando el perfil: ${error.message}`);
        }
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            repeatPassword: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(40, "* El nombre no debe exceder los 40 caracteres")
                .required("* Este campo es obligatorio")
                .matches(/^[a-zA-Z\s]+$/, "Solo se permiten letras"),
        }),

        onSubmit: async (values) => {
            const avatar = await fileUpload(file);
            values.photo = avatar;
            dispatch(actionRegisterWithEmailAndPassword(values));
        },
    });

    return (
        <>
            <main className="contenedor_perfil">
                <div className="body_perfil">
                    <form className="form_perfil" onSubmit={handleUpdateProfile}>
                        <h2 className="tittle_perfil">Editar Perfil</h2>
                        <div className="datos_perfil">
                            {user ? (
                                <div>
                                    <h1>{user.name}</h1>
                                    <figure className="register__image">
                                        <img src={image} alt="avatar" />
                                    </figure>
                                </div>
                            ) : (
                                <p>No se proporcionó información del usuario.</p>
                            )}
                        </div>
                        <div className="llenar_perfil">
                            <label htmlFor="photo">
                                <img src={imagePhoto} alt="photo" />
                                <input
                                    type="file"
                                    id="photo"
                                    onChange={handleChangeFile}
                                />
                            </label>
                        </div>
                        <div className="llenar_perfil">
                            <label>
                                Nombre:
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                        </div>
                        <button className="boton_actualizar" type="submit">Actualizar Perfil</button>
                    </form>
                    {message && <p>{message}</p>}
                </div>
            </main>
        </>
    );
};

export default Perfil;