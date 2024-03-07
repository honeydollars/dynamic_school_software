import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/About.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import {Box, Modal } from '@mui/material';
import Button from '@mui/material/Button';
import AboutImage from '../assets/background.jpg';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  
  /**modal css styling */
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  useEffect(()=>{
    Aos.init({
      duration:2000
    });
  }, []);

  /**useNavigate custom hook for page navigation  */
  const navigate = useNavigate();

  /**toggle button set state functions */
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  /**submit button click event */
  function handleSubmit(event){
    event.preventDefault();
    alert("Save Successful!");
    navigate('/');  
  }

  return (
    <div className='about-container'>
      <Typography variant='h1'>About</Typography>
      <hr className='horizontal'/>
      <div className='about-content'>
        <div>
          <div className='aboutpage-edit-button'>
            <Button variant='contained' startIcon={<EditIcon/>} onClick={handleOpen}>Edit</Button>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Edit Aboutpage Content
                  <hr/>
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    <label htmlFor='aboutheader'>Heading *</label>
                    <input type='text' defaultValue= '' id='aboutheader' placeholder='Enter text here' className='input'></input>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <label htmlFor='aboutcontent'>About Content *</label>
                  <textarea id='aboutcontent' defaultValue='' placeholder='Enter message here!' className='textarea'></textarea>
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mt: 2 }}>
                    <label htmlFor='aboutimage'>About Image *</label>
                    <input type='file' id='aboutimage' className='input'></input>
                </Typography>
                <Button variant='contained' sx={{mt:2}} onClick={handleSubmit}>Save</Button>
              </Box>
            </Modal>
          </div>
          <div className='delete-button'>
            <Button variant='contained' endIcon={<DeleteForeverIcon/>} sx={{backgroundColor:'red'}}>Delete</Button>
          </div>
          <div data-aos='fade-up-right' className='about-page-header'>
            <div data-aos='fade-right' className='about-page-image'>
              <img src={AboutImage} alt='school-compound'></img>
            </div>
            <div data-aos='fade-left'>
              <Typography paragraph={true}>
                We are delighted to extend a warm and heartfelt welcome to students, parents, staff, and visitors to our school's virtual home. At Top Scorers Academy, we believe in the transformative power of education and the boundless potential that lies within each individual.
              </Typography>
              <Typography paragraph={true}>
                Our school is more than just a physical space; it's a vibrant community where curiosity is nurtured, talents are honed, and lifelong friendships are forged. As you explore our website, you'll discover the diverse array of programs, activities, and opportunities that make up the tapestry of our educational journey.
              </Typography>
              <Typography paragraph={true}>
                From our dedicated and passionate educators to our state-of-the-art facilities, every aspect of Top Scorers Academy is designed to create an environment where learning is exciting, interactive, and meaningful. We foster not only academic excellence but also character development, critical thinking, and a sense of responsibility to the global community.
              </Typography>
              <Typography paragraph={true}>
                As you navigate through the pages of our website, you'll find essential information about our curriculum, extracurricular offerings, school events, and the values that underpin everything we do. We are committed to open communication and collaboration, so please don't hesitate to reach out if you have any questions or if there's anything we can assist you with.
              </Typography>
            </div>
          </div>
          <div data-aos='zoom-in-up' className='about-page-content'>
            <div>
              <Typography variant='h2'>Mission</Typography>
              <hr className='horizontal'/>
              <Typography sx={{mt:3}} paragraph={true}>
                From our dedicated and passionate educators to our state-of-the-art facilities, every aspect of Top Scorers Academy is designed to create an environment where learning is exciting, interactive, and meaningful. We foster not only academic excellence but also character development, critical thinking, and a sense of responsibility to the global community.
              </Typography>
            </div>
            <div>
              <Typography variant='h2'>Vision</Typography>
              <hr className='horizontal'/>
              <Typography sx={{mt:3}} paragraph={true}>
                As you navigate through the pages of our website, you'll find essential information about our curriculum, extracurricular offerings, school events, and the values that underpin everything we do. We are committed to open communication and collaboration, so please don't hesitate to reach out if you have any questions or if there's anything we can assist you with.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className='about-footer'>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}

export default About;