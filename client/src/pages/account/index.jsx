import React, { useEffect, useState } from 'react';
import '../../App.css';
import './style.css';
import lockIcon from '../../assets/lock-icon.png';
import accountIcon from '../../assets/lock-icon.png';
import deleteIcon from '../../assets/delete-icon.png';
import { AccountSvgIcon, DeleteIcon, LockIcon } from './account-svg';
import { DeleteAccount, ChangePassword, EditAccount } from './components';

function Account() {
   const [active, setActive] = useState({});

   const onNavHandler = (nav) => {
      setActive((prev) => {
         return {
            [nav]: true
         };
      });
   };
   return (
      <div className="account-wrapper">
         <div className="nav-banner">
            <div className={`banner-item ${active.first ? 'banner-active' : ''}`} onClick={() => onNavHandler('first')}>
               <AccountSvgIcon fill="#727272" />
               <div className="banner-text">Edit Your Account</div>
            </div>
            <div className={`banner-item ${active.second ? 'banner-active' : ''}`} onClick={() => onNavHandler('second')}>
               <LockIcon fill="#727272" />
               <div className="banner-text">Change Your Password</div>
            </div>
            <div className={`banner-item ${active.third ? 'banner-active' : ''}`} onClick={() => onNavHandler('third')}>
               <DeleteIcon fill={active ? 'white' : '#727272'} />
               <div className="banner-text">Delete Your Account</div>
            </div>
         </div>
         <div className="content-section">
            {active.first && <EditAccount />}
            {active.second && <ChangePassword />}
            {active.third && <DeleteAccount />}
         </div>
      </div>
   );
}

export default Account;
