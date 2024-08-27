import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box, MenuItem, FormControl, InputLabel, Select } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    console.log('API Base URL:', process.env.REACT_APP_API_BASE_URL);
  }, []);

const handleLogin = async () => {
  console.log('Sending login request with:', { email, password, role });
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, role }),
    });

    const data = await response.json();
    console.log('Received response:', data);

    if (response.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('userRole', role); // Store the role in localStorage

      console.log('Navigating to dashboard for role:', role);
      if (role === 'admin') {
        navigate('/admin-dashboard');
      } else if (role === 'guard') {
        navigate('/guard-dashboard');
      } else if (role === 'client') {
        navigate('/client-dashboard');
      } else if (role === 'field-officer') {
        navigate('/field-officer-dashboard');
      }
    } else {
      setError(data.message || 'Invalid email, password, or role');
    }
  } catch (error) {
    console.error('Error during login:', error);
    setError('An error occurred during login. Please try again.');
  }
};
  return (
    <Container maxWidth="sm">
      <Box mt={8} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4">Login</Typography>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel id="role-label">Role</InputLabel>
          <Select
            labelId="role-label"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            label="Role"
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="guard">Guard</MenuItem>
            <MenuItem value="client">Client</MenuItem>
            <MenuItem value="field-officer">Field Officer</MenuItem>
          </Select>
        </FormControl>
        {error && <Typography color="error">{error}</Typography>}
        <Button variant="contained" color="primary" onClick={handleLogin} style={{ marginTop: '16px' }}>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
