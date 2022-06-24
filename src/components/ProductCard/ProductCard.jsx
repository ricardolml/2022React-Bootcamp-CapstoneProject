import React, { useState } from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { data: productData } = product;
  const [favorite, setFavorite] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/products/${product.id}`, { replace: true });
  };

  const handleChangeFav = () => setFavorite(!favorite);

  return (
    <Card favorite={favorite}>
      <div className='img' onClick={handleNavigate}>
        <i
          className={`${!favorite ? 'fa-regular' : 'fa-solid'} fa-heart fav `}
          onClick={handleChangeFav}
        />
        <img src={productData.mainimage.url} alt='' />
      </div>
      <div className='body'>
        <h5>{productData.name}</h5>
        <div className='content'>
          <h6 className='category'> #{productData.category.slug}</h6>
          <h6 className='price'>
            $
            {productData.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </h6>
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
