import { doc, onSnapshot } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { Link } from "react-router-dom"
import { AppContext } from "../../context/AppContext"
import { firestoreCartDB } from '../../firebase/configFirebase';
import { addToUserCartDB } from '../../firebase/firestore/addToUserCartDB';
import { IProductCart } from '../../interfaces/interfaces';


type PropType = {
    productID: string,
    type: string,
    price: number,
    manufacturer: string,
    category: string
}

export const ProductCard = ({ productID, type, price, category, manufacturer }: PropType): JSX.Element => {
    let cart: IProductCart[];
    const { userState, dispatch } = useContext(AppContext);

    const addToCart = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        await addToUserCartDB(userState.uid, productID);

        const unsub = onSnapshot(doc(firestoreCartDB, "user_carts", `${userState.uid}`), async (doc) => {
            await dispatch({ type: "addToCart", payload: doc.data()?.cart_items })
        });


    }


    return (
        <div className="card m-2 rounded" style={{ width: "18rem" }}>
            <img className="card-img-top p-2" src={`images/${type}.jpg`} height="250" alt={type} />
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title" style={{ color: "#013D29" }}>{type}</h5>
                    <h5>{`$${price}`}</h5>
                </div>

                <div className="d-flex align-items-center mb-3">
                    <p className="card-subtitle" style={{ color: "#013D29" }}>{`${manufacturer}: ${category}`}</p>
                </div>

                <div className="d-flex justify-content-between">
                    <button className="btn btn-sm btn-primary rounded" style={{ backgroundColor: "#013D29" }} onClick={addToCart}>Add to cart</button>
                    <Link to="/payments" className="btn btn-sm btn-info rounded">Quick shop</Link>
                </div>
            </div>
        </div>
    )
}
