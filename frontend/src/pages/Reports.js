import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const Reports = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Reports
      </Typography>
      <Box mt={4}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h6">Report Content</Typography>
          {/* Add your report content here */}
        </Paper>
      </Box>
    </Container>
  );
};

export default Reports;
