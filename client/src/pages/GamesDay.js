import React from 'react';
import '../styles/GamesDay.css';
import {Typography, Accordion, AccordionSummary, AccordionDetails, ListItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BestStudent from '../assets/image3.jpg';
import Students from '../assets/image2.jpg';

const GamesDay = () => {
  return (
    <div className='gamesday-container'>
        <h1>Games & Sports</h1>
        <hr className='horizontal'/>
        <div className='gamesday-content'>
          <div className='gday-leftside'>
            <div className='gday-menu'>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"id="panel1a-header">
                  <Typography sx={{fontWeight:600}}>Current Event</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
                  <Typography>(Month-Day-Year)</Typography>
                  <ListItem><a href='#noeventyet'>No Event Yet</a></ListItem>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"id="panel1a-header">
                  <Typography sx={{fontWeight:600}}>Upcoming Events</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
                  <Typography>(Month-Day-Year)</Typography>
                  <ListItem><a href='#2024mar06'>No Event Yet</a></ListItem>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"id="panel1a-header">
                  <Typography sx={{fontWeight:600}}>Past Events</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
                  <Typography>(Month-Day-Year)</Typography>
                  <ListItem><a href='#2023jun27'>Jun-27-2023</a></ListItem>
                  <ListItem><a href='#2022apr10'>Apr-10-2022</a></ListItem>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className='gday-rightside'>
            <Typography variant='h5' component='div' sx={{fontWeight:600, fontSize:'25px'}}>Past Events</Typography>
            <div>
              <>
                <Typography paragraph={true} id='2023jun27' sx={{fontWeight:600}}>June 27<sup>th</sup> 2023</Typography>
                  <Typography paragraph={true}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </Typography>
              </>
              <div className='eventday-images'>
                <div>
                  <iframe src="https://www.youtube.com/embed/0COdq1IT5Hc?autoplay=1&mute=1" title='beststudentaward' style={{maxWidth:'420px', maxHeight:'345px', marginRight:'20px', border:'1px solid gray', borderRadius:'4px'}}></iframe>
                </div>
                <div>
                  <iframe src="https://www.youtube.com/embed/qoxZFtWNHd8?autoplay=1&mute=1" title='beststudentaward' style={{maxWidth:'420px', maxHeight:'345px', marginRight:'20px', border:'1px solid gray', borderRadius:'4px'}}></iframe>
                </div>
                <div>
                  <iframe src="https://www.youtube.com/embed/io7LinwWw8c?autoplay=1&mute=1" title='beststudentaward' style={{maxWidth:'420px', maxHeight:'345px', marginRight:'20px', border:'1px solid gray', borderRadius:'4px'}}></iframe>
                </div>
              </div>
            </div>
            <div>
              <>
                <Typography paragraph={true} id='2022apr10' sx={{fontWeight:600}}>April 10<sup>th</sup> 2022</Typography>
                <Typography paragraph={true}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged. 
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
              </>
              <div className='eventday-images'>
                <div>
                  <img src={BestStudent} alt='beststudentaward' style={{maxWidth:'300px', maxHeight:'250px', marginRight:'20px', border:'1px solid lightgray', borderRadius:'4px'}}/>
                  <br/>
                </div>
                <div>
                  <img src={Students} alt='students' style={{maxWidth:'300px', maxHeight:'250px', marginRight:'20px', border:'1px solid lightgray', borderRadius:'4px'}}/>
                  <br/>
                </div>
                <div>
                  <iframe src="https://www.youtube.com/embed/0COdq1IT5Hc?autoplay=1&mute=1" title='beststudentaward' style={{maxWidth:'420px', maxHeight:'345px', marginRight:'20px', border:'1px solid gray', borderRadius:'4px'}}></iframe>
                </div>
              </div>
            </div> 
          </div>
        </div>
    </div>
  )
}

export default GamesDay;