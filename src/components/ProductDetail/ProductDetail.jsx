import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../utils/hooks/useFetch';
import ProductDetailStyle from './ProductDetailStyle';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Loading from '../Loading/Loading';

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

const ProductDetail = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { productID } = useParams();
  const { data, isLoading } = useFetch(null, null, productID);
  const productImgs =
    !isLoading &&
    data.results[0]?.data.images.map(({ image }) => (
      <SwiperSlide key={image.url}>
        <img src={image.url} alt={image.alt} />
      </SwiperSlide>
    ));
  if (isLoading) {
    return <Loading />;
  }
  return (
    <ProductDetailStyle>
      <div className='content'>
        <div className='slider'>
          <div className='sliderImg'>
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
          </div>
        </div>
        <div className='description'>data</div>
      </div>
    </ProductDetailStyle>
  );
};

export default ProductDetail;
