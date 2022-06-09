import React from 'react';

const Category = ({ category  }) => {
    const { main_image , name} = category.data;
    return (
        <div className='info'>
            <img src={main_image.url} alt="" />
            <label htmlFor="" className='descript'>{name}</label>
        </div>
    )
}

export default Category;