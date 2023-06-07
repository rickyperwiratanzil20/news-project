import React from 'react';
import './header.scss';
import {useNavigate} from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  }

  return(
      <div className='header'>
          <p className='logo-app'>NEWS</p>
          <p className='menu-item' onClick={logout}>Logout</p>
      </div>
  )
}

export default Header;
