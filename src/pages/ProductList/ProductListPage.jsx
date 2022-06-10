import React, { useState } from 'react'
import { ContentProductList } from '../../styles';
import styles from '../../styles/styles.module.css';
import HomePage from '../home/HomePage';
import categoriesData from '../../mocks/en-us/product-categories.json';
import { Category } from '../../components';
const ProductListPage = () => {

    const categoriesArr = categoriesData.results.map(category => ({
        ...category,
        selected: false,
    }));

    const [categories, setCategories] = useState(categoriesArr);

    const listCategories = categories.map((category, index) => (
        <li
            key={category.id}
            className={category.selected ? 'active' : ''}
            onClick={() => handleSelectCategory(category.id, index)}
        >
            <Category category={category} />
        </li>
    ));

    const handleSelectCategory = (id, index) => {
        const newListCategories = [...categories];
        newListCategories[index].selected = !newListCategories[index].selected;
        setCategories(newListCategories)
    }
    return (
        <ContentProductList>
            <div className={`${styles['col-2']} slider`}>
                <div className='categories'>
                    Categories
                    <ul>
                        {listCategories}
                    </ul>
                </div>
            </div>
            <div className={`${styles['col-10']} productList `}>
                <HomePage />
            </div>
        </ContentProductList>
    )
}

export default ProductListPage