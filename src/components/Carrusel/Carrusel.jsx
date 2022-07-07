import React, { useEffect, useState } from 'react';
import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners';
import CarruselStyle from './CarruselStyle';

const Carrusel = () => {
  const { data } = useFeaturedBanners();
  const { results } = data;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index === results?.length - 1) {
        index = 0;
        setIndex(0);
        return;
      }
      index++;
      setIndex(index);
    }, 5000);
    return () => clearInterval(interval);
  }, [results?.length]);

  return (
    <CarruselStyle>
      {results?.length > 0 && (
        <div className='slider'>
          <img
            src={results[index].data.main_image.url}
            alt={results[index].data.main_image.alt}
          />
          <label htmlFor=''>{results[index].data.main_image.alt}</label>
        </div>
      )}
    </CarruselStyle>
  );
};

export default Carrusel;
