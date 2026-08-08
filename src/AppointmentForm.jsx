import React, { useState } from 'react';

export default function AppointmentForm() {
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '' });
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const submit = (event) => {
    event.preventDefault();
    alert(`Appointment requested for ${form.name} on ${form.date} at ${form.time}`);
  };

  return (
    <form onSubmit={submit} className="appointment-form">
      <h2>Book an Appointment</h2>
      <label>
        Name
        <input name="name" value={form.name} onChange={update} required />
      </label>
      <label>
        Phone Number
        <input name="phone" type="tel" value={form.phone} onChange={update} required />
      </label>
      <label>
        Date
        <input name="date" type="date" value={form.date} onChange={update} required />
      </label>
      <label>
        Time
        <input name="time" type="time" value={form.time} onChange={update} required />
      </label>
      <button type="submit">Confirm Appointment</button>
    </form>
  );
}
