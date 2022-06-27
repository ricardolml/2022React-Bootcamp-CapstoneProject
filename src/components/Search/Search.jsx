import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../../styles';
import { useFetch } from '../../utils/hooks/useFetch';
import SearchStyle from './SearchStyle';

const initialState = {
  type: null,
  value: null,
};

const Search = () => {
  const [petitionState, setPetitionState] = useState(initialState);
  const textValue = useRef();
  const debounceRef = useRef();

  const { data } = useFetch(
    petitionState.type,
    null,
    null,
    5,
    petitionState.value
  );
  const products = data.results;

  const onQueryChanged = (event) => {
    const value = event.target.value;
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      if (value === '') {
        setPetitionState(initialState);
        return;
      }
      setPetitionState({
        type: 'product',
        value,
      });
    }, 450);
  };

  const handleClear = () => {
    setPetitionState(initialState);
    textValue.current.value = '';
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
  };

  return (
    <SearchStyle style={{ width: '100%', position: 'relative' }}>
      <Input
        ref={textValue}
        type='text'
        placeholder='Search Forniture...'
        onChange={onQueryChanged}
      />
      <div className='content2'>
        {products?.length > 0 && (
          <ul style={{ listStyle: 'none' }}>
            {products?.length > 0 &&
              products.map(({ id, data }) => (
                <Link
                  key={id}
                  to={`/products/${id}`}
                  replace
                  onClick={handleClear}
                  className='link'
                >
                  <li>
                    <img src={data.mainimage.url} alt='' width='50px' />
                    {data.name}
                  </li>
                </Link>
              ))}
            <li className='viewAll'>
              View all results {data.total_results_size}
            </li>
          </ul>
        )}
      </div>
    </SearchStyle>
  );
};

export default Search;
