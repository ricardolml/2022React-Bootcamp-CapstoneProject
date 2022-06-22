import React from 'react';
import { ContentProductList } from '../../styles';
import { Loading, ProductList } from '../../components';
import useCategoriesSelected from '../../utils/hooks/useCategoriesSelected';
import useProducts2 from '../../utils/hooks/useProducts2';
import { useFetch } from '../../utils/hooks/useFetch';

const ProductListPage = () => {
  const { data: categoriesData, isLoading: isLoadingCategories } =
    useFetch('category');
  const { handleSelectCategory, categoriesSelect } =
    useCategoriesSelected(isLoadingCategories);
  const { data, isLoading } = useProducts2(categoriesSelect);

  const listCategories =
    !isLoadingCategories &&
    categoriesData.results.map((category) => (
      <li
        key={category.id}
        id={category.id}
        onClick={(e) => handleSelectCategory(e, category.id)}
      >
        {category.data.name}
      </li>
    ));

  return (
    <ContentProductList>
      <div className={`slider`}>
        <div className='categories'>
          Categories Filter
          <ul>{listCategories}</ul>
        </div>
      </div>
      <div className={`productList `}>
        <h3>Products Lists</h3>
        {isLoading ? (
          <Loading />
        ) : data.results.length > 0 ? (
          <ProductList productsList={data.results} />
        ) : (
          'Ops... No data'
        )}
      </div>
    </ContentProductList>
  );
};

export default ProductListPage;
