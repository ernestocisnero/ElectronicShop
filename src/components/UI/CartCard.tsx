import { doc, onSnapshot } from "firebase/firestore"
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import { firestoreCartDB } from "../../firebase/configFirebase"
import { removeFromUserCartDB } from "../../firebase/firestore/removeFromUserCartDB"
import { IProduct } from "../../interfaces"

type PropType = {
    productData: IProduct
}
export const CartCard = ({ productData }: PropType): JSX.Element => {

    const { userState, dispatch } = useContext(AppContext);

    const handleDeleteBtn = async ( event: React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault();
        await removeFromUserCartDB(productData.type, userState.uid);
        
        const unsub = onSnapshot(doc(firestoreCartDB, "user_carts", `${userState.uid}`), async (doc) => {
            await dispatch({ type: "removeFromCart", payload: doc.data()?.cart_items })
        });
    }

    return (
        <div className="container">

            <div className="card my-3 products">
                <div className="d-flex">
                    <div className="product-image">
                        <img src={`images/${productData.type}.jpg`} alt="product-image" width={100} />
                    </div>

                    <div className="d-flex flex-column flex-md-row flex-md-fill justify-content-md-between">
                        <div className="product-data mt-2">
                            <h6>{productData.type}</h6>
                            <p>Price: ${productData.price}</p>
                            <small>By: {productData.manufacturer}</small>
                        </div>

                        <div className="d-dlex flex-column m-3">
                            <div className="form-select">
                                <label htmlFor="select-quantity">Quantity</label>
                                <select className="form-select ml-1" aria-label="select-quantity" id="select-quantity">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="+10">+10</option>
                                </select>
                            </div>

                            <button className="btn btn-sm rounded btn-danger my-1" onClick={ handleDeleteBtn }>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
