import { useContext, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { AppContext } from './context/AppContext';
import { AuthRouter } from './Router/AuthRouter';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/configFirebase';
import { ShopRouter } from './Router/ShopRouter';

function App() {

  const { userState, dispatch } = useContext(AppContext);

    useEffect(() => {
        onAuthStateChanged(auth, (user): void => {
            if (user) {

                dispatch( { type: 'log_user', payload: {
                    isLoggged: true,
                    uid: user.uid,
                    displayName: user.displayName,
                    email: user.email
                } } )
    
            } else {
                dispatch({ type: 'log_user', payload: {
                    isLoggged: false,
                    uid: null,
                    displayName: null,
                    email: null
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
