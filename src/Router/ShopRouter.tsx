import { Routes, Route, Navigate } from 'react-router-dom';
import { Cart, Payments, Products } from '../components/pages';
import { LayoutWrapper } from '../components/UI';



export const ShopRouter = (): JSX.Element => {
    return (
        <LayoutWrapper>
            <Routes>
                <Route path='/' element={<Products />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/payments' element={<Payments />} />
                <Route path='/*' element={<Navigate to="/" />} />
            </Routes>
        </LayoutWrapper>
    )
}
