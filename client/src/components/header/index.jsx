import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import logoImage from '../../assets/cozm-logo.png';
import './style.css';
import { setShowLogoutModal } from '../../redux/globals.slice';

function Header(props) {
   const dispatch = useDispatch();
   const [activePage, setActivePage] = React.useState('');
   const navigate = useNavigate();

   useEffect(() => {
      const path = window.location.pathname;
      const page = path.split('/')[1];
      setActivePage(page);
   }, [activePage]);

   const pageHandler = (page) => {
      setActivePage(page);
      navigate(`/${page}`);
   };

   const logoutHandler = () => {
      dispatch(setShowLogoutModal({ value: true }));
   };

   return (
      <div className="header-wrapper">
         <div className="left-section">
            <img src={logoImage} className="logo-image" alt="logo" />
            <div className="brand-name">Posting of Workers in France</div>
         </div>
         <div className="nav-list">
            <div className={`navList-item ${activePage === '' ? 'navList-item-active' : ''}`} onClick={() => pageHandler('')}>
               Home
            </div>
            <div className={`navList-item ${activePage === 'faq' ? 'navList-item-active' : ''}`} onClick={() => pageHandler('faq')}>
               FAQ
            </div>
            <div className={`navList-item ${activePage === 'contact' ? 'navList-item-active' : ''}`} onClick={() => pageHandler('contact')}>
               CONTACT
            </div>
            <div className={`navList-item ${activePage === 'account' ? 'navList-item-active' : ''}`} onClick={() => pageHandler('account')}>
               My Account
            </div>
            <div className={`navList-item ${activePage === 'admin' ? 'navList-item-active' : ''}`} onClick={() => pageHandler('admin')}>
               Admin
            </div>
            <div className="logout-btn" onClick={() => logoutHandler()}>
               <p>Logout</p>
            </div>
         </div>
      </div>
   );
}

Header.propTypes = {};

export default Header;
