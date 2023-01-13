import { useEffect, useState, useContext } from 'react';
import { readProductsDB } from '../../firebase/firestore/readProductsDB';
import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import { ProductCard } from '../UI';
import { AppContext } from '../../context/AppContext';

export const ProductList = () => {

    const { userState } = useContext(AppContext);
    const [query_docs, setquery_docs] = useState<QueryDocumentSnapshot<DocumentData>[] | undefined>([])

    const getQuery = async () => {
        const query_response = await readProductsDB(userState?.filter);
        setquery_docs(query_response);
    }

    useEffect(() => {
        getQuery();
    }, [userState.filter])



    return (
        <section className='container my-5'>
            <h2 style={{ color: "#013D29" }}>Our stock</h2>
            <div className='product-cards-list'>
                {
                    query_docs?.map(doc => {
                        return <ProductCard key={doc.id}
                            productID={ doc.id }
                            type={doc.data().type}
                            category={doc.data().category}
                            manufacturer={doc.data().manufacturer}
                            price={doc.data().price}
                        />
                    })
                }
            </div>
        </section>
    )
}
