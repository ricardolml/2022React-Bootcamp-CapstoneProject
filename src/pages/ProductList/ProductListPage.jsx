import React, { useState } from 'react';
import { Button, ContentProductList } from '../../styles';
import { Loading, ProductList } from '../../components';
import useCategoriesSelected from '../../utils/hooks/useCategoriesSelected';
import useProducts from '../../utils/hooks/useProducts';
import { useFetch } from '../../utils/hooks/useFetch';
import Pagination from '../../components/Pagination/Pagination';

const ProductListPage = () => {
  const [page, setPage] = useState(1);
  const { data: categoriesData, isLoading: isLoadingCategories } =
    useFetch('category');
  const {
    categoriesSelect,
    handleSelectCategory,
    handleClearCategoriesSelect,
  } = useCategoriesSelected(isLoadingCategories);
  const { data, isLoading } = useProducts(categoriesSelect, page);

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
          {categoriesSelect.length > 0 && (
            <Button onClick={handleClearCategoriesSelect}>
              Clear filters <i className='fa-regular fa-trash-can'> </i>
            </Button>
          )}
        </div>
      </div>
      <div className={`productList `}>
        <h3>Products Lists</h3>
        {isLoading ? (
          <Loading />
        ) : data.results.length > 0 ? (
          <div>
            <ProductList productsList={data} setPage={setPage} />
            <div className='pagination'>
              <Pagination
                numPages={data.total_pages}
                setPage={setPage}
                page={page}
              />
            </div>
          </div>
        ) : (
          'Ops... No data'
        )}
      </div>
    </ContentProductList>
  );
};

export default ProductListPage;
