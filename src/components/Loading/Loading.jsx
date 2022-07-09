import React from 'react';

const Loading = () => {
  return (
    <div
      className='loading'
      style={{
        margin: '0',
        padding: '0',
        width: '100%',
        height: '100%',
        position: 'fixed',
        zIndex: '999999',
        top: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img src='/img/loading.gif' alt='' width='200' />
    </div>
  );
};

export default Loading;
