import { doc, getDoc } from "firebase/firestore";
import { IProductCart } from "../../interfaces";
import { firestoreCartDB } from "../configFirebase";
import { createUserCartDB } from "./createUserCartDB";



export const readFirestoreDB = async (user_uid: string | null): Promise<IProductCart[]>=>{
    const querySnapshot = await getDoc(doc(firestoreCartDB, "user_carts", `${user_uid}`));

    const data = querySnapshot.data();

    return data
    ? data?.cart_items
    : createUserCartDB(user_uid);
}