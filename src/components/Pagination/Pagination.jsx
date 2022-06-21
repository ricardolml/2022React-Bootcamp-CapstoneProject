import React from 'react';
import PaginationStyle from './PaginationStyle';

const Pagination = ({ numPages }) => {
  const element = [];
  for (let i = 1; i < numPages; i++) {
    element.push(<li key={i}>{i}</li>);
  }

  return (
    <PaginationStyle>
      {element}
      <li>Next</li>
    </PaginationStyle>
  );
};

export default Pagination;
