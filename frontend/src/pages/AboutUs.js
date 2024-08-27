import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import './About.css';

const AboutUs: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          About MirazSec
        </Typography>
        <Typography variant="body1" paragraph>
          MirazSec is dedicated to revolutionizing the security operations industry with our cutting-edge Hybrid Guard & Client Security App. We understand the unique challenges faced by security guard companies, their clients, and field officers, and have developed a comprehensive solution that integrates AI-driven features, user-centric design, and seamless integration with existing security systems.
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to enhance security operations by providing a platform that not only improves efficiency and effectiveness but also ensures compliance with data privacy regulations. We focus on delivering value through automation, AI-driven insights, and a commitment to user-friendly interfaces.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Key Features
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" component="h3">
              Guard Management
            </Typography>
            <Typography variant="body2" paragraph>
              Our guard management features empower security companies to manage their workforce efficiently, with real-time monitoring, automated scheduling, and performance analytics.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" component="h3">
              Client Management
            </Typography>
            <Typography variant="body2" paragraph>
              MirazSec offers robust client management tools, allowing clients to access real-time reports, incident tracking, and seamless communication with security providers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" component="h3">
              Field Officer Features
            </Typography>
            <Typography variant="body2" paragraph>
              Field officers are equipped with mobile tools for incident reporting, route optimization, and instant access to critical information, ensuring they can perform their duties effectively.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" component="h3">
              AI-Driven Insights
            </Typography>
            <Typography variant="body2" paragraph>
              Leveraging AI, MirazSec provides actionable insights that help security companies make informed decisions, optimize operations, and proactively address potential threats.
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="h5" component="h2" gutterBottom>
          Our Commitment
        </Typography>
        <Typography variant="body1" paragraph>
          At MirazSec, we are committed to continuous innovation and excellence. Our team of experts is dedicated to enhancing the security operations landscape, ensuring that our clients can rely on us for secure, efficient, and effective solutions.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUs;
