import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import IconCartStyle from './IconCartStyle';

const IconCart = () => {
  const { numItems } = useSelector((state) => state.cart);
  return (
    <Link to='/cart' style={{ color: 'black' }} replace>
      <IconCartStyle>
        <i className='fa-solid fa-cart-shopping end'> </i>
        {numItems > 0 && (
          <div className='numCar'>
            <label htmlFor=''>{numItems}</label>
          </div>
        )}
      </IconCartStyle>
    </Link>
  );
};

export default IconCart;
