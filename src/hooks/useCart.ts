import { doc, DocumentData, getDoc } from "firebase/firestore";
import { useContext, useState, useEffect } from 'react';
import { AppContext } from "../context/AppContext";
import { firestoreCartDB } from "../firebase/configFirebase";


export const useCart = () => {

    const { userState } = useContext(AppContext);

    const [userProducts, setUserProducts] = useState<DocumentData | undefined>()
    const [subtotal, setSubtotal] = useState<number>(0)

    useEffect(() => {
        const userProductList: DocumentData | undefined = [];
        let totalPrice: number = 0;

        userState.userCart?.map(async (item) => {

            const productREF = doc(firestoreCartDB, 'shop-products', `${item.productID}`);
            const productSnap = await getDoc(productREF);
            const productList = productSnap.data();

            userProductList.push(productList);

            totalPrice += productList?.price;

            setUserProducts(userProductList);
            setSubtotal(totalPrice);
        })


    }, [userState.userCart])

    return {
        userProducts,
        subtotal
    }
}