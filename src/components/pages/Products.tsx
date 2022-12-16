import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { writeFirestoreDB } from '../../firebase/firestore/writeFirestoreDB';

export const Products = (): JSX.Element => {

    useEffect(() => {
        writeFirestoreDB();
    }, [])
    
    return (
        <div>

            <Link className="text-info" to={'/cart'}>Cart</Link>
            <Link className="text-info" to={'/payments'}>payments</Link>
            <Link className="text-info" to={'/auth'}>Auth</Link>
        </div>
    )
}
