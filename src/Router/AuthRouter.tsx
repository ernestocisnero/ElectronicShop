import { Routes, Route } from 'react-router-dom';
import { Login, PageNotFound, Signup } from '../components/pages';



export const AuthRouter = (): JSX.Element => {

    return (
        <div className="main-login-wrapper">
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/signup/' element={<Signup />} />
                <Route path='/*' element={<PageNotFound />} />
            </Routes>
        </div>
    )
}
