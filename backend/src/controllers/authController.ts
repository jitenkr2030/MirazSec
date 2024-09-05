import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { users } from '../data/users';

const generateAuthToken = (user: any) => {
  const token = jwt.sign({ _id: user.id, role: user.role }, process.env.JWT_SECRET!, {
    expiresIn: '1h',
  });
  return token;
};

export const login = async (req: Request, res: Response) => {
  const { email, password, role } = req.body;
  console.log(`Received login attempt with email: ${email}, role: ${role}`);

  try {
    // Find user based on email and role
    const user = users.find(user => user.email === email && user.role === role);
    if (!user) {
      console.log(`User with email ${email} and role ${role} not found`);
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    console.log(`Found user: ${JSON.stringify(user)}`);

    // Compare password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(`Password match status for user ${email}: ${isMatch}`);

    if (!isMatch) {
      console.log(`Password for user ${email} does not match`);
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate authentication token
    const token = generateAuthToken(user);

    console.log(`Login successful for user ${email}`);
    res.json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
