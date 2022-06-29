import React from 'react';
import { useSelector } from 'react-redux';
import IconCartStyle from './IconCartStyle';

const IconCart = () => {
  const { numItems } = useSelector((state) => state.cart);
  console.log(numItems);
  return (
    <IconCartStyle>
      <i className='fa-solid fa-cart-shopping end'> </i>
      {numItems > 0 && (
        <div className='numCar'>
          <label htmlFor=''>{numItems}</label>
        </div>
      )}
    </IconCartStyle>
  );
};

export default IconCart;
