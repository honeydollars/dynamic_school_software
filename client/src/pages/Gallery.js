import React from 'react';
import { useEffect } from 'react';
import '../styles/Gallery.css';
import { Typography } from '@mui/material';
import galleryImage from '../assets/landingpage.avif';
import galleryImage1 from '../assets/image5.avif';
import galleryImage2 from '../assets/image6.avif';
import galleryImage3 from '../assets/image3.jpg';
import galleryImage8 from '../assets/image8.avif';
import galleryImage7 from '../assets/image7.avif';
import galleryImage9 from '../assets/image9.avif';
import galleryImage4 from '../assets/image4.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {

    useEffect(()=>{
        Aos.init({
            duration: 2000
        });
    }, []);

  return (
    <div className='gallery-section'>
        <div className='gallery-container'>
            <Typography variant='h1'>Gallery</Typography>
            <hr className='horizontal'/>
                <div data-aos='fade-up-right' className='gallery-image-container'>
                    <div data-aos='fade-up' className='gallery-image'>
                        <img src={galleryImage} alt='gallery1'/>
                    </div>
                    <div data-aos='fade-up' className='gallery-image'>
                        <img src={galleryImage1} alt='gallery2'/>
                    </div>
                    <div data-aos='fade-up' className='gallery-image'>
                        <img src={galleryImage2} alt='gallery3'/>
                    </div>
                    <div data-aos='fade-up' className='gallery-image'>
                        <img src={galleryImage} alt='gallery4'/>
                    </div>
                    <div data-aos='fade-up' className='gallery-image'>
                        <img src={galleryImage7} alt='gallery5'/>
                    </div>
                    <div data-aos='fade-up' className='gallery-image'>
                        <img src={galleryImage3} alt='gallery6'/>
                    </div>
                    <div data-aos='fade-up' className='gallery-image'>
                        <img src={galleryImage9} alt='gallery7'/>
                    </div>
                    <div data-aos='fade-up' className='gallery-image'>
                        <img src={galleryImage4} alt='gallery8'/>
                    </div>
                    <div data-aos='fade-up' className='gallery-image'>
                        <img src={galleryImage8} alt='gallery9'/>
                    </div>
                    <div data-aos='fade-up' className='gallery-image'>
                        <img src={galleryImage9} alt='gallery10'/>
                    </div>
                    <div data-aos='fade-up' className='gallery-image'>
                        <img src={galleryImage2} alt='gallery11'/>
                    </div>
                    <div data-aos='fade-up' className='gallery-image'>
                        <img src={galleryImage} alt='gallery12'/>
                    </div>
                    <div data-aos='fade-up' className='gallery-image'>
                        <img src={galleryImage7} alt='gallery13'/>
                    </div>
                    <div data-aos='fade-up' className='gallery-image'>
                        <img src={galleryImage} alt='gallery14'/>
                    </div>
                    <div data-aos='fade-up' className='gallery-image'>
                        <img src={galleryImage1} alt='gallery15'/>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Gallery