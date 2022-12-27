import { collection, query, getDocs } from "firebase/firestore";
import { firestoreCartDB } from "../configFirebase";


export const readProductsDB = async () => {

    const q = query(collection(firestoreCartDB, "shop-products"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs
}