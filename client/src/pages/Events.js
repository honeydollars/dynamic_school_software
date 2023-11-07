import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {Box, Modal,Card,CardContent,CardMedia,CardActions,Button,Typography } from '@mui/material';
import '../styles/Events.css';
import Image from '../assets/landingpage.avif';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

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

  return (
    <div className='events-container'>
      <Typography variant='h1'>Events</Typography>
      <hr className='horizontal'/>
      <div className='events-content'>
        <div className='events-leftside'>
          <div className='eventspage-edit-button'>
            <Button variant='contained' startIcon={<EditIcon/>} onClick={handleOpen}>Edit</Button>
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
          <div className='delete-button'>
            <Button variant='contained' endIcon={<DeleteForeverIcon/>} sx={{backgroundColor:'red'}}>Delete</Button>
          </div>
          <div className='events-category'>
              <ul>
                  <li>
                    <Link to='/prize-giving'>Prize Giving Day</Link>
                  </li>
              </ul>
              <ul>
                  <li>
                    <Link to='/visiting'>Visiting Day</Link>
                  </li>
              </ul>
              <ul>
                  <li>
                    <Link to='/parents-day'>Parent's Meeting</Link>
                  </li>
              </ul>
              <ul>
                  <li>
                    <Link to='/science-congress'>Science & Engineering Fair </Link>
                  </li>
              </ul>
              <ul>
                  <li>
                    <Link to='/art-culture'>Art & Culture</Link>
                  </li>
              </ul>
              <ul>
                  <li>
                    <Link to='/festivals'>Music Festivals</Link>
                  </li>
              </ul>
              <ul>
                  <li>
                    <Link to='/games-sports'>Games & Sports</Link>
                  </li>
              </ul>
              <ul>
                  <li>
                    <Link to='/school-trips'>School Holiday Trips</Link>
                  </li>
              </ul>
          </div>
        </div>
        <div className='events-rightside'>
          <Card className='card' sx={{ maxWidth: 300 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={Image}
              title="school-learners"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Prize Giving Day
              </Typography>
              <Typography variant="body2" color="text.secondary">
              As you navigate through the pages of our website, you'll find essential information about our curriculum, extracurricular offerings, school events, and the values that underpin everything we do.
              </Typography>
            </CardContent>
            <CardActions>
              <Button className='card-link' size="small">Share</Button>
              <Button className='card-link' size="small"><Link to='/prize-giving'>View More Details</Link></Button>
            </CardActions>
          </Card>
          <Card className='card' sx={{ maxWidth: 300 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={Image}
              title="school-learners"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Visiting Day
              </Typography>
              <Typography variant="body2" color="text.secondary">
              As you navigate through the pages of our website, you'll find essential information about our curriculum, extracurricular offerings, school events, and the values that underpin everything we do.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card className='card' sx={{ maxWidth: 300 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={Image}
              title="school-learners"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Parents' Meeting
              </Typography>
              <Typography variant="body2" color="text.secondary">
              As you navigate through the pages of our website, you'll find essential information about our curriculum, extracurricular offerings, school events, and the values that underpin everything we do.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card className='card' sx={{ maxWidth: 300 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={Image}
              title="school-learners"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Science & Engineering Fair
              </Typography>
              <Typography variant="body2" color="text.secondary">
              As you navigate through the pages of our website, you'll find essential information about our curriculum, extracurricular offerings, school events, and the values that underpin everything we do.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card className='card' sx={{ maxWidth: 300 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={Image}
              title="school-learners"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Arts & Culture
              </Typography>
              <Typography variant="body2" color="text.secondary">
              As you navigate through the pages of our website, you'll find essential information about our curriculum, extracurricular offerings, school events, and the values that underpin everything we do.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card className='card' sx={{ maxWidth: 300 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={Image}
              title="school-learners"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Music Festivals
              </Typography>
              <Typography variant="body2" color="text.secondary">
              As you navigate through the pages of our website, you'll find essential information about our curriculum, extracurricular offerings, school events, and the values that underpin everything we do.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card className='card' sx={{ maxWidth: 300 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={Image}
              title="school-learners"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Games & Sports
              </Typography>
              <Typography variant="body2" color="text.secondary">
              As you navigate through the pages of our website, you'll find essential information about our curriculum, extracurricular offerings, school events, and the values that underpin everything we do.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card className='card' sx={{ maxWidth: 300 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={Image}
              title="school-learners"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                School Holiday Trips
              </Typography>
              <Typography variant="body2" color="text.secondary">
              As you navigate through the pages of our website, you'll find essential information about our curriculum, extracurricular offerings, school events, and the values that underpin everything we do.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Events;