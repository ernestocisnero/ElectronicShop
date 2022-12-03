import { Routes, Route } from 'react-router-dom';
import { Cart, PageNotFound, Payments, Products } from '../components/pages';


export const ShopRouter = (): JSX.Element => {
    return (
        <>
            <h4>The wrapper component</h4>
            <Routes>
                <Route path='/products' element={<Products />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/payments' element={<Payments />} />
                <Route path='/*' element={<PageNotFound />} />
            </Routes>


        </>
    )
}
