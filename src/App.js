import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/components/Pages/Home/Home/Home'
import Header from '../src/components/Pages/Shared/Header/Header';
import About from '../src/components/Pages/About/About';
import NotFound from '../src/components/Pages/Shared/NotFound/NotFound';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/about' element={<About></About>} />
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
