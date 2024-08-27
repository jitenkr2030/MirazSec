import express from 'express';
import bcrypt from 'bcrypt';
import { users } from '../data/users';

const router = express.Router();

router.post('/api/login', (req, res) => {
    const { email, password, role } = req.body;
    console.log(`Received login attempt with email: ${email}, password: ${password}, role: ${role}`);

    const user = users.find(u => u.email === email && u.role === role);
    if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({ message: 'Login successful', token: 'some-token' });
    } else {
        console.log('Invalid credentials');
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

export default router;
