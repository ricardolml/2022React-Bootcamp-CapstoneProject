import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loading, ProductList } from '../../components';
import Pagination from '../../components/Pagination/Pagination';
import { useFetch } from '../../utils/hooks/useFetch';

const SearchProductsPage = () => {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const q = searchParams.get('q');
  const { data, isLoading } = useFetch('product', null, null, 20, q, page);

  if (isLoading) {
    return <Loading />;
  }

  if (data.results.length === 0) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <img src='/img/no-result.png' alt='no results' />
        <span>Sorry, we couldn't find anything like : {q}</span>
      </div>
    );
  }
  return (
    <>
      <ProductList title={`Results of ${q}`} productsList={data} />
      <div className='pagination'>
        <Pagination numPages={data.total_pages} setPage={setPage} page={page} />
      </div>
    </>
  );
};

export default SearchProductsPage;
