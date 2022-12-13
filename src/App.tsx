import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { AppContext } from './context/AppContext';
import { AuthRouter } from './Router/AuthRouter';
import { ShopRouter } from './Router/ShopRouter';

import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/configFirebase';


function App() {

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            console.log(user);
            console.log(user.displayName, "is logged in");
            const uid = user.uid;
            
            
            // ...
        } else {
            // User is signed out
            console.log("User is signed out");
            
            // ...
        }
    });
}, []);

  const userStatus: string = 'not-authenticated'; //authenticated, not-authenticated
  //const { userState } = useContext(AppContext);

  return (
    <div className="App">
      <Routes>
        {
          userStatus !== 'not-authenticated'
            //userState.isLoggged
            ? <Route path='/*' element={<ShopRouter />} />
            : <Route path='/auth/*' element={<AuthRouter />} />
        }
        <Route path='/*' element={<Navigate to="/auth"/>} />
      </Routes>
    </div>
  )
}

export default App
