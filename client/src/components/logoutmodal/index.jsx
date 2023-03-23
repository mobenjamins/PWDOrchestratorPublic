import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setShowLogoutModal } from '../../redux/globals.slice';
import './style.css';
import LogoutIcon from '../../assets/logout-icon.png';

function VideoModal() {
   const dispatch = useDispatch();
   const { videoUrl } = useSelector((state) => state.globals);

   const onExitModal = () => {
      dispatch(setShowLogoutModal({ value: false }));
   };

   const onLogoutHandler = () => {
      dispatch(setShowLogoutModal({ value: false }));
   };

   const onCancelHandler = () => {
      dispatch(setShowLogoutModal({ value: false }));
   };

   return (
      <div className="logout-modal" onClick={() => onExitModal()}>
         <div className="logout-wrapper">
            <div className="logout-circle">
               <img src={LogoutIcon} />
            </div>
            <div className="logout-middle">
               <div className="logout-title">LOG OUT</div>
               <div className="logout-confirmation">Are you sure you want to logout?</div>
            </div>
            <div className="bottom-logout">
               <div className="logout-btn cancel-btn" onClick={() => onCancelHandler()}>
                  Cancel
               </div>
               <div className="logout-btn out-btn" onClick={() => onLogoutHandler()}>
                  Logout
               </div>
            </div>
         </div>
      </div>
   );
}

export default VideoModal;
