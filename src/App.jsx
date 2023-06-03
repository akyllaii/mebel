import {Routes,Route} from 'react-router-dom'
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/Contact/Contact";
import Catalog from "./pages/Catalog/Catalog";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import Room from "./pages/room/Room";
import NotFound from "./pages/NotFound/NotFound";
import './styles/style.scss'
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Favorites from "./pages/Favorites/Favorites";


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/catalog' element={<Catalog/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/room' element={<Room/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App
