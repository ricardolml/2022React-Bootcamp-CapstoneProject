import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CardCheckout } from '../../components/CardCheckout/CardCheckout';
import FormCheckout from '../../components/FormCheckout/FormCheckout';
import { Button } from '../../styles';
import CheckoutContend from '../../styles/CheckoutContend';
// import { useForm } from 'react-hook-form';

const Checkout = () => {
  const [validate, setValidate] = useState(false);
  return (
    <CheckoutContend>
      <h2>Check Outtt</h2>
      <div style={{ width: '200px' }}>
        <Link to='/cart' replace>
          <Button style={{ width: '100%' }}>
            <i className='fa-solid fa-arrow-left-long'> </i> Go back to cart
          </Button>
        </Link>
      </div>
      <hr />
      <div className='content'>
        <div className='form'>
          <FormCheckout setValidate={setValidate} />
        </div>
        <div className='cardSummary'>
          <CardCheckout />
          <Button disabled={!validate}>Place Order</Button>
        </div>
      </div>
    </CheckoutContend>
  );
};

export default Checkout;
