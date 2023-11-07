import React from 'react';
import '../styles/Prizegiving.css';
import {Typography, Accordion, AccordionSummary, AccordionDetails, ListItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BestStudent from '../assets/image3.jpg';
import Students from '../assets/image2.jpg';

const Prizegiving = () => {
  return (
    <div className='prizegiving-container'>
        <h1>Prize-giving Day</h1>
        <hr className='horizontal'/>
        <div className='prizegiving-content'>
          <div className='pg-leftside'>
            <div className='prizegiving-menu'>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"id="panel1a-header">
                  <Typography>Current Event</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
                  <Typography>(Month-Day-Year)</Typography>
                  <ListItem><a href='#2023nov15'>Nov-15-2023</a></ListItem>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"id="panel1a-header">
                  <Typography>Upcoming Events</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
                  <Typography>(Month-Day-Year)</Typography>
                  <ListItem><a href='#2024feb2'>Feb-02-2024</a></ListItem>
                  <ListItem><a href='#2024may15'>May-15-2024</a></ListItem>
                  <ListItem><a href='#2024nov29'>Nov-29-2024</a></ListItem>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"id="panel1a-header">
                  <Typography>Past Events</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
                  <Typography>(Month-Day-Year)</Typography>
                  <ListItem><a href='#2023oct12'>Oct-12-2023</a></ListItem>
                  <ListItem><a href='#2023mar4'>Mar-04-2023</a></ListItem>
                  <ListItem><a href='#2022jun15'>Jun-15-2022</a></ListItem>
                  <ListItem><a href='#2022feb2'>Feb-02-2022</a></ListItem>
                  <ListItem><a href='#2021nov25'>Nov-25-2021</a></ListItem>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className='pg-rightside'>
            <Typography variant='h5' component='div'>Past Events</Typography>
            <>
              <div>
                <Typography paragraph={true} id='2023oct12'>October 12<sup>th</sup> 2023</Typography>
                  <Typography paragraph={true}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </Typography>
              </div>
              <div className='pastevents-images'>
                <div>
                  <iframe src="https://www.youtube.com/embed/0COdq1IT5Hc?autoplay=1&mute=1" title='beststudentaward' style={{maxWidth:'420px', maxHeight:'345px', marginLeft:'15px', border:'1px solid gray', borderRadius:'4px'}}></iframe>
                </div>
                <div>
                  <iframe src="https://www.youtube.com/embed/qoxZFtWNHd8?autoplay=1&mute=1" title='beststudentaward' style={{maxWidth:'420px', maxHeight:'345px', marginLeft:'15px', border:'1px solid gray', borderRadius:'4px'}}></iframe>
                </div>
                <div>
                  <iframe src="https://www.youtube.com/embed/io7LinwWw8c?autoplay=1&mute=1" title='beststudentaward' style={{maxWidth:'420px', maxHeight:'345px', marginLeft:'15px', border:'1px solid gray', borderRadius:'4px'}}></iframe>
                </div>
              </div>
            </>
            <>
              <div>
                <Typography paragraph={true} id='2023mar4'>March 4<sup>th</sup> 2023</Typography>
                <Typography paragraph={true}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged. 
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
              </div>
              <div className='pastevents-images'>
                <div>
                  <img src={BestStudent} alt='beststudentaward' style={{maxWidth:'275px', maxHeight:'250px', marginLeft:'15px', border:'1px solid lightgray', borderRadius:'4px'}}/>
                  <br/>
                </div>
                <div>
                  <img src={Students} alt='students' style={{maxWidth:'275px', maxHeight:'250px', marginLeft:'15px', border:'1px solid lightgray', borderRadius:'4px'}}/>
                  <br/>
                </div>
                <div>
                  <iframe src="https://www.youtube.com/embed/0COdq1IT5Hc?autoplay=1&mute=1" title='beststudentaward' style={{maxWidth:'420px', maxHeight:'345px', marginLeft:'15px', border:'1px solid gray', borderRadius:'4px'}}></iframe>
                </div>
              </div>
            </>
            <>
              <div>
                <Typography paragraph={true} id='2022jun15'>June 15<sup>th</sup> 2022</Typography>
                <Typography paragraph={true}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged. 
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
              </div>
              <div className='pastevents-images'>
                <div>
                  <iframe src="https://www.youtube.com/embed/io7LinwWw8c?autoplay=1&mute=1" title='beststudentaward' style={{maxWidth:'420px', maxHeight:'345px', marginLeft:'15px', border:'1px solid gray', borderRadius:'4px'}}></iframe>
                </div>
                <div>
                  <iframe src="https://www.youtube.com/embed/0COdq1IT5Hc?autoplay=1&mute=1" title='beststudentaward' style={{maxWidth:'420px', maxHeight:'345px', marginLeft:'15px', border:'1px solid gray', borderRadius:'4px'}}></iframe>
                </div>
                <div>
                  <iframe src="https://www.youtube.com/embed/USM71JqV30o?autoplay=1&mute=1" title='beststudentaward' style={{maxWidth:'420px', maxHeight:'345px', marginLeft:'15px', border:'1px solid gray', borderRadius:'4px'}}></iframe>
                </div>
                <div>
                  <img src={Students} alt='beststudentaward' style={{maxWidth:'275px', maxHeight:'275px', marginLeft:'15px', border:'1px solid gray', borderRadius:'4px'}}/>
                  <br/>
                </div>
              </div>
            </>
            <>
              <div>
                <Typography paragraph={true} id='2022feb2'>Feb 2<sup>nd</sup> 2022</Typography>
                <Typography paragraph={true}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged. 
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
              </div>
              <div className='pastevents-images'>
                <div>
                  <img src={BestStudent} alt='beststudentaward' style={{maxWidth:'275px', maxHeight:'275px', marginLeft:'15px', border:'1px solid gray', borderRadius:'4px'}}/>
                  <br/>
                </div>
                <div>
                  <iframe src="https://www.youtube.com/embed/io7LinwWw8c?autoplay=1&mute=1" title='beststudentaward' style={{maxWidth:'420px', maxHeight:'345px', marginLeft:'15px', border:'1px solid gray', borderRadius:'4px'}}></iframe>
                </div>
                <div>
                  <img src={Students} alt='beststudentaward' style={{maxWidth:'275px', maxHeight:'275px', marginLeft:'15px', border:'1px solid gray', borderRadius:'4px'}}/>
                  <br/>
                </div>
                <div>
                  <img src={BestStudent} alt='beststudentaward' style={{maxWidth:'275px', maxHeight:'275px', marginLeft:'15px', border:'1px solid gray', borderRadius:'4px'}}/>
                  <br/>
                </div>
                <div>
                  <iframe src="https://www.youtube.com/embed/0COdq1IT5Hc?autoplay=1&mute=1" title='beststudentaward' style={{maxWidth:'420px', maxHeight:'345px', marginLeft:'15px', border:'1px solid gray', borderRadius:'4px'}}></iframe>
                </div>
              </div>
            </>  
          </div>
        </div>
    </div>
  )
}

export default Prizegiving;