import { doc, getDoc } from "firebase/firestore";
import { IProductCart } from "../../interfaces";
import { firestoreCartDB } from "../configFirebase";
import { writeFirestoreDB } from "./writeFirestoreDB";


export const readFirestoreDB = async (user_uid: string | undefined): Promise<IProductCart[]>=>{
    const querySnapshot = await getDoc(doc(firestoreCartDB, "user_carts", `${user_uid}`));

    const data = querySnapshot.data();
        
    return data
    ? data?.cart_items
    : writeFirestoreDB(user_uid, {productID: '', count:0});
}