import React from "react";
import { Carrusel, ProductList, Slider } from "../../components";
// import feactureProducts from "../../mocks/en-us/featured-products.json";
import { useFetch } from "../../utils/hooks/useFetch";

const HomePage = () => {
  const { data, isLoading } = useFetch("product", 16);
  return (
    <>
      <Carrusel />
      <Slider />
      {!isLoading && (
        <ProductList
          productsList={data.results}
          title="Featured Products"
          viewAll={true}
        />
      )}
    </>
  );
};

export default HomePage;
