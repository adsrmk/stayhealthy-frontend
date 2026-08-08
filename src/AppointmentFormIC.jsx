import React, { useState } from 'react';

export default function AppointmentFormIC() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <form>
      <label>Name<input value={name} onChange={e => setName(e.target.value)} /></label>
      <label>Phone Number<input value={phone} onChange={e => setPhone(e.target.value)} /></label>
      <button type="submit">Book Appointment</button>
    </form>
  );
}
