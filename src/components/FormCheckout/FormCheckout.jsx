import React from 'react';
import PropTypes from 'prop-types';

import { Input } from '../../styles';
import FormCheckoutStyle from './FormCheckout.style';

const FormCheckout = ({ register, errors }) => {
  return (
    <FormCheckoutStyle>
      <form>
        <div className='form-control'>
          <label htmlFor=''>Full Name</label>
          <div style={{ width: '100%' }}>
            <Input
              autoComplete='off'
              placeholder='Full Name'
              error={errors.name}
              {...register('name', { required: true, minLength: 5 })}
            />
            {errors.name && (
              <span className='error'>This field is required</span>
            )}
          </div>
        </div>
        <div className='form-control'>
          <label htmlFor=''>Email</label>
          <div style={{ width: '100%' }}>
            <Input
              autoComplete='off'
              placeholder='Email'
              type='email'
              error={errors.email}
              {...register('email', { required: true })}
            />
            {errors.email && (
              <span className='error'>This field is required</span>
            )}
          </div>
        </div>
        <div className='form-control'>
          <label htmlFor=''>Zip code</label>
          <div style={{ width: '100%' }}>
            <Input
              autoComplete='off'
              placeholder='Zip code'
              error={errors.code}
              type='number'
              {...register('code', { required: true })}
            />
            {errors.code && (
              <span className='error'>This field is required</span>
            )}
          </div>
        </div>
        <div className='form-control'>
          <label htmlFor=''>Notes</label>
          <div style={{ width: '100%' }}>
            <textarea
              rows='10'
              placeholder='Notes... '
              name='dd'
              defaultValue=''
              {...register('notes')}
            />
          </div>
        </div>
      </form>
    </FormCheckoutStyle>
  );
};

FormCheckout.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default FormCheckout;
