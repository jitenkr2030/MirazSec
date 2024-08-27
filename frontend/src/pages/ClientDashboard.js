// src/pages/ClientDashboard.js
import React from 'react';
import { Container, Typography, Grid, Box, Card, CardContent, Button } from '@mui/material';

const ClientDashboard = () => {
    return (
        <Container>
            <Box mt={5}>
                <Typography variant="h4" gutterBottom>
                    Client Dashboard
                </Typography>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">Real-time Guard Activity Monitoring & Analytics</Typography>
                                <Typography variant="body1">
                                    Monitor guard activities in real-time and access detailed analytics on performance and incident trends.
                                </Typography>
                                <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
                                    Monitor Activities
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">Two-way Communication with Guards (with language translation)</Typography>
                                <Typography variant="body1">
                                    Communicate directly with guards through the app, with real-time language translation to overcome language barriers.
                                </Typography>
                                <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
                                    Communicate
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">Security Incident Reporting & Analytics</Typography>
                                <Typography variant="body1">
                                    Report security incidents and access detailed analytics and predictive modeling to anticipate future risks.
                                </Typography>
                                <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
                                    Report Incidents
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">Client Portal for Easy Access to Security Data</Typography>
                                <Typography variant="body1">
                                    Access all relevant security data, reports, and analytics in one place.
                                </Typography>
                                <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
                                    Access Portal
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default ClientDashboard;
