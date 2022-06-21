import React from 'react';
import Card from './Card';

const ProductCard = ({ product }) => {
  const { data: productData } = product;

  return (
    <Card>
      <div className='img'>
        {/* <i class='fa-solid fa-heart fav'> </i> */}
        <i class='fa-regular fa-heart fav'> </i>
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
