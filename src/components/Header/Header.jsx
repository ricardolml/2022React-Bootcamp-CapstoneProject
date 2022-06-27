import React from 'react';
import NavBar from './NavBar';
import Search from '../Search/Search';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{ position: 'fixed', width: '100%', top: '0', zIndex: '99999' }}
    >
      <NavBar>
        <span onClick={() => navigate('../', { replace: true })}>
          EcoForniture
        </span>
        <div className='content'>
          <Search />

          <i className='fa-solid fa-cart-shopping end'> </i>
        </div>
      </NavBar>
    </div>
  );
};

export default Header;
