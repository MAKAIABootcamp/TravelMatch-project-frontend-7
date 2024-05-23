import {
  collection,
  doc,
  getDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import {
  preguntasRequest,
  fillPreguntas,
  preguntasFail,
} from "./preguntasSlice";
import { dataBase } from "../../firebase/firebaseconfig";

const COLLECTION_NAME = "preguntas"; //Nombre de la colección
const collectionRef = collection(dataBase, COLLECTION_NAME); //Referencia de la colección

export const actionGetPreguntas = () => {
  return async (dispatch) => {
    dispatch(preguntasRequest());
    const preguntas = [];
    try {
      const querySnapshot = await getDocs(collectionRef);
      querySnapshot.forEach((doc) => {
        preguntas.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      dispatch(fillPreguntas(preguntas));
    } catch (error) {
      console.error(error);
      dispatch(preguntasFail(error.message));
    }
  };
};
