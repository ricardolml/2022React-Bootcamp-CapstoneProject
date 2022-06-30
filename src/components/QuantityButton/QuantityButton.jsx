import React from 'react';
import QuantityButtonStyle from './QuantityButtonStyle';

const QuantityButton = ({
  count,
  handleLess,
  handleSum,
  price,
  productStock,
}) => {
  return (
    <QuantityButtonStyle>
      <div className='price'>
        <label htmlFor=''>Price</label>
        <span>${price}</span>
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
      <div className='quantity'>
        <label htmlFor=''>Stock</label>
        <span>{productStock}</span>
      </div>
    </QuantityButtonStyle>
  );
};

export default QuantityButton;
