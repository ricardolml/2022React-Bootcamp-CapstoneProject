import React from 'react';
import PropTypes from 'prop-types';
const Category = ({ category }) => {
  const { main_image, name } = category.data;
  return (
    <>
      <img src={main_image.url} alt='' />
      <label htmlFor='' className='descript'>
        {name}
      </label>
    </>
  );
};

Category.propTypes = {
  category: PropTypes.object.isRequired,
};

export default Category;
