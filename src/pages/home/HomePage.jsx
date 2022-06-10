import React from 'react';
import { Carrusel, ProductList, Slider } from '../../components';
import feactureProducts from '../../mocks/en-us/featured-products.json';

const HomePage = () => {
    return (
        <>
            <Carrusel />
            <Slider />
            <ProductList productsList={feactureProducts} title='Featured Products'/>
        </>
    )
}

export default HomePage