import { Routes, Route, Navigate } from 'react-router-dom';
import { Cart, Payments, Products } from '../components/pages';


export const ShopRouter = (): JSX.Element => {
    return (
        <>
            <h4>The wrapper component</h4>
            <Routes>
                <Route path='/' element={<Products />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/payments' element={<Payments />} />
                <Route path='/*' element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}
