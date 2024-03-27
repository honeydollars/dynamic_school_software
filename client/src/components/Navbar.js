import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import { LoginOutlined } from '@mui/icons-material';
import {Drawer, Button, Box} from '@mui/material';
import Logo from '../assets/logo.png';
import { Icon } from '@iconify/react';

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='header-container'>
      <div className='navbar-container'>
        <div className='navbar-content'>
          <div className='hamburger'>
            <Button onClick={handleOpen}>
              <Icon icon="heroicons-outline:menu-alt-3" width={30} height={30}/>
            </Button>
            <Drawer anchor='left' open={open} onClose={handleClose}>
              <Box width='300px' textAlign='center' role='presentation'>
                <div className='mobile-navbar-logo'>
                  <img src={Logo} alt='logo'/>
                  <p>Top Scorers <br/> Academy</p>
                </div>
                <hr/>
                <div className='mobile-navbar-links'>
                    <ul>
                      <li className='btn active'>
                        <Link to='/'><Icon icon="ion:home" width={20} height={20}/> Home</Link>
                      </li>
                      <li>
                        <Link to='/events'><Icon icon="material-symbols:event" width={20} height={20}/> School Events</Link>
                      </li>
                      <li>
                        <Link to='/exams'><Icon icon="ph:exam-fill" width={20} height={20}/> Exams Results</Link>
                      </li>
                      <li>
                        <Link to='/about'><Icon icon="mdi:about" width={20} height={20}/> About Us</Link>
                      </li>
                      <li>
                        <Link to='/gallery'><Icon icon="mdi:about" width={20} height={20}/> Our Gallery</Link>
                      </li>
                      <li>
                        <Link to='/contact'><Icon icon="ic:round-contact-phone" width={20} height={20}/> Contact Us</Link>
                      </li>
                    </ul>
                  <div className='mobile-myaccount'>
                    <Button variant='contained' href='/login' endIcon={<LoginOutlined/>}>Login</Button>  
                  </div>
                </div>
              </Box>
            </Drawer>
          </div>
          <div className='navbar-logo'>
            <a href='/'><img src={Logo} alt='logo'/></a>
            <a href='/' className='navbar-logo-text'>top scorers <br/> academy </a>
          </div>
          <div className='navbar-links' id='navlinks'>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/events'>Events</Link>
              </li>
              <li>
                <Link to='/exams'>Exam Results</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/gallery'>Gallery</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
            <div className='navbar-login'><Link to='/login'>Login  <Icon icon="material-symbols:login"  width={20} height={20}/></Link></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;



