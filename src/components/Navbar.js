import { BrowserRouter as Router, Routes, Route, BrowserRouter, Link } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
  return (
    <>
    <div className='container'>
      <div className='oxcare'>
        <ul><li> <Link to="/">oxcare</Link></li></ul>
        </div>
      
      
 
      <nav className='nav-bar'>
        <ul>
         
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/doctors">Doctors</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>      
        </ul>
        <div className='ls-button'>
          <button className="login-btn">Login</button>
        <button className="signup-btn">Signup</button>
        </div>
      </nav>
      
         
       
      </div>
       <div className="doctorabout">
  <img src="/doctor.png" className="doctorphoto" alt="Doctor" />

  <div className="doctortext">
    <h1 className="hero-title">
      We Will Help<br />
      You To Improve<br />
      Your Mental Health
    </h1>

    <p className="hero-subtitle">
      Eu sit proin amet quis malesuada vitae velit. Vel consectetur nibh 
      quis ullamcorper quis. Quam enim tortor, id sed.
    </p>
      <button className='Get-appointment'>Get Appointment</button>
      <button className='Find-Specialist'>Find Specialist</button>
  </div>
</div>

         </>
    
  )
}
export default Navbar