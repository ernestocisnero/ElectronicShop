import { useContext, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { AppContext } from './context/AppContext';
import { AuthRouter } from './Router/AuthRouter';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/configFirebase';
import { ShopRouter } from './Router/ShopRouter';
import { readFirestoreDB } from './firebase/firestore/readFirestoreDB';

function App() {

  const { userState, dispatch } = useContext(AppContext);

    useEffect(() => {
        onAuthStateChanged(auth, async (user): Promise<void> => {
          const cart_items = await readFirestoreDB(user?.uid);

            if (user) {              
                dispatch( { type: 'log_user', payload: {
                    isLoggged: true,
                    uid: user.uid,
                    displayName: user.displayName,
                    email: user.email,
                    userPhotoURL: user.photoURL,
                    userCart: cart_items
                } } )
    
            } else {
                dispatch({ type: 'log_user', payload: {
                    isLoggged: false,
                    uid: null,
                    displayName: null,
                    email: null,
                    userPhotoURL: null, 
                    userCart: null
                } })
            }
        })
    }, [onAuthStateChanged])

return (
  <div className="App">
    <Routes>
      {
          userState.isLoggged
          ? <Route path='/*' element={<ShopRouter />} />
          : <Route path='/auth/*' element={<AuthRouter />} />
      }
      <Route path='/*' element={<Navigate to='/auth' />} /> 
    </Routes>
  </div>
)
}

export default App
