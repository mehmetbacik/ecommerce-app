import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div id='content'>
          <Routes>
            <Route path="/" exact element={<Products />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

