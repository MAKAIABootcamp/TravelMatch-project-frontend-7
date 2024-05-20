import { collection, getDocs } from "firebase/firestore";
import { destinosRequest, destinosFail, fillDestinos, destinoById } from "./destinosSlice";
import { dataBase } from "../../firebase/firebaseconfig";

const COLLECTION_NAME = "destinos"; //Nombre de la colección
const collectionRef = collection(dataBase, COLLECTION_NAME); //Referencia de la colección

export const actionGetDestinos = () => {
    return async (dispatch) => {
        dispatch(destinosRequest());
        const destinos = [];
        try {
            const querySnapshot = await getDocs(collectionRef);
            querySnapshot.forEach((doc) => {
                destinos.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
            dispatch(fillDestinos(destinos));
        } catch (error) {
            console.error(error);
            dispatch(destinosFail(error.message))
        }
    }
}
export const actionGetDestinoById = (destinoId) => {
    return async (dispatch) => {
        dispatch(destinosRequest());
        try {
            const destinoDoc = await getDocs(doc(collectionRef, destinoId));
            if (destinoDoc.exists()) {
                dispatch(destinoById([{ id: destinoDoc.id, ...destinoDoc.data() }]));
            } else {
                dispatch(destinosFail("Destino no encontrado"));
            }
        } catch (error) {
            console.error(error);
            dispatch(destinosFail(error.message));
        }
    };
};