import React from 'react';
import { Container, Typography, TextField, Button, Box, MenuItem } from '@mui/material';

const AddUser = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle user addition logic here
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Add New User
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Name" fullWidth margin="normal" required />
        <TextField label="Email" fullWidth margin="normal" required type="email" />
        <TextField label="Password" fullWidth margin="normal" required type="password" />
        <TextField label="Role" select fullWidth margin="normal" required>
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="guard">Guard</MenuItem>
          <MenuItem value="client">Client</MenuItem>
          <MenuItem value="field-officer">Field Officer</MenuItem>
        </TextField>
        <Box mt={2}>
          <Button variant="contained" color="primary" type="submit">
            Add User
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default AddUser;
