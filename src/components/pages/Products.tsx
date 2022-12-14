import { Link } from 'react-router-dom';

export const Products = (): JSX.Element => {
    return (
        <div>

            <Link className="text-info" to={'/cart'}>Cart</Link>
            <Link className="text-info" to={'/payments'}>payments</Link>
            <Link className="text-info" to={'/auth'}>Auth</Link>
        </div>
    )
}
