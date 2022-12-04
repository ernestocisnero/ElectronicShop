import { Routes, Route, Navigate } from 'react-router-dom';
import { Login, Signup } from './components/pages';
import { ShopRouter } from './Router/ShopRouter';

function App() {

  const userStatus: string = 'not-authenticated'; //authenticated, not-authenticated

  return (
    <div className="App">
      <Routes>
        {
          userStatus !== 'not-authenticated' 
          ? <Route path='/*' element={ <ShopRouter /> }/>
          :<Route path='/login/*' element={ <Login /> }/>
        }
        <Route path='/*' element = { <Navigate to='/login'/> }/>
        <Route path='/signup' element = { <Signup />}/>
      </Routes>
    </div>
  )
}

export default App
