import React from 'react';
import { Link } from 'react-router-dom';
import { Alert } from '../../components';
import TableDetailCart from '../../components/TableDetailCart/TableDetailCart';
import Button from '../../styles/Button';

const CartPage = () => {
  return (
    <div>
      <Alert />
      <h2>Your Cart</h2>
      <div style={{ width: '200px' }}>
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
