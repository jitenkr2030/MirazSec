import React from 'react';
import { Button, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import AssessmentIcon from '@mui/icons-material/Assessment';
import './Home.css';

const Home = () => {
  return (
    <Container className="home-container">
      <section className="hero-section">
        <Typography variant="h2" gutterBottom>Welcome to MirazSec</Typography>
        <Typography variant="h5" gutterBottom>Your trusted security solution.</Typography>
        <Button variant="contained" color="primary" href="/about-us">Learn More</Button> {/* Ensure href is correct */}
      </section>
      <section className="features-section">
        <Typography variant="h4" gutterBottom>Key Features</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <SecurityIcon fontSize="large" />
            <Typography variant="h6">AI-Driven Security</Typography>
            <Typography>Leverage AI for smarter security operations.</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <SupervisorAccountIcon fontSize="large" />
            <Typography variant="h6">Guard Management</Typography>
            <Typography>Manage your security guards efficiently.</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PersonPinIcon fontSize="large" />
            <Typography variant="h6">Client Management</Typography>
            <Typography>Manage client details and contracts.</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AssessmentIcon fontSize="large" />
            <Typography variant="h6">Real-Time Analytics</Typography>
            <Typography>Get real-time insights and analytics for better decision-making.</Typography>
          </Grid>
        </Grid>
      </section>
      <section className="testimonials-section">
        <Typography variant="h4" gutterBottom>What Our Clients Say</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">John Doe</Typography>
                <Typography>MirazSec has transformed our security operations with their cutting-edge technology.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Jane Smith</Typography>
                <Typography>The AI-driven insights provided by MirazSec are invaluable for our decision-making.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </section>
      <section className="cta-section">
        <Typography variant="h4" gutterBottom>Get Started with MirazSec Today</Typography>
        <Button variant="contained" color="primary" href="/login">Login</Button>
      </section>
    </Container>
  );
}

export default Home;
