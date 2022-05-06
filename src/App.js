import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/components/Pages/Home/Home/Home'
import Header from '../src/components/Pages/Shared/Header/Header';
import About from '../src/components/Pages/About/About';
import Login from '../src/components/Pages/Login/Login/Login';
import Register from '../src/components/Pages/Login/Register/Register';
import RequireAuth from '../src/components/Pages/Login/RequireAuth/RequireAuth';
import NotFound from '../src/components/Pages/Shared/NotFound/NotFound';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/about' element={<RequireAuth><About></About></RequireAuth>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
