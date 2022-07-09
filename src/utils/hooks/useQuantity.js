import { useState } from 'react';

const useQuantity = (productStock, numProduct = 1) => {
  const [count, setCount] = useState(numProduct);
  const handleSum = () => {
    if (numProduct === 1) {
      count < productStock && setCount(count + 1);
    } else {
      productStock >= 1 && setCount(count + 1);
    }
  };
  // const handleSum = () => count < productStock && setCount(count + 1);
  const handleLess = () => count > 1 && setCount(count - 1);
  const handleReset = () => setCount(1);

  return {
    count,
    handleLess,
    handleSum,
    handleReset,
  };
};

export default useQuantity;
