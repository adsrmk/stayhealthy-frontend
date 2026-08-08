import React, { useState } from 'react';

export default function FindDoctorSearch({ doctors = [], onSelect }) {
  const [query, setQuery] = useState('');
  const matches = doctors.filter((doctor) => `${doctor.name} ${doctor.specialty}`.toLowerCase().includes(query.toLowerCase()));
  return (
    <section>
      <h2>Find a Doctor</h2>
      <input aria-label="Search doctors" placeholder="Search by doctor or specialty" value={query} onChange={e => setQuery(e.target.value)} />
      <div>{matches.map(doctor => <button key={doctor.id} onClick={() => onSelect?.(doctor)}>{doctor.name} — {doctor.specialty}</button>)}</div>
    </section>
  );
}
