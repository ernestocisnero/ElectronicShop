import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './components/pages';
import { ShopRouter } from './Router/ShopRouter';

function App() {

  const userStatus: string = 'not-authenticated'; //authenticated, not-authenticated

  return (
    <div className="App">
      <h1>Electro-Shop</h1>

      <hr />

      <Routes>
        {
          userStatus !== 'not-authenticated' 
          ? <Route path='/*' element={ <ShopRouter /> }/>
          :<Route path='/login/*' element={ <Login /> }/>
        }
        <Route path='/*' element = { <Navigate to='/login'/> }/>
      </Routes>
    </div>
  )
}

export default App
