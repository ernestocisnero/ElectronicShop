import { PublicityBanner } from '../UI/PublicityBanner';
import { useEffect, useState } from 'react';
import { readProductsDB } from '../../firebase/firestore/readProductsDB';
import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import { ProductCard } from '../UI';


export const Products = (): JSX.Element => {

    const [ query_docs, setquery_docs] = useState<QueryDocumentSnapshot<DocumentData>[]>([])

    const getQuery = async () => {
        const query_response = await readProductsDB();
        setquery_docs(query_response);
    }

    useEffect(() => {
        getQuery();
    }, [])

    return (
        <>
            <PublicityBanner />
            <h1>Products</h1>

            {
                query_docs.map(doc => {
                    return <ProductCard key={ doc.id } type={doc.data().type} category={ doc.data().category } manufacturer={ doc.data().manufacturer } price={ doc.data().price }/>
                })
            }
        </>
    )
}
