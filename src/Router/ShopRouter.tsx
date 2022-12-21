import { Routes, Route, Navigate } from 'react-router-dom';
import { AboutUs, Cart, Learn, Payments, Products, UserAccount } from '../components/pages';
import { LayoutWrapper } from '../components/UI';



export const ShopRouter = (): JSX.Element => {
    return (
        <LayoutWrapper>
            <Routes>
                <Route path='/' element={<Products />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/payments' element={<Payments />} />
                <Route path='/user_account' element={<UserAccount />} />
                <Route path='/learn' element={<Learn />} />
                <Route path='/about_us' element={<AboutUs />} />
                <Route path='/*' element={<Navigate to="/" />} />
            </Routes>
        </LayoutWrapper>
    )
}
