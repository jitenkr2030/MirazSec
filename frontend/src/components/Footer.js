import React from 'react';
import { Box, Typography } from '@mui/material';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <Box className="footer">
      <Typography variant="body1">© 2024 MirazSec. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
