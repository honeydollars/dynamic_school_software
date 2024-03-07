import React from 'react';
import { useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import background from '../assets/landingpage.avif';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Slider = () => {

  useEffect(()=>{
    Aos.init({
      duration: 2000
    });
  }, []);

  const items = [
    {
        imageurl1: background,
        description1: "carouselimage1!"
        
    },
    {
      imageurl2: image2,
      description2: "carouselimage2"
    },
    {
      imageurl3: image3,
      description3: "carouselimage3"
    },
    {
      imageurl4: 'https://discoverymontessorischool.files.wordpress.com/2017/02/cropped-20170124_102959.jpg',
      description4: "carouselimage4"
    }

]

function Item(props)
{
    return (
        <div className='carousel-images'>
          <img src={props.item.imageurl1} alt={props.item.description1}/>
          <img src={props.item.imageurl2} alt={props.item.description2}/>
          <img src={props.item.imageurl3} alt={props.item.description3}/>
          <img src={props.item.imageurl4} alt={props.item.description4}/>
        </div>
    )
}

  return (
    <div data-aos='fade-down-right' className='carousel'>
      <Carousel sx={{mt:0, mb:1}}>
          {items.map( (item, i) => <Item key={i} item={item} /> )}
      </Carousel>
    </div>
  )
}

export default Slider