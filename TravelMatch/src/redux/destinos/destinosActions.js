import { collection, getDocs } from "firebase/firestore";
import { destinosRequest, destinosFail, fillDestinos } from "./destinosSlice";
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