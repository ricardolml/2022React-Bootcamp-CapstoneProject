import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useProductCart = (idProduct) => {
  const { items } = useSelector((state) => state.cart);
  const product = items.find(({ id }) => id === idProduct);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const index = items.findIndex(({ id }) => id === idProduct);
    index >= 0 && items[index].stock < 1 && setDisabled(true);
  }, [items, idProduct]);

  return {
    product,
    disabled,
  };
};

export default useProductCart;
