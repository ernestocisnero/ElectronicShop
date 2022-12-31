import { arrayRemove, arrayUnion, doc, updateDoc, where } from "firebase/firestore";
import { firestoreCartDB } from '../configFirebase';


export const addToUserCartDB = async (user_uid: string | null, productID:string) => { 

    const userDocREF = doc(firestoreCartDB, "user_carts", `${ user_uid }`);

    await updateDoc(userDocREF, {
        cart_items: arrayUnion({ productID,
            count: 1 })
    });
}