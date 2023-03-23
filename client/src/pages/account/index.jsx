import React, { useEffect, useState } from 'react';
import '../../App.css';
import './style.css';
import { AccountSvgIcon, DeleteIcon, LockIcon } from './account-svg';
import EditAccount from './components/editacount.jsx';
import ChangePassword from './components/changePassWord.jsx';
import DeleteAccount from './components/deleteAccount.jsx';

function Account() {
   const [active, setActive] = useState({ first: true });

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
               <AccountSvgIcon fill={active.first ? 'white' : '#727272'} />
               <div className="banner-text">Edit Your Account</div>
            </div>
            <div className={`banner-item ${active.second ? 'banner-active' : ''}`} onClick={() => onNavHandler('second')}>
               <LockIcon fill={active.second ? 'white' : '#727272'} />
               <div className="banner-text">Change Your Password</div>
            </div>
            <div className={`banner-item ${active.third ? 'banner-active' : ''}`} onClick={() => onNavHandler('third')}>
               <DeleteIcon fill={active.third ? 'white' : '#727272'} />
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
