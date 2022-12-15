import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { firestoreDB } from '../../firebase/firestore/firestoreDB';

export const Products = (): JSX.Element => {

    useEffect(() => {
        firestoreDB();
    }, [])
    
    return (
        <div>

            <Link className="text-info" to={'/cart'}>Cart</Link>
            <Link className="text-info" to={'/payments'}>payments</Link>
            <Link className="text-info" to={'/auth'}>Auth</Link>
        </div>
    )
}
