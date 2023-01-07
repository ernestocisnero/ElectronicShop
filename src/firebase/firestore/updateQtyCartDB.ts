import { collection, query, where, getDocs, doc, updateDoc, arrayUnion, increment } from "firebase/firestore";
import { firestoreCartDB } from "../configFirebase";

export const updateQtyCartDB = async (type: string, userID: string | null, qty: string) => {

    const q = query(collection(firestoreCartDB, "shop-products"), where("type", "==", `${type}`));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (docUser) => {
        const userDocREF = doc(firestoreCartDB, "user_carts", `${userID}`);
        const productID = docUser.id;
        
        await updateDoc(userDocREF, {
            cart_items: arrayUnion({productID ,
                count: qty })
        });
    });
}