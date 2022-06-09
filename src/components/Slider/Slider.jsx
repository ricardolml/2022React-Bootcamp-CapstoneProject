import React from 'react'
import SliderStyle from './SliderStyle';
import categoriesData from '../../mocks/en-us/product-categories.json';
import Category from '../Category/Category';


const Slider = () => {
    const { results } =  categoriesData;

    const cat = results.map( category => (
        <Category key={category.id} category={category} />
    ));

    return (
        <SliderStyle>
            { cat }
        </SliderStyle>
    )
}

export default Slider