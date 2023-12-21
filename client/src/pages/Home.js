import React from 'react';
import { useState } from 'react';
import Slider from '../components/Slider';
import '../styles/Home.css';
import {Box, Modal, Button, Typography} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Home = () => {

  /**Modal css styling */
  const styleModal = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  /**Button toggle functions */
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='homepage-container'>
      <div className='homepage-content'>
        <Slider/>
        <div className='leftside-content'>
        <div className='homepage-edit-button'>
          <Button variant='contained' startIcon={<EditIcon/>} onClick={handleOpen}>Edit</Button>
          <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={styleModal}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                 Edit Homepage Content
                 <hr/>
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <label htmlFor='heading'>Heading*</label>
                <input type='text' id='heading' placeholder='Enter text here' className='input'></input>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <label htmlFor='webcontent'>Web Content*</label>
                <textarea id='webcontent' placeholder='Enter message here!' className='textarea'></textarea>
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mt: 2 }}>
                  <label htmlFor='carouselimage'>Carousel Image*</label>
                  <input type='file' id='carouselimage' className='input'></input>
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mt: 2 }}>
                  <label htmlFor='footertext'>Footer*</label>
                  <input type='text' id='footertext' placeholder='Enter text here' className='input'></input>
              </Typography>
              <Button variant='contained' sx={{mt:2}}>Save</Button>
            </Box>
          </Modal>
        </div>
        <div className='delete-button'>
          <Button variant='contained' endIcon={<DeleteForeverIcon/>} sx={{backgroundColor:'red'}}>Delete</Button>
        </div>
          <Typography variant='h3' align='center'>Top Scorers Academy</Typography>
          <hr className='horizontal'/>
          <input type='checkbox' id='cbox' name='cbox'></input> 
          <Typography paragraph={true} className='p'>
            We are delighted to extend a warm and heartfelt welcome to students, parents, staff, and visitors to our school's virtual home. At Top Scorers Academy, we believe in the transformative power of education and the boundless potential that lies within each individual.
          </Typography>
          <Typography paragraph={true} className='p'>
            Our school is more than just a physical space;it's a vibrant community where curiosity is nurtured, talents are honed, and lifelong friendships are forged. As you explore our website, you'll discover the diverse array of programs, activities, and opportunities that make up the tapestry of our educational journey.
          </Typography>
          <div className="readmore">
            <Typography paragraph={true} className='p'>
              From our dedicated and passionate educators to our state-of-the-art facilities, every aspect of Top Scorers Academy is designed to create an environment where learning is exciting, interactive, and meaningful. We foster not only academic excellence but also character development, critical thinking, and a sense of responsibility to the global community.
            </Typography>
            <Typography paragraph={true} className='p'>
              As you navigate through the pages of our website, you'll find essential information about our curriculum, extracurricular offerings, school events, and the values that underpin everything we do. We are committed to open communication and collaboration, so please don't hesitate to reach out if you have any questions or if there's anything we can assist you with.
            </Typography>
            <label className='label' htmlFor='cbox'>Show Less</label>
          </div>  
            <label className='label' htmlFor='cbox'>Read More</label>
          </div>
        </div>
      </div>
  );
}
export default Home;