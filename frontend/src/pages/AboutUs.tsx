import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const AboutUs = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1">
          Welcome to MirazSec, your trusted security solution. We leverage AI-driven insights to provide top-notch security services.
        </Typography>
        {/* Add more content as needed */}
      </Box>
    </Container>
  );
};

export default AboutUs;
