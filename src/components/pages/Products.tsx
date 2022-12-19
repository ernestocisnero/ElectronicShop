import { Link } from 'react-router-dom';
import { signOutUser } from '../../firebase';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export const Products = (): JSX.Element => {
    const { dispatch } = useContext(AppContext);

    const handleSignOut = async () => {
        const user_signedOut = await signOutUser();
        dispatch({ type: 'logOut_user', payload: user_signedOut })
    }

    return (
        <>
        <h1>Products</h1>
            <div>
                <button onClick={handleSignOut}>SignOut</button>
            </div>
        </>
    )
}
