import React from 'react';
import { Link } from 'react-router-dom';
import TableDetailCart from '../../components/TableDetailCart/TableDetailCart';
import Button from '../../styles/Button';

const CartPage = () => {
  return (
    <div>
      <h2>Your Cart</h2>
      <div style={{ display: 'flex', width: '15%' }}>
        <Link to='/' replace>
          <Button>
            <i className='fa-solid fa-arrow-left-long'> </i> Continue Shopping
          </Button>
        </Link>
      </div>
      <hr />
      <TableDetailCart />
    </div>
  );
};

export default CartPage;
