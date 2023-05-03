import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div id='content'>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

