import React from 'react';
import { useNavigate } from 'react-router-dom';
import SliderStyle from './Slider.style';
import Category from '../Category/Category';
import { useFetch } from '../../utils/hooks/useFetch';

const Slider = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useFetch('category');
  const { results } = data;

  const handleNavigate = (id) => {
    navigate({
      pathname: '/products',
      search: `?categories=${id}`,
    });
  };

  const categories =
    !isLoading &&
    results.map((category) => (
      <div
        className='info'
        key={category.id}
        onClick={() => handleNavigate(category.id)}
      >
        <Category className='category' category={category} />
      </div>
    ));

  return <SliderStyle>{categories}</SliderStyle>;
};

export default Slider;
