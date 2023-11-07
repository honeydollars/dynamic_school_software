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
import axios from 'axios';

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

  /**useNavigate custom hook for page navigation  */
  const navigate = useNavigate();

  /**toggle button set state functions */
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  /**useState custom hook to set state of response data */
  const[data, setData] = useState([]);

  /** useEffect custom hook,using axios to fetch data from db.json */
  useEffect(()=> {
    axios.get('http://localhost:3031/about')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, [])

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
        {data.map((content, index) =>{
          return(
          <div key={index}>
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
                      <input type='text' defaultValue={content.mission} id='aboutheader' placeholder='Enter text here' className='input'></input>
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <label htmlFor='aboutcontent'>About Content *</label>
                    <textarea id='aboutcontent' defaultValue={content.description3} placeholder='Enter message here!' className='textarea'></textarea>
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
            <div className='about-page-header'>
              <div className='about-page-image'>
                <img src={AboutImage} alt='school-compound'></img>
              </div>
              <div>
                <Typography paragraph={true}>{content.description1}</Typography>
                <Typography paragraph={true}>{content.description2}</Typography>
                <Typography paragraph={true}>{content.description3}</Typography>
                <Typography paragraph={true}>{content.description4}</Typography>
              </div>
            </div>
            <div className='about-page-content'>
              <div>
                <Typography variant='h2'>{content.mission}</Typography>
                <hr className='horizontal'/>
                <Typography sx={{mt:3}} paragraph={true}>{content.description3}</Typography>
              </div>
              <div>
                <Typography variant='h2'>{content.vision}</Typography>
                <hr className='horizontal'/>
                <Typography sx={{mt:3}} paragraph={true}>{content.description4}</Typography>
              </div>
            </div>
          </div>);
        })}
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