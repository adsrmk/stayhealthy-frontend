import express from 'express';

const app = express();
app.use(express.json());

const users = new Map();

app.post('/api/auth/register', (req, res) => {
  const { role = 'patient', name, email, phone, password } = req.body || {};
  if (!name || !email || !phone || !password) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  users.set(email, { role, name, email, phone, password });
  return res.status(201).json({
    success: true,
    message: 'User registered successfully',
    user: { role, name, email, phone }
  });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body || {};
  const user = users.get(email);

  if (!user || user.password !== password) {
    return res.status(401).json({ success: false, message: 'Invalid email or password' });
  }

  return res.status(200).json({
    success: true,
    message: 'Login successful',
    authtoken: 'stayhealthy-demo-authtoken-2026',
    user: { name: user.name, email: user.email, role: user.role }
  });
});

app.listen(3001, () => {
  console.log('StayHealthy API running on http://localhost:3001');
});
