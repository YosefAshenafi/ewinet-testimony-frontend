import { Container } from '@material-ui/core';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Video from '../../components/video/video';

import './videos.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export default function videos() {
  return (
    <>
    <div className='header'>
      <div>
          <img className="headerImg" src="https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510_960_720.jpg" alt="logo" />
        </div>
    </div>
    <h1 className="text-center m-5 text-secondary">Testemonial Videos</h1>
    <Container>
      <h4 className="text-secondary">Orthodox</h4>
      <Carousel responsive={responsive} centerMode={true} swipeable={true} draggable={true} infinite={true} keyBoardControl={true} renderDotsOutside={true}>
        <Video src="https://www.youtube.com/embed/w-KF26jebQI" />
        <Video src="https://www.youtube.com/embed/w-KF26jebQI" />
        <Video src="https://www.youtube.com/embed/M6eKSuFYWF4" />
        <Video src="https://www.youtube.com/embed/VmN1p2HZBK8" />
        <Video src="https://www.youtube.com/embed/BBGfku6G5Fw" />
      </Carousel>
      <hr />
      <h4 className="text-secondary">Islam</h4>
      <Carousel responsive={responsive} centerMode={true} swipeable={true} draggable={true} infinite={true} keyBoardControl={true} renderDotsOutside={true}>
        <Video src="https://www.youtube.com/embed/O5I9l2ZHFvU" />
        <Video src="https://www.youtube.com/embed/IIReNZuPM6M" />
        <Video src="https://www.youtube.com/embed/GDn2SSpEL-Y" />
        <Video src="https://www.youtube.com/embed/uj8pK7VfBto" />
      </Carousel>
      <hr />
      <h4 className="text-secondary">Adventist</h4>
      <Carousel responsive={responsive} centerMode={true} swipeable={true} draggable={true} infinite={true} keyBoardControl={true} renderDotsOutside={true}>
        <Video src="https://www.youtube.com/embed/3N6PkhmIQ-o" />
        <Video src="https://www.youtube.com/embed/Y-2LaCPST9o" />
        <Video src="https://www.youtube.com/embed/Y4pto3M2750" />
        <Video src="https://www.youtube.com/embed/Y4pto3M2750" />
      </Carousel>
    </Container>
    </>
  )
}
