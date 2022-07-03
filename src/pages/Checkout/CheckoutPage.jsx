import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { CardCheckout } from '../../components/CardCheckout/CardCheckout';
import FormCheckout from '../../components/FormCheckout/FormCheckout';
import { Button } from '../../styles';
import CheckoutContend from '../../styles/CheckoutContend';
import Alert from '../../components/Alert/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { startLoading } from '../../store/slices/uiSlice';
import { resetCart } from '../../store/slices/cartSlice';

const Checkout = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(
      startLoading({
        title: `Thanks for your purchase ${data.name}`,
        message: `Your purchase request was received`,
        icon: 'fa-solid fa-circle-check',
      })
    );
    navigate('/', { replace: true });
    dispatch(resetCart());
  };

  useEffect(() => {
    if (items.length === 0) {
      navigate('/', { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CheckoutContend>
      <Alert />
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
          <FormCheckout register={register} errors={errors} />
        </div>
        <div className='cardSummary'>
          <CardCheckout />
          <Button onClick={handleSubmit(onSubmit)}>Place Order</Button>
        </div>
      </div>
    </CheckoutContend>
  );
};

export default Checkout;
