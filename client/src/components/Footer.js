import React from 'react'
import '../styles/Footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-content'>
          <div className='social-media-icons'>
            <div><FacebookOutlinedIcon/></div>
            <div><LinkedInIcon/></div>
            <div><TwitterIcon/></div>
            <div><InstagramIcon/></div>
          </div>
          <div>
            <h6 className='wisequote'> Together, let's embark on a journey of knowledge, growth, and shared success.</h6>
          </div>
        </div>
    </div>
  )
}

export default Footer