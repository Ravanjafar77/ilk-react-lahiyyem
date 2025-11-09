
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Login from './components/Login';
import Signup from './components/Singup';


function App() {
  return (
    <Router>
    
      
      <Routes>

           <Route path="/" element={<Navbar />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;