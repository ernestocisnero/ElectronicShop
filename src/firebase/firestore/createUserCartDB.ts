import { collection, doc, setDoc } from "firebase/firestore";
import { firestoreCartDB } from "../configFirebase";

export const createUserCartDB = async ( user_uid: string | null )=>{

    const userCartREF = collection(firestoreCartDB, "user_carts");

    const userCart = {
        cart_items: []
        
    }

    await setDoc(doc(userCartREF,`${user_uid}` ), userCart);
}