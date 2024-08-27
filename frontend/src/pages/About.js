import React from 'react'; import 
'./About.css'; import { Container, 
Typography, Grid, Card, CardContent } from 
'@mui/material'; function About() {
  return ( <Container 
    className="about-container">
      <section className="about-intro"> 
        <Typography variant="h3" 
        gutterBottom>About 
        MirazSec</Typography> <Typography 
        variant="body1" gutterBottom>
          MirazSec is a comprehensive 
          security management solution 
          designed to streamline operations 
          and enhance safety for security 
          guard companies, their clients, 
          and field officers. Our mission 
          is to revolutionize security 
          operations with cutting-edge 
          technology, providing real-time 
          situational awareness and 
          improving the overall 
          effectiveness of security 
          measures.
        </Typography> </section>
      
      <section className="about-mission"> 
        <Typography variant="h4" 
        gutterBottom>Our 
        Mission</Typography> <Typography 
        variant="body1" gutterBottom>
          At MirazSec, we aim to empower 
          security teams by providing 
          advanced tools and insights that 
          improve performance and 
          decision-making. We are committed 
          to integrating AI-driven 
          analytics, seamless 
          communication, and user-friendly 
          interfaces to create a safer 
          environment for everyone.
        </Typography> </section>
      
      <section className="about-values"> 
        <Typography variant="h4" 
        gutterBottom>Our 
        Values</Typography> <Grid container 
        spacing={3}>
          <Grid item xs={12} sm={6} md={3}> 
            <Card className="value-card">
              <CardContent> <Typography 
                variant="h5">Innovation</Typography> 
                <Typography>Continuously 
                innovating to provide 
                cutting-edge solutions for 
                our users.</Typography>
              </CardContent> </Card> 
          </Grid> <Grid item xs={12} sm={6} 
          md={3}>
            <Card className="value-card"> 
              <CardContent>
                <Typography 
                variant="h5">Integrity</Typography> 
                <Typography>Building trust 
                through transparency and 
                ethical 
                practices.</Typography>
              </CardContent> </Card> 
          </Grid> <Grid item xs={12} sm={6} 
          md={3}>
            <Card className="value-card"> 
              <CardContent>
                <Typography 
                variant="h5">Excellence</Typography> 
                <Typography>Striving for 
                excellence in all aspects 
                of our 
                business.</Typography>
              </CardContent> </Card> 
          </Grid> <Grid item xs={12} sm={6} 
          md={3}>
            <Card className="value-card"> 
              <CardContent>
                <Typography 
                variant="h5">Collaboration</Typography> 
                <Typography>Working closely 
                with clients and partners 
                to achieve common 
                goals.</Typography>
              </CardContent> </Card> 
          </Grid>
        </Grid> </section>
      
      <section className="about-features"> 
        <Typography variant="h4" 
        gutterBottom>Key 
        Features</Typography> <ul>
          <li>Real-time monitoring and 
          alerts</li> <li>AI-driven 
          analytics and insights</li> 
          <li>User-friendly interface for 
          ease of use</li> <li>Seamless 
          integration with existing 
          systems</li> <li>Secure data 
          storage and encryption</li> 
          <li>Offline functionality for 
          critical tasks</li>
        </ul> </section> </Container> );
}
export default About;
