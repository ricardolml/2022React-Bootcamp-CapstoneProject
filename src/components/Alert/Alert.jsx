import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stoptLoading } from '../../store/slices/uiSlice';
import { Button } from '../../styles';
import AlertStyle from './Alert.style';

const Alert = () => {
  const { isLoading, messaje, title } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  if (!isLoading) {
    return <></>;
  }

  return (
    <AlertStyle>
      <div className='alert'>
        <h3>{title}</h3>
        <hr />
        <p>{messaje}</p>
        <Button onClick={() => dispatch(stoptLoading())}>Ok</Button>
      </div>
    </AlertStyle>
  );
};

export default Alert;
