import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../utils/hooks/useFetch';
import ProductDetailStyle from './ProductDetailStyle';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Loading from '../Loading/Loading';
import Button from '../../styles/Button';

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

const ProductDetail = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { productID } = useParams();
  const { data, isLoading } = useFetch(null, null, productID);
  const [count, setCount] = useState(1);

  if (isLoading) {
    return <Loading />;
  }

  const { data: product } = data.results[0];

  const handleSum = () => count < product.stock && setCount(count + 1);
  const handleLess = () => count > 1 && setCount(count - 1);

  const productImgs =
    !isLoading &&
    data.results[0]?.data.images.map(({ image }) => (
      <SwiperSlide key={image.url}>
        <img src={image.url} alt={image.alt} />
      </SwiperSlide>
    ));
  console.log(data);

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
        <div className='description'>
          <div className='header'>
            <h2>{product.name}</h2>
            <div>
              SKU {product.sku} <br /> #{product.category.slug}
            </div>
          </div>

          <div className='sectionReview'>
            <div className='starts'>
              <i className='fa-solid fa-star'> </i>
              <i className='fa-solid fa-star'> </i>
              <i className='fa-solid fa-star'> </i>
              <i className='fa-solid fa-star'> </i>
              <i className='fa-solid fa-star-half-stroke'> </i>
            </div>
            <div className='numReview'>
              <span> 8 Reviews</span>
            </div>
          </div>
          <div className='sectionPrice'>
            <div className='price'>
              <label htmlFor=''>Price</label>
              <span>${product.price}</span>
            </div>
            <div className='quantity'>
              <label htmlFor=''>Quantity</label>
              <div className='quantityBtn'>
                <i className='fa-solid fa-minus' onClick={handleLess}>
                  {' '}
                </i>
                {count}
                <i className='fa-solid fa-plus' onClick={handleSum}>
                  {' '}
                </i>
              </div>
            </div>
          </div>
          <div className='sectionDetails'>
            <h4>Details</h4>
            <table>
              <tbody>
                {product.specs.map(({ spec_name, spec_value }) => (
                  <tr key={spec_name}>
                    <td style={{ width: '25%' }}>{spec_name}</td>
                    <td>{spec_value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='sectionDescription'>
            <h4>Description</h4>
            <p>{product.short_description}</p>
          </div>

          <div className='addCart'>
            <div className='totalPrice'>
              <label htmlFor=''>Total Price</label>
              <span>${product.price * count}</span>
            </div>
            <Button>Add to Cart</Button>
          </div>
        </div>
      </div>
    </ProductDetailStyle>
  );
};

export default ProductDetail;
