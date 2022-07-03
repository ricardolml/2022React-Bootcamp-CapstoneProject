import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../../styles';
import { useFetch } from '../../utils/hooks/useFetch';
import SearchStyle from './Search.style';

const initialState = {
  type: null,
  value: null,
};

const Search = () => {
  const [petitionState, setPetitionState] = useState(initialState);
  const textValue = useRef();
  const debounceRef = useRef();
  const [loadingKey, setLoadingKey] = useState(false);

  const { data, isLoading } = useFetch(
    petitionState.type,
    null,
    null,
    5,
    petitionState.value
  );
  const products = data.results;
  const onQueryChanged = (event) => {
    const value = event.target.value.trim();
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    setLoadingKey(true);
    debounceRef.current = setTimeout(() => {
      setLoadingKey(false);
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
      <div className='input'>
        <Input
          ref={textValue}
          type='text'
          placeholder='Search Forniture...'
          onChange={onQueryChanged}
        />
        {!loadingKey ? (
          <i className='fa-solid fa-magnifying-glass search'> </i>
        ) : (
          <img
            src='/img/cargando-spin.gif'
            alt='loadin'
            width='20px'
            className='search'
          />
        )}
      </div>
      <div className='content2'>
        {products?.length > 0 ? (
          <ul style={{ listStyle: 'none' }}>
            {products.map(({ id, data }) => (
              <Link
                key={id}
                to={`/products/${id}`}
                replace
                onClick={handleClear}
                className='link'
              >
                <li>
                  <img src={data.mainimage.url} alt='' width='50px' />
                  <div>
                    {data.name}
                    <br />
                    <span className='price'>${data.price}</span>
                  </div>
                </li>
              </Link>
            ))}
            <Link
              to={`/search?q=${petitionState.value}`}
              replace
              className='viewAll'
              onClick={handleClear}
            >
              <li>View all results {data.total_results_size}</li>
            </Link>
          </ul>
        ) : (
          products?.length === 0 &&
          !isLoading && (
            <ul>
              <li>
                <img src='/img/no-result.png' alt='' width='30px' />
                Sorry, we couldn't find anything like : {petitionState.value}
              </li>
            </ul>
          )
        )}
      </div>
    </SearchStyle>
  );
};

export default Search;
