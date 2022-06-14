import React from 'react'
import NavBar from './NavBar';
import { Input } from '../../styles';

const Header = ({ setShowHomePage }) => {

    const handleGoHome = () => {
        setShowHomePage(true);
    }

    return (
        <div style={{ position: 'fixed', width:'100%' , top:'0', zIndex:'99999' }}>
            <NavBar>
                <span onClick={handleGoHome}>EcoForniture</span>
                <div className='content'>
                    <Input type='text' placeholder='Search...' />
                    <i className="fa-solid fa-cart-shopping end"> </i>
                </div>
            </NavBar>
        </div>
    )
}

export default Header