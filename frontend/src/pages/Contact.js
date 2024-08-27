import React from 'react';
import './Contact.css';
import { Container, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <Container className="contact-container">
      <Typography variant="h3" gutterBottom>Contact Us</Typography>
      <form className="contact-form">
        <TextField label="Name" variant="outlined" fullWidth margin="normal" />
        <TextField label="Email" variant="outlined" fullWidth margin="normal" />
        <TextField label="Message" variant="outlined" fullWidth multiline rows={4} margin="normal" />
        <Button variant="contained" color="primary" type="submit">Send Message</Button>
      </form>
      <section className="contact-info">
        <Typography variant="h4" gutterBottom>Our Office</Typography>
        <Typography>123 Security Lane, Safety City, CA 12345</Typography>
        <Typography>Phone: (123) 456-7890</Typography>
        <Typography>Email: contact@mirazsec.com</Typography>
      </section>
      <section className="map-section">
        {/* Add Google Map embed here */}
      </section>
    </Container>
  );
}

export default Contact;
