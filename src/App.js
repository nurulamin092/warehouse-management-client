import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/components/Home/Home/Home'
import Header from '../src/components/Shared/Header/Header';
import About from '../src/components/About/About';
import Blogs from '../src/components/Home/Blogs/Blogs';
import Login from '../src/components/Login/Login/Login';
import Register from '../src/components/Login/Register/Register';
import RequireAuth from '../src/components/Login/RequireAuth/RequireAuth';
import NotFound from '../src/components/Shared/NotFound/NotFound';
import AddItems from './components/AddItems/AddItems';
import ProductDetail from './components/Home/ProductDetail/ProductDetail';
import Footer from './components/Shared/Footer/Footer';
import ManageProducts from './components/ManageProducts/ManageProducts';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/blogs' element={<Blogs></Blogs>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/add-items' element={<RequireAuth><AddItems></AddItems></RequireAuth>} />
        <Route path='/manage-product' element={<RequireAuth><ManageProducts></ManageProducts></RequireAuth>} />
        <Route path='/product/:productId' element={<RequireAuth><ProductDetail></ProductDetail></RequireAuth>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
