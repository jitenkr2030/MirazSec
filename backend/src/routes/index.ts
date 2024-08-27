import express from 'express';
const router = express.Router();

// Define the login route
router.post('/api/login', (req, res) => {
    const { email, password, role } = req.body;
    console.log(`Received login attempt with email: ${email}, password: ${password}, role: ${role}`);
    
    // Add your authentication logic here
    if (email === 'admin@example.com' && password === 'password' && role === 'admin') {
        res.status(200).json({ message: 'Login successful', token: 'some-token' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Add your authentication logic here
    if (email === 'guard@example.com' && password === 'password123' && role === 'guard') {
        res.status(200).json({ message: 'Login successful', token: 'some-token' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});


export default router;
