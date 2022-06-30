import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateNumsItemCar } from '../../store/slices/cartSlice';
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

  return (
    <div>
      <h4>{product.product.name}</h4>
      <div
        style={{
          display: 'flex',
          gap: '30px',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          textAlign: 'center',
          borderBottom: '1px solid orange',
        }}
      >
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
        <div>
          <i className='fa-solid fa-trash-can'> </i>
        </div>
      </div>
    </div>
  );
};

export default ItemTableCart;
