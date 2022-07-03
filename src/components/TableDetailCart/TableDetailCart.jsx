import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../styles/Button';
import Input from '../../styles/Input';
import ItemTableCart from './ItemTableCart';
import TableDetailCartStyle from './TableDetailCart.style';

const TableDetailCart = () => {
  const { items, numItems } = useSelector((store) => store.cart);
  let total = 0;
  return (
    <TableDetailCartStyle
      style={{ display: 'flex', gap: '20px', flexFlow: 'row wrap' }}
    >
      <div className='itemsTable'>
        <div>
          {items.map((item) => {
            total += item.price * item.numItems;
            return <ItemTableCart key={item.id} product={item} />;
          })}
        </div>
      </div>
      <div className='descriptionCart'>
        <div className='detailPrice'>
          <h4>Summary</h4>
          <hr />
          <label>Items {numItems}</label>
          <div style={{ display: 'flex', gap: '15px', marginTop: '40px' }}>
            <label>Give Code</label>
            <Input placeholder='Give Code' />
          </div>
          <div>
            <label>Subtotal</label>
            <span>{total}</span>
          </div>
          <div>
            <label>Code</label>
            <span>$0</span>
          </div>
          <div>
            <label>Shipping</label>
            <span>Free</span>
          </div>
          <div className='total'>
            <label>Total</label>
            <span>${total}</span>
          </div>
          <Link to='/checkout' replace>
            <Button>Check Out</Button>
          </Link>
        </div>
      </div>
    </TableDetailCartStyle>
  );
};

export default TableDetailCart;
