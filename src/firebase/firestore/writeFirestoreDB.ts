import { collection, doc, setDoc } from "firebase/firestore";
import { firestoreCartDB } from '../configFirebase';


export const writeFirestoreDB = async () => {

    const userCartREF = collection(firestoreCartDB, "user_carts");

    const userCart = {
        cart_items: [
            {
                productID: "PRODUCT_ID_lkhadfhafhdkj982398498",
                count: 21
            },
            {
                productID: "PRODUCT_ID_33333333333333ffffffffffffff",
                count: 3
            }
        ]
    }

    await setDoc(doc(userCartREF, "USER_ID_fdkfiklonvb8676482"), userCart);


    
}