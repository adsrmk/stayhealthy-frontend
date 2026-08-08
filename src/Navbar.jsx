import React from 'react';

export default function Navbar() {
  const logout = () => {
    localStorage.removeItem('stayhealthy-authenticated');
    localStorage.removeItem('token');
    window.location.href = '/';
  };
  return (
    <nav className="navbar">
      <strong>StayHealthy</strong>
      <a href="/">Home</a>
      <a href="/appointments">Appointments</a>
      <a href="/signup">Sign Up</a>
      <a href="/login">Login</a>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}
