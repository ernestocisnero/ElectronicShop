import { doc, DocumentData, DocumentSnapshot, getDoc } from "firebase/firestore";
import { useContext, useState } from 'react';
import { AppContext } from "../context/AppContext";
import { firestoreCartDB } from "../firebase/configFirebase";
import { IProduct } from "../interfaces";


export const useGetCartProducts = () => {

    const { userState } = useContext(AppContext);   

    userState.userCart?.map(async (item) => {
        const productREF = doc(firestoreCartDB, 'shop-products', `${item.productID}`);
        const productSnap = await getDoc(productREF);
        const docs = productSnap.data();
        return docs
        
    })
}