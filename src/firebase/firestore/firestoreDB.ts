import { collection, getDoc, doc, setDoc } from "firebase/firestore";
import { firestoreCartDB } from '../configFirebase';


export const firestoreDB = async () => {

    const citiesRef = collection(firestoreCartDB, "user_carts");

    await setDoc(doc(citiesRef, "userfdkfiklonvb8676482"), {
        cart_items: [
            {
                productID: "lkhadfhafhdkj982398498",
                count: 20
            },
            {
                productID: "33333333333333ffffffffffffff",
                count: 3
            }
        ]
    }
    );


    const querySnapshot = await getDoc(doc(firestoreCartDB, "user_carts", "userfdkfiklonvb8676482"));

    const data = querySnapshot.data();
    data?.cart_items.map((item: any) => {
        console.log(item);
        console.log("Product ID", item.productID, "Count", item.count);


    })



}