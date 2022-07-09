import React from 'react';
import PropTypes from 'prop-types';

import Card from '../ProductCard/ProductCard.style';
import ProductCard from '../ProductCard/ProductCard';
import ProductListStyle from './ProductList.style';
import { useNavigate } from 'react-router-dom';
import Alert from '../Alert/Alert';

const ProductList = ({ productsList, title, viewAll, showDescription }) => {
  const navigate = useNavigate();

  const products = productsList.results.map((product) => (
    <div key={product.id}>
      <ProductCard product={product} showDescription={showDescription} />
    </div>
  ));
  return (
    <ProductListStyle>
      <h2>{title}</h2>
      <hr />
      <Alert />
      <div className='content'>
        {products}
        {viewAll && (
          <Card
            className='viewAll'
            onClick={() => navigate('../products', { replace: true })}
          >
            <i className='fa-solid fa-3x fa-angles-right'> </i>
            <label> View all products </label>
          </Card>
        )}
      </div>
    </ProductListStyle>
  );
};

ProductList.propTypes = {
  productsList: PropTypes.object.isRequired,
  title: PropTypes.string,
  viewAll: PropTypes.bool,
  showDescription: PropTypes.bool,
};
export default ProductList;
