import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../utils/hooks/useFetch';
import ProductDetailStyle from './ProductDetail.style';

import Loading from '../Loading/Loading';
import Button from '../../styles/Button';
import SwiperGalery from '../Swiper/SwiperGalery';
import useProductCart from '../../utils/hooks/useProductCart';
import { addCart } from '../../store/slices/cartSlice';
import QuantityButton from '../QuantityButton/QuantityButton';
import useQuantity from '../../utils/hooks/useQuantity';
import { startLoading } from '../../store/slices/uiSlice';
import Alert from '../Alert/Alert';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { productID } = useParams();

  const { data, isLoading } = useFetch('', null, productID);
  const { disabled, product: productCart } = useProductCart(productID);

  const { data: product } = !isLoading && data?.results[0];
  const productStock = productCart?.stock ?? product?.stock;
  const { count, handleSum, handleLess, handleReset } =
    useQuantity(productStock);

  if (isLoading) {
    return <Loading />;
  }

  const handleAddCart = () => {
    dispatch(addCart({ product: data.results[0], numAdd: count }));
    dispatch(
      startLoading({
        title: 'Product added to the cart',
        message: `Product added:  "${product.name}"`,
        icon: 'fa-solid fa-clipboard-check',
      })
    );
    handleReset();
  };

  return (
    <ProductDetailStyle>
      <Alert />
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
          <QuantityButton
            price={product.price}
            handleLess={handleLess}
            handleSum={handleSum}
            count={count}
            productStock={productStock}
          />
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
            <Button disabled={disabled} onClick={handleAddCart}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </ProductDetailStyle>
  );
};

export default ProductDetail;
