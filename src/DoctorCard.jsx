import React, { useState } from 'react';

export default function DoctorCard({ doctor = { name: 'Dr. Maya Patel', specialty: 'General Medicine' } }) {
  const [appointment, setAppointment] = useState({ id: 'appt-1001', status: 'confirmed' });

  const cancelAppointment = () => {
    if (!appointment) return;
    setAppointment({ ...appointment, status: 'cancelled' });
  };

  return (
    <article className="doctor-card">
      <h3>{doctor.name}</h3>
      <p>{doctor.specialty}</p>
      <p>Appointment status: {appointment?.status || 'none'}</p>
      <button
        type="button"
        onClick={cancelAppointment}
        disabled={!appointment || appointment.status === 'cancelled'}
      >
        Cancel Appointment
      </button>
    </article>
  );
}
