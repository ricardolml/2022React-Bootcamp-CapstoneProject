import React from 'react';
import IconCartStyle from './IconCartStyle';

const IconCart = () => {
  return (
    <IconCartStyle>
      <i className='fa-solid fa-cart-shopping end'> </i>
      <div className='numCar'>
        <label htmlFor=''>20</label>
      </div>
    </IconCartStyle>
  );
};

export default IconCart;
