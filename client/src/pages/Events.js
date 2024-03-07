import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {Box, Modal,Card,CardContent,CardMedia,CardActions,Button,Typography } from '@mui/material';
import '../styles/Events.css';
import Image from '../assets/landingpage.avif';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Events = () => {

  /**modal css styling */
  const style = {
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

  /**toggle button set state functions */
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(()=>{
    Aos.init({
      duration: 2000
    });
  }, []);

  return (
    <div className='events-container'>
      <Typography variant='h1'>Events</Typography>
      <hr className='horizontal'/>
      <div className='events-content'>
        <div className='events-leftside'>
          <div className='eventspage-edit-button'>
            <Button variant='contained' startIcon={<EditIcon/>} onClick={handleOpen}>Add</Button>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Edit Eventspage Content
                  <hr/>
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    <label htmlFor='eventname'>Event Name*</label>
                    <input type='text' id='eventname' placeholder='Enter text here' className='input'></input>
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mt: 2 }}>
                    <label htmlFor='eventimage'>Event Image*</label>
                    <input type='file' id='eventimage' className='input'></input>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <label htmlFor='eventcontent'>Event Content*</label>
                  <textarea id='eventcontent' placeholder='Enter event message here!' className='textarea'></textarea>
                </Typography>
                <Button variant='contained' sx={{mt:2}}>Save</Button>
              </Box>
            </Modal>
          </div>
        </div>
        <div data-aos='zoom-up' className='events-rightside'>
          <Card data-aos='fade-up' className='card'>
            <CardMedia
              sx={{ height: 140 }}
              image={Image}
              title="school-learners"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Prize Giving Day
              </Typography>
              <hr/>
              <Typography><strong>Date : 12/07/2022</strong></Typography>
            </CardContent>
            <CardActions sx={{display:'flex', justifyContent:'space-between'}}>
              <Button className='card-link' size="small"><Link to='/events/prize-giving'>See More Details</Link></Button>
              <Button variant='contained' endIcon={<DeleteForeverIcon/>} sx={{backgroundColor:'red'}}>Delete</Button>
            </CardActions>
          </Card>
          <Card data-aos='fade-up' className='card'>
            <CardMedia
              sx={{ height: 140 }}
              image={Image}
              title="school-learners"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Visiting Day
              </Typography>
              <hr/>
              <Typography><strong>Date : 18/05/2023</strong></Typography>
            </CardContent>
            <CardActions sx={{display:'flex', justifyContent:'space-between'}}>
              <Button className='card-link' size="small"><Link to='/events/visiting-day'>See More Details</Link></Button>
              <Button variant='contained' endIcon={<DeleteForeverIcon/>} sx={{backgroundColor:'red'}}>Delete</Button>
            </CardActions>
          </Card>
          <Card data-aos='fade-up' className='card'>
            <CardMedia
              sx={{ height: 140 }}
              image={Image}
              title="school-learners"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Parents Meeting
              </Typography>
              <hr/>
              <Typography><strong>Date : 10/02/2023</strong></Typography>
            </CardContent>
            <CardActions sx={{display:'flex', justifyContent:'space-between'}}>
              <Button className='card-link' size="small"><Link to='/events/parents-meeting'>See More Details</Link></Button>
              <Button variant='contained' endIcon={<DeleteForeverIcon/>} sx={{backgroundColor:'red'}}>Delete</Button>
            </CardActions>
          </Card>
          <Card data-aos='fade-up' className='card'>
            <CardMedia
              sx={{ height: 140 }}
              image={Image}
              title="school-learners"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Science & Engineering Fair
              </Typography>
              <hr/>
              <Typography><strong>Date : 02/08/2023</strong></Typography>
            </CardContent>
            <CardActions sx={{display:'flex', justifyContent:'space-between'}}>
              <Button className='card-link' size="small"><Link to='/events/science-fair'>See More Details</Link></Button>
              <Button variant='contained' endIcon={<DeleteForeverIcon/>} sx={{backgroundColor:'red'}}>Delete</Button>
            </CardActions>
          </Card>
          <Card data-aos='fade-up' className='card'>
            <CardMedia
              sx={{ height: 140 }}
              image={Image}
              title="school-learners"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Music, Arts & Culture
              </Typography>
              <hr/>
              <Typography><strong>Date : 22/06/2023</strong></Typography>
            </CardContent>
            <CardActions sx={{display:'flex', justifyContent:'space-between'}}>
              <Button className='card-link' size="small"><Link to='/events/music-festivals'>See More Details</Link></Button>
              <Button variant='contained' endIcon={<DeleteForeverIcon/>} sx={{backgroundColor:'red'}}>Delete</Button>
            </CardActions>
          </Card>
          <Card data-aos='fade-up' className='card'>
            <CardMedia
              sx={{ height: 140 }}
              image={Image}
              title="school-learners"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Games & Sports
              </Typography>
              <hr/> 
              <Typography><strong>Date : 02/05/2023</strong></Typography>
            </CardContent>
            <CardActions sx={{display:'flex', justifyContent:'space-between'}}>
              <Button className='card-link' size="small"><Link to='/events/games'>See More Details</Link></Button>
              <Button variant='contained' endIcon={<DeleteForeverIcon/>} sx={{backgroundColor:'red'}}>Delete</Button>
            </CardActions>
          </Card>
          <Card data-aos='fade-up' className='card'>
            <CardMedia
              sx={{ height: 140 }}
              image={Image}
              title="school-learners"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                School Holiday Trips
              </Typography>
              <hr/> 
              <Typography><strong>Date : 10/08/2023</strong></Typography>
            </CardContent>
            <CardActions sx={{display:'flex', justifyContent:'space-between'}}>
              <Button className='card-link' size="small"><Link to='/events/school-trips'>See More Details</Link></Button>
              <Button variant='contained' endIcon={<DeleteForeverIcon/>} sx={{backgroundColor:'red'}}>Delete</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  )
};

export default Events;