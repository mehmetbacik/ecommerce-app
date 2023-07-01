import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Profile from './pages/Profile';
import Basket from './pages/Basket';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div id='content'>
          <Routes>
            <Route path="/" exact element={<Products />} />
            <Route path="/product/:product_id" element={<ProductDetail />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Basket" element={<Basket />} />
            <ProtectedRoute path="/Profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

