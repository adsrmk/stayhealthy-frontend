import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import Notification from './Notification.jsx';

export default function App() {
  const [notice, setNotice] = useState('Welcome to StayHealthy');
  return (
    <>
      <Navbar />
      <Notification message={notice} />
      <main className="hero">
        <div>
          <p className="eyebrow">Healthcare for Everyone</p>
          <h1>Quality Healthcare for Everyone, Everywhere.</h1>
          <p>StayHealthy connects you with trusted doctors and health services anytime, anywhere.</p>
          <div className="actions">
            <button onClick={() => setNotice('Appointment flow opened')}>Book an Appointment</button>
            <button className="secondary">Find a Doctor</button>
          </div>
        </div>
      </main>
    </>
  );
}
