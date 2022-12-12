import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppContext } from './context/AppContext';
import { AuthRouter } from './Router/AuthRouter';
import { ShopRouter } from './Router/ShopRouter';

function App() {

  const userStatus: string = 'not-authenticated'; //authenticated, not-authenticated
  //const { userState } = useContext(AppContext);

  return (
    <div className="App">
      <Routes>
        {
          userStatus !== 'not-authenticated' 
          //userState.isLoggged
            ? <Route path='/shop/*' element={<ShopRouter />} />
            : <Route path='/*' element={<AuthRouter />} />
        }
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  )
}

export default App
