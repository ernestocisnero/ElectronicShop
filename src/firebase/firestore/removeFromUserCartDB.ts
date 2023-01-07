import { collection, query, where, getDocs, doc, updateDoc, arrayRemove } from "firebase/firestore";
import { firestoreCartDB } from "../configFirebase";

export const removeFromUserCartDB = async (type: string, userID: string | null) => {

    const q = query(collection(firestoreCartDB, "shop-products"), where("type", "==", `${type}`));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (docUser) => {
        console.log(userID,docUser.id);
        const userDocREF = doc(firestoreCartDB, "user_carts", `${userID}`);
        const productID = docUser.id;
        
        await updateDoc(userDocREF, {
            cart_items: arrayRemove({productID ,
                count: 1 })
        });
    });
}