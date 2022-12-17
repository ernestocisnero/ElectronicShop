import { collection, doc, setDoc } from "firebase/firestore";
import { IProductCart } from "../../interfaces";
import { firestoreCartDB } from '../configFirebase';


export const writeFirestoreDB = async (user_uid: string, product: IProductCart): Promise<IProductCart> => {

    const userCartREF = collection(firestoreCartDB, "user_carts");

    const userCart = {
        cart_items: [
            {
                productID: product.productID,
                count: product.count
            }
        ]
    }
    await setDoc(doc(userCartREF, `${user_uid}`), userCart);
    return product
}