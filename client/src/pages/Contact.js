import React from 'react';
import { useEffect } from 'react';
import '../styles/Contact.css';
import {TextField, Button, Typography, Card, CardContent} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FaxIcon from '@mui/icons-material/Fax';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Contact = () => {

  useEffect(()=>{
    Aos.init({
      duration: 2000
    });
  }, []);

  return (
    <div className='main-container'>
      <div className='contact-container'>
        <Typography variant='h1'>Contact</Typography>
        <hr className='horizontal'/>
        <div data-aos='zoom-in-down' className='contact-section'>
          <div data-aos='fade-up-right' className='contact-form'>
            <form name='contactform' id='contactform' method='POST'>
              <fieldset>
                <legend><h3>Contact Form:</h3></legend>
                <div className='form-field'>
                  <div>
                    <TextField  id='fname' autoComplete='given-name' label='First Name:' variant='outlined'></TextField>
                  </div>
                  <div>
                    <TextField id='lname' autoComplete='family-name' label='Last Name:' variant='outlined'></TextField>
                  </div>
                  <div>
                    <TextField id='email' autoComplete='email' label='Email Address:' variant='outlined'></TextField>
                  </div>
                  <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea id='message' placeholder='write your  message here!'></textarea>
                  </div>
                  <div className='submit'>
                    <Button variant='contained' id='submit-btn'>Submit</Button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
          <div data-aos='fade-up-left' className='contact-cards'>
            <Card data-aos='fade-up' sx={{ minWidth: 275, Height:275, margin:'10px'}} className='contact-card'>
              <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <WorkIcon fontSize='large' sx={{ mb:1.5 }}/>
                <Typography variant="h6" component="div" sx={{ mb: 1.5 }}>
                  Office Hours
                </Typography>
                <Typography sx={{ mb: 1.5 }}>Mon-Sat : 8am to 5pm</Typography>
              </CardContent>
            </Card>
            <Card data-aos='fade-up' sx={{ minWidth: 275, Height:275, margin:'10px'}} className='contact-card'>
              <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <EmailIcon fontSize='large' sx={{ mb: 1.5 }}/>
                <Typography variant="h6" component="div" sx={{ mb: 1.5 }}>
                  Email Us
                </Typography>
                <Typography sx={{ mb: 1.5 }}>topsacademy@gmail.com</Typography>
              </CardContent>
            </Card>
            <Card data-aos='fade-up' sx={{ minWidth: 275, Height:275, margin:'10px'}} className='contact-card'>
              <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <ContactPhoneIcon fontSize='large' sx={{ mb: 1.5 }}/>
                <Typography variant="h6" component="div" sx={{ mb: 1.5 }}>
                  Call Us
                </Typography>
                <Typography sx={{ mb: 1.5 }}>+25470151070</Typography>
              </CardContent>
            </Card>
            <Card data-aos='fade-up' sx={{ minWidth: 275, Height:275, margin:'10px'}} className='contact-card'>
              <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <LocationOnIcon fontSize='large' sx={{ mb:1.5 }}/>
                <Typography variant="h6" component="div" sx={{ mb: 1.5 }}>
                  Come Visit Us
                </Typography>
                <Typography sx={{ mb: 1.5 }}>SoHo 89 Rd - Nakuru, Kenya</Typography>
              </CardContent>
            </Card>
            <Card data-aos='fade-up' sx={{ minWidth: 275, Height:275, margin:'10px'}} className='contact-card'>
              <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <FaxIcon fontSize='large' sx={{ mb:1.5 }}/>
                <Typography variant="h6" component="div" sx={{ mb: 1.5 }}>
                  Fax
                </Typography>
                <Typography sx={{ mb: 1.5 }}>1-234-567-910</Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;