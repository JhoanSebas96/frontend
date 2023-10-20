import { Splide, SplideSlide } from '@splidejs/react-splide';
import React, { useEffect, useState } from 'react'
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Link } from 'react-router-dom';


export const CardSlider = ({ cards }) => {

  const numberOfSlides = useSplide();

  return (
    <div className='wrapper'>
      <div className='splide'>
        <Splide
          options={{
            type: 'loop',
            perPage: numberOfSlides,
            perMove: 1,
            loop: true,
          }}>
          {cards.map((card, index) => {
            return (
              <SplideSlide key={index}>
                <div className="slide">
                  <div className="card-home">
                    <div >
                      <img src= {`/assets/carreras/${card.id}.jpg`} alt="" className='card-home-img'/>
                    </div>
                    <div className='card-home-category'>Virtual</div>
                    <Link to={`/oferta-academica/${card.id}`} >
                      <h1 className='card-home-title'>
                        {card.title}
                      </h1>
                    </Link>
                    <p className='card-home-desc'>{card.description}</p>
                  </div>
                </div>
              </SplideSlide>
            )
          })}
        </Splide>
      </div>
    </div>
  );
}


const getNumberOfSlides = () => {
  const width = window.innerWidth
  if (width > 1200) {
    return 4
  } else if (width > 750) {
    return 3
  } else if (width > 550) {
    return 2
  } else {
    return 1
  }
}

const useSplide = () => {
  const [smallScreen, setSmallScreen] = useState(getNumberOfSlides());

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(getNumberOfSlides());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return smallScreen
}