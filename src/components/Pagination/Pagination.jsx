import React from 'react';
import PropTypes from 'prop-types';
import PaginationStyle from './Pagination.style';

const Pagination = ({ numPages, page, setPage }) => {
  const handleChangePage = (e) => {
    const num = parseInt(e.target.value);
    setPage(num);
  };
  const handlePrevious = () => {
    setPage(page - 1);
  };
  const handleNext = () => {
    setPage(page + 1);
  };
  return (
    <PaginationStyle>
      <div>
        {page > 1 && (
          <span onClick={handlePrevious}>
            <i className='fa-solid fa-arrow-left-long'> </i> Previous
          </span>
        )}
      </div>
      <div className='page'>
        <label htmlFor=''>Page</label>
        <select value={page} onChange={handleChangePage}>
          {[...Array(numPages)].map((e, i) => (
            <option key={i}>{i + 1}</option>
          ))}
        </select>
        <label htmlFor=''>of {numPages}</label>
      </div>
      <div>
        {page < numPages && (
          <span onClick={handleNext}>
            Next <i className='fa-solid fa-arrow-right-long'> </i>
          </span>
        )}
      </div>
    </PaginationStyle>
  );
};

Pagination.propTypes = {
  numPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default Pagination;
