import React from 'react';
import { Carrusel, Loading, ProductList, Slider } from '../../components';
// import feactureProducts from '../../mocks/en-us/featured-products.json';
import { useFetch } from '../../utils/hooks/useFetch';

const HomePage = () => {
  const { data, isLoading } = useFetch('product', 'Featured');
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Carrusel />
      <Slider />
      {!isLoading && (
        <ProductList
          productsList={data}
          title='Featured Products'
          viewAll={true}
        />
      )}
    </>
  );
};

export default HomePage;
