import React from 'react';
import { Input } from '../../styles';
import FormCheckoutStyle from './FormCheckout.style';

const FormCheckout = () => {
  return (
    <FormCheckoutStyle>
      <form>
        <div className='form-control'>
          <label htmlFor=''>Full Name</label>
          <Input placeholder='Full Name' />
        </div>
        <div className='form-control'>
          <label htmlFor=''>Email</label>
          <Input placeholder='Email' type='email' />
        </div>
        <div className='form-control'>
          <label htmlFor=''>Zip code</label>
          <Input placeholder='Zip code' type='number' />
        </div>
        <div className='form-control'>
          <label htmlFor=''>Notes</label>
          <textarea
            rows='10'
            placeholder='Notes... '
            name='dd'
            defaultValue=''
          />
        </div>
      </form>
    </FormCheckoutStyle>
  );
};

export default FormCheckout;
