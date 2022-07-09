import React from 'react';
import { useSelector } from 'react-redux';
import CardCheckoutStyle from './CardCheckout.style';

export const CardCheckout = () => {
  const { items } = useSelector((state) => state.cart);
  let total = 0;
  return (
    <CardCheckoutStyle>
      <h3>Order summary</h3>
      {items.map((item) => {
        total += item.price * item.numItems;
        return (
          <div key={item.id}>
            <label>{` ${item.numItems} x ${item.product.name}`}</label>
            <span>{`$ ${item.price * item.numItems}`}</span>
          </div>
        );
      })}
      <div>
        <label>Total</label>
        <span>${total}</span>
      </div>
    </CardCheckoutStyle>
  );
};
