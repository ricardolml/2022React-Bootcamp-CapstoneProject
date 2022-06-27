import React, { useState } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { data: productData } = product;
  const [favorite, setFavorite] = useState(false);

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
        <div className='content'>
          <span className='category'> #{productData.category.slug}</span>
          <span className='price'>
            $
            {productData.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>
        </div>
        <div className='opt'>
          <button type='button' title='add cart'>
            <i className='fa-solid fa-cart-plus'> </i>
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
