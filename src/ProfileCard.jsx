import React, { useState } from 'react';

export default function ProfileCard() {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({ name: 'Alex Morgan', email: 'alex@example.com', phone: '+1 555 0100' });
  const update = (key, value) => setProfile({ ...profile, [key]: value });
  return (
    <section className="profile-card">
      <h2>Profile</h2>
      {editing ? (
        <form onSubmit={e => { e.preventDefault(); setEditing(false); }}>
          <label>Name<input value={profile.name} onChange={e => update('name', e.target.value)} /></label>
          <label>Email<input type="email" value={profile.email} onChange={e => update('email', e.target.value)} /></label>
          <label>Phone<input value={profile.phone} onChange={e => update('phone', e.target.value)} /></label>
          <button type="submit">Save Profile</button>
        </form>
      ) : (
        <>
          <p><strong>{profile.name}</strong></p>
          <p>{profile.email}</p>
          <p>{profile.phone}</p>
          <button onClick={() => setEditing(true)}>Edit Profile</button>
        </>
      )}
    </section>
  );
}
