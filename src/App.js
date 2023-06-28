import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Feature from './Components/Features';
import CrimeInfo from './Components/CrimeInfo';
import SignUp from './Components/SignUp';
function App() {
  return (
    <div className="App">
      {/* <h2>Crime Analysis</h2> */}
      {/* <Home/> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CrimeInfo" element={<CrimeInfo />} />
          <Route path="/SignUp" element={<SignUp />} />
          {/* <Route path="/experience" element={<Experience />} /> */}
        </Routes>
        
      </Router>
      {/* <Feature/> */}
    </div>
  );
}

export default App;
