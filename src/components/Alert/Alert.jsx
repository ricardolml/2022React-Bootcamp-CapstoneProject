import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stoptLoading } from '../../store/slices/uiSlice';
import { Button } from '../../styles';
import AlertStyle from './Alert.style';

const Alert = () => {
  const { isLoading, messaje, title, icon } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  if (!isLoading) {
    return <></>;
  }

  return (
    <AlertStyle>
      <div className='alert'>
        <h3 style={{ textAlign: 'center' }}>{title}</h3>
        <div style={{ textAlign: 'center' }}>
          <i className={`${icon} fa-3x`}> </i>
        </div>
        <hr />
        <p>{messaje}</p>
        <Button onClick={() => dispatch(stoptLoading())}>Ok</Button>
      </div>
    </AlertStyle>
  );
};

export default Alert;
