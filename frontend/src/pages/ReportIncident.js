// src/pages/ReportIncident.js

import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const ReportIncident = () => {
  const handleReportIncident = () => {
    // Handle incident reporting logic
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Report Incident
      </Typography>
      <Box component="form" onSubmit={handleReportIncident} noValidate sx={{ mt: 3 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="description"
          label="Incident Description"
          name="description"
          autoComplete="description"
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Report
        </Button>
      </Box>
    </Container>
  );
};

export default ReportIncident;