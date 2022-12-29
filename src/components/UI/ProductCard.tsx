import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../../context/AppContext"

type PropType = {
    productID: string,
    type: string,
    price: number,
    manufacturer: string,
    category: string
}

export const ProductCard = ( { productID, type, price, category, manufacturer }:PropType ): JSX.Element => {

    const { userState, dispatch } = useContext( AppContext );

    const addToCart = async ( event: React.MouseEvent<HTMLButtonElement> ) =>{
        event.preventDefault();
        const cart_Item_Found = userState.userCart?.find( cart_Item => cart_Item.productID === productID );

        if( cart_Item_Found ) return dispatch({ type: 'addToCart', payload: { productID, count: cart_Item_Found.count +1 }})

        return dispatch({ type: 'addToCart', payload: { productID, count: 1 }})
    }


    return (
        <div className="card m-2 rounded" style={{ width: "18rem" }}>
            <img className="card-img-top p-2" src={`images/${type}.jpg`} height="250" alt={type} />
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title" style={{ color: "#013D29" }}>{type}</h5>
                    <h5>{ `$${price}` }</h5>
                </div>

                <div className="d-flex align-items-center mb-3">
                    <p className="card-subtitle" style={{ color: "#013D29" }}>{ `${manufacturer}: ${category}` }</p>
                </div>

                <div className="d-flex justify-content-between">
                    <button className="btn btn-sm btn-primary rounded" style={{ backgroundColor: "#013D29" }} onClick={ addToCart }>Add to cart</button>
                    <Link to="/payments" className="btn btn-sm btn-info rounded">Quick shop</Link>
                </div>
            </div>
        </div>
    )
}
