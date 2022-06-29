import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Card from './Card';
import { addCart } from '../../store/slices/cartSlice';
import useProductCart from '../../utils/hooks/useProductCart';

const ProductCard = ({ product, showDescription }) => {
  const dispatch = useDispatch();

  const { data: productData } = product;
  const [favorite, setFavorite] = useState(false);
  const { disabled } = useProductCart(product.id);
  const handleChangeFav = () => setFavorite(!favorite);

  return (
    <Card favorite={favorite} className='card'>
      <div className='img'>
        <i
          className={`${!favorite ? 'fa-regular' : 'fa-solid'} fa-heart fav `}
          onClick={handleChangeFav}
        />
        <Link to={`/products/${product.id}`} replace>
          <img src={productData.mainimage.url} alt='' />
        </Link>
      </div>
      <div className='body'>
        <h5>{productData.name}</h5>
        <div className='contentC'>
          <span className='category'> #{productData.category.slug}</span>
          <span className='price'>
            $
            {productData.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>
        </div>
        {showDescription && (
          <div className='descriptionS'>
            <label htmlFor='' className='text'>
              {`${productData.short_description}... `}
            </label>
            <Link to={`/products/${product.id}`} replace className='link'>
              {`View more`}
            </Link>
          </div>
        )}

        <div className='opt'>
          <button
            type='button'
            title='add cart'
            onClick={() => dispatch(addCart(product))}
            disabled={disabled}
          >
            <i className='fa-solid fa-cart-plus'> </i>
          </button>
        </div>
      </div>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  showDescription: PropTypes.bool,
};

export default ProductCard;
