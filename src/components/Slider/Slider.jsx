import React from 'react'
import SliderStyle from './SliderStyle';
import categoriesData from '../../mocks/en-us/product-categories.json';
import Category from '../Category/Category';


const Slider = () => {
    const { results } =  categoriesData;

    const categories = results.map( category => (
        <div className='info' key={category.id}>
            <Category category={category} />
        </div>
    ));

    return (
        <SliderStyle>
            {categories}
        </SliderStyle>
    )
}

export default Slider