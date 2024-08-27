// src/pages/DigitalReport.js

import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const DigitalReport = () => {
  const handleSubmitReport = () => {
    // Handle report submission logic
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Fill Digital Report
      </Typography>
      <Box component="form" onSubmit={handleSubmitReport} noValidate sx={{ mt: 3 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="report"
          label="Report Details"
          name="report"
          autoComplete="report"
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Submit Report
        </Button>
      </Box>
    </Container>
  );
};

export default DigitalReport;