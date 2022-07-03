import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateNumsItemCar, deleteItem } from '../../store/slices/cartSlice';
import { startLoading } from '../../store/slices/uiSlice';
import useQuantity from '../../utils/hooks/useQuantity';
import QuantityButton from '../QuantityButton/QuantityButton';

const ItemTableCart = ({ product }) => {
  const dispatch = useDispatch();
  const { count, handleSum, handleLess } = useQuantity(
    product.stock,
    product.numItems
  );

  useEffect(() => {
    if (count !== product.numItems) {
      dispatch(
        updateNumsItemCar({
          idProduct: product.id,
          numItem: count,
          numCurrentItems: product.numItems,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);
  const handleDetele = () => {
    dispatch(
      startLoading({
        title: 'Product deleted from the cart',
        message: `The product ${product.product.name} deleted`,
      })
    );
    dispatch(deleteItem(product));
  };
  return (
    <div>
      <h4>{product.product.name}</h4>
      <div className='itemPrice'>
        <img src={product.product.url} alt='' width='100px' />
        <QuantityButton
          price={product.price}
          handleLess={handleLess}
          handleSum={handleSum}
          count={count}
          productStock={product.stock}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <label htmlFor=''>Total</label> ${product.price * count}
        </div>
        <div className='deteleItem' onClick={handleDetele}>
          <i className='fa-solid fa-trash-can'> </i>
        </div>
      </div>
    </div>
  );
};

export default ItemTableCart;
