import { doc, DocumentData, getDoc } from "firebase/firestore";
import { useContext, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { firestoreCartDB } from "../../firebase/configFirebase";
import { IProduct } from '../../interfaces/interfaces';
import { CartCard, CheckoutBtn } from "../UI";


export const Cart = (): JSX.Element => {

  const { userState } = useContext(AppContext);
  const [userProducts, setUserProducts] = useState<DocumentData | undefined>()
  const [subtotal, setSubtotal] = useState<number | null>(null)

  useEffect(() => {
    const userProductList: DocumentData | undefined = [];
    let subtotal: number = 0;

    userState.userCart?.map(async (item) => {
      const productREF = doc(firestoreCartDB, 'shop-products', `${item.productID}`);
      const productSnap = await getDoc(productREF);
      const productList = productSnap.data();
      userProductList.push(productList);
      setUserProducts(userProductList)
    })

    userProducts?.map((product: IProduct) => {
      subtotal = product.price + subtotal;
    })

    setSubtotal(subtotal);

  }, [userState.userCart])

  return (
    <>
      <div className="container my-5 d-flex justify-content-between">
        <h2 style={{ color: "#013D29" }}>Your cart</h2>
        <CheckoutBtn />
      </div>
      {
        userProducts?.map((itemCart: IProduct, index: number) => {
          return <CartCard key={index} productData={itemCart} />
        })
      }

      <div className="checkout container">
        <div className="border my-2"></div>
        <div className="d-flex justify-content-between">
          <h4>Subtotal:</h4>
          <h4>${subtotal}</h4>
        </div>
        <div className="border my-2"></div>

        <div className="d-flex flex-column align-items-center">

          <div className="checkout-btn">
            <CheckoutBtn />
          </div>

          <div className="d-flex mb-2">
            <button className="btn btn-xl rounded mt-3 mr-2" style={{ color: "#fff", backgroundColor: "#00457C" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-paypal mr-2" viewBox="0 0 16 16">
                <path d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.351.351 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91.379-.27.712-.603.993-1.005a4.942 4.942 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.687 2.687 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.695.695 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016c.217.124.4.27.548.438.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.873.873 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.352.352 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32.845-5.214Z" />
              </svg>
              Paypal
            </button>

            <button className="btn btn-xl rounded mt-3 mr-2" style={{ color: "#fff", backgroundColor: "#DB4437" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google mr-2" viewBox="0 0 16 16">
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
              Pay
            </button>

            <button className="btn btn-xl rounded mt-3 mr-2" style={{ color: "black", backgroundColor: "#d3d3d3" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-apple mr-2" viewBox="0 0 16 16">
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
              </svg>
              Pay
            </button>

          </div>

        </div>

      </div>

    </>
  )
}
