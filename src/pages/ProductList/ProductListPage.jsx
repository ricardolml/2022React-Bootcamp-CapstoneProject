import React from 'react'
import { ContentProductList } from '../../styles';
import categoriesData from '../../mocks/en-us/product-categories.json';
import productsData from '../../mocks/en-us/featured-products.json';
import { Category, Loading, ProductList } from '../../components';
import useFilterProducts from '../../utils/hooks/useFilterProducts';
import useCategoriesSelected from '../../utils/hooks/useCategoriesSelected';
const ProductListPage = () => {

    const {
        handleSelectCategory,
        categories,
        categoriesSelect,
    } = useCategoriesSelected(categoriesData);

    const { productsState } = useFilterProducts(productsData.results, categoriesSelect);
// console.log(productsState);
    const listCategories = categories.map((category, index) => (
        <li
            key={category.id}
            className={category.selected ? 'active' : ''}
            onClick={() => handleSelectCategory(index)}
        >
            <Category category={category} />
        </li>
    ));

    return (
        <ContentProductList>
            <div className={`slider`}>
                <div className='categories'>
                    Categories
                    <ul>
                        {listCategories}
                    </ul>
                </div>
            </div>
            <div className={`productList `}>
                <h3>Products Lists</h3>
                {
                    (productsState.loading)
                    ?
                        <Loading />
                    :
                        productsState.products.length > 0 
                        ?  
                            <ProductList productsList={productsState.products} />
                        :
                            'No hay datos'
                }
            </div>
        </ContentProductList>
    )
}

export default ProductListPage