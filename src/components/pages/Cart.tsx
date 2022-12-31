import { doc, DocumentData, getDoc } from "firebase/firestore";
import { useContext, useState, useEffect } from 'react';
import { AppContext } from "../../context/AppContext";
import { firestoreCartDB } from "../../firebase/configFirebase";
import { IProduct } from '../../interfaces/interfaces';

export const Cart = (): JSX.Element => {

  const { userState } = useContext(AppContext);
  const [userProducts, setUserProducts] = useState<DocumentData | undefined>()

  useEffect(() => {
    const userProductList: DocumentData | undefined = [];

    userState.userCart?.map(async (item) => {
      const productREF = doc(firestoreCartDB, 'shop-products', `${item.productID}`);
      const productSnap = await getDoc(productREF);
      const productList = productSnap.data();
      userProductList.push(productList);
      setUserProducts(userProductList)
    })
  }, [])

  return (
    <>
      <h1>cart</h1>
      {
        userProducts?.map((itemCart: IProduct) => {
          return <p key={itemCart.type}>{itemCart.type}</p>
        })
      }
    </>
  )
}
