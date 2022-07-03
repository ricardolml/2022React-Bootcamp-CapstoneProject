import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperGaleryStyle from './SwiperGalery.style';
// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

const SwiperGalery = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const productImgs = data?.results[0]?.data.images.map(({ image }) => (
    <SwiperSlide key={image.url}>
      <img src={image.url} alt={image.alt} />
    </SwiperSlide>
  ));
  return (
    <SwiperGaleryStyle>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className='mySwiper2'
      >
        {productImgs}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={5}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        className='mySwiper'
      >
        {productImgs}
      </Swiper>
    </SwiperGaleryStyle>
  );
};

SwiperGalery.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SwiperGalery;
