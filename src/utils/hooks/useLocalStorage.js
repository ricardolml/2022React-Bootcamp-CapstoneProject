import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const useLocalStorage = () => {
  const state = useSelector((state) => state.cart);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);
};

export default useLocalStorage;
