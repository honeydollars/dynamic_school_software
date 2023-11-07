import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { LoginOutlined } from '@mui/icons-material';
import {Drawer, Button, Box} from '@mui/material';

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='header-container'>
      <div className='navbar-container'>
        <div className='hamburger'>
          <Button onClick={handleOpen}>
              <MenuOpenIcon/>
          </Button>
          <Drawer anchor='left' open={open} onClose={handleClose}>
            <Box p={2} width='250px' textAlign='center' role='presentation'>
              <div className='mobile-navbar-logo'>
                <p>Top Scorers Academy</p>
              </div>
              <hr/>
              <div className='mobile-navbar-links'>
                <nav>
                  <ul>
                    <li className='btn active'>
                      <Link to='/'>Home</Link>
                    </li>
                  </ul>
                  <ul>
                    <li className='btn'>
                      <Link to='/events'>School Events</Link>
                    </li>
                  </ul>
                  <ul>
                    <li className='btn'>
                      <Link to='/about'>About Us</Link>
                    </li>
                  </ul>
                  <ul>
                    <li className='btn'>
                      <Link to='/exams'>Exam Results</Link>
                    </li>
                  </ul>
                  <ul>
                    <li className='btn'>
                      <Link to='/contact'>Contact Us</Link>
                    </li>
                  </ul>
                </nav>
                <div className='mobile-myaccount'>
                  <Button variant='contained' href='/login' endIcon={<LoginOutlined/>}>Login</Button>  
                </div>
              </div>
            </Box>
          </Drawer>
        </div>
        <div className='navbar-logo'>
          <p>Top Scorers Academy</p>
        </div>
        <div className='navbar-links'>
          <nav id='nav-container'>
            <ul>
              <li className='btn active'>
                <Link to='/'>Home</Link>
              </li>
            </ul>
            <ul>
              <li className='btn'>
                <Link to='/events'>School Events</Link>
              </li>
            </ul>
            <ul>
              <li className='btn'>
                <Link to='/about'>About Us</Link>
              </li>
            </ul>
            <ul>
              <li className='btn'>
                <Link to='/exams'>Exam Results</Link>
              </li>
            </ul>
            <ul>
              <li className='btn'>
                <Link to='/contact'>Contact Us</Link>
              </li>
            </ul>
          </nav>
          <div className='myaccount'>
            <Button variant='contained' href='/login' endIcon={<LoginOutlined/>} sx={{border:'none'}}>Login</Button>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;



