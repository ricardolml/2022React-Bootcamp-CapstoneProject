import React from 'react';
import { Carrusel, ProductList, Slider } from '../../components';
import feactureProducts from '../../mocks/en-us/featured-products.json';

const HomePage = ({ setShowHomePage }) => {
    return (
        <>
            <Carrusel />
            <Slider />
            <ProductList 
                productsList={feactureProducts.results} 
                title='Featured Products' 
                setShowHomePage={setShowHomePage}
                viewAll={true}
            />
        </>
    )
}

export default HomePage