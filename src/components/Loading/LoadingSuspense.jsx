import React from 'react';

const LoadingSuspense = () => {
  return (
    <div
      style={{
        margin: '0',
        padding: '0',
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(100, 100, 100, 0.5)',
        position: 'fixed',
        zIndex: '999999',
        top: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img src='./img/cargando.gif' alt='' />
    </div>
  );
};

export default LoadingSuspense;
