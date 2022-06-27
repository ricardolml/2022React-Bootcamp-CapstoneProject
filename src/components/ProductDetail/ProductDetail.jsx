import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../utils/hooks/useFetch';
import ProductDetailStyle from './ProductDetailStyle';

import Loading from '../Loading/Loading';
import Button from '../../styles/Button';
import SwiperGalery from '../Swiper/SwiperGalery';

const ProductDetail = () => {
  const { productID } = useParams();
  const { data, isLoading } = useFetch('', null, productID);
  const [count, setCount] = useState(1);

  if (isLoading) {
    return <Loading />;
  }

  const { data: product } = data.results[0];

  const handleSum = () => count < product.stock && setCount(count + 1);
  const handleLess = () => count > 1 && setCount(count - 1);

  return (
    <ProductDetailStyle>
      <div className='content'>
        <div className='slider'>
          <div className='sliderImg'>
            <SwiperGalery data={data} isLoading={isLoading} />
          </div>
        </div>
        <div className='description'>
          <div className='header'>
            <h2>{product.name}</h2>
            <div>
              SKU {product.sku} <br /> #{product.category.slug} <br />
              {data.results[0].tags.map((tag) => `#${tag} `)}
            </div>
          </div>

          <div className='sectionReview'>
            <div className='starts'>
              {[...Array(4)].map((e, i) => (
                <i className='fa-solid fa-star' key={i}>
                  {' '}
                </i>
              ))}

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
