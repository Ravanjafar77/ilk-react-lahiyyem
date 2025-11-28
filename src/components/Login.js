import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

import { useNavigate } from 'react-router-dom'; 
import './Auth.css';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ 
    email: '', 
    password: '' 
  });
  
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert('Bütün xanaları doldurun!');
      return;
    }
    
  
    console.log('Login:', formData);
    alert('Giriş uğurlu oldu!');
    
  
    navigate('/'); 
    
   
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1>Welcome</h1>
            <p>Log in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label>Email</label>
              <div className="input-wrapper">
                <Mail className="input-icon" size={20} />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="email@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="input-wrapper">
                <Lock className="input-icon" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="form-footer">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>Remember</span>
              </label>
              <a href="/forgot-password" className="forgot-link">Forgot your password?</a>
            </div>

            <button type="submit" className="submit-btn">
             Log in
            </button>
          </form>

          <div className="auth-switch">
            <p>
              Don't have an account?{' '}
              <a href="/signup">Register</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}