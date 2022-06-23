import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../utils/hooks/useFetch';
import ProductDetailStyle from './ProductDetailStyle';
const ProductDetail = () => {
  const { productID } = useParams();
  const { data, isLoading } = useFetch(null, null, productID);
  console.log(data, isLoading);
  return (
    <ProductDetailStyle>
      <div>1</div>
      <div>2</div>
    </ProductDetailStyle>
  );
};

export default ProductDetail;
