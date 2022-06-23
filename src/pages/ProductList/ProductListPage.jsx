import React from 'react'
import { ContentProductList } from '../../styles';
import categoriesData from '../../mocks/en-us/product-categories.json';
import { Loading, ProductList } from '../../components';
import useProducts from '../../utils/hooks/useProducts';
import useCategoriesSelected from '../../utils/hooks/useCategoriesSelected';

const ProductListPage = () => {

    const {
        handleSelectCategory,
        categoriesSelect,
    } = useCategoriesSelected();

    const { productsState } = useProducts(categoriesSelect);
    // console.log(productsState);
    const listCategories = categoriesData.results.map((category) => (
        <li
            key={category.id}
            onClick={ (e) => handleSelectCategory(e, category.id)}
        >
            { category.data.name }
        </li>
    ));

    return (
        <ContentProductList>
            <div className={`slider`}>
                <div className='categories'>
                    Categories Filter
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
                            'Ops... No data'
                }
            </div>
        </ContentProductList>
    )
}

export default ProductListPage