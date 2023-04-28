import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/about" component={Home} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
