import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './style.css';
import InfoIcon from '../../../assets/info-icon.png';
import playIcon from '../../../assets/play-icon.png';
import { setShowVideoModal } from '../../../redux/globals.slice';
import { useClickOutside, addAutoplayToYoutubeUrl } from '../../../helpers';

function TextInputComponent({ onChange, label, placeholder, defaultValue, style, infoPopup, errorText, disabled }) {
   const dispatch = useDispatch();
   const ref = useRef();
   const [value, setValue] = useState(defaultValue);
   const [showInfoPopUp, setShowInfoPopUp] = useState(false);

   const { showVideoModal } = useSelector((state) => state.globals);

   function handleClickOutside() {
      setShowInfoPopUp(false);
   }

   useClickOutside(ref, handleClickOutside);

   const handleSelectChange = (event) => {
      setValue(event.target.value);
      onChange(event.target.value);
   };

   const onInfoPopupHandler = (event) => {
      event.stopPropagation();
      setShowInfoPopUp(!showInfoPopUp);
   };

   const onPlayVideoHandler = () => {
      dispatch(setShowVideoModal({ value: true, videoUrl: addAutoplayToYoutubeUrl(infoPopup.videoUrl) }));
   };

   return (
      <div className="input-section" style={style}>
         <div
            style={{
               display: 'flex',
               flexDirection: 'row',
               position: 'relative'
            }}
         >
            <div className="standard-input-label">
               {label}{' '}
               {(errorText && errorText.error) || (errorText && errorText.message) ? (
                  <span style={{ color: errorText.error ? 'orangered' : 'green' }}>- {errorText.message}</span>
               ) : null}
            </div>
            <div
               style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'row'
               }}
            >
               {infoPopup && <img src={InfoIcon} className="info-icon standard-input-label" onClick={(event) => onInfoPopupHandler(event)} />}
               {showInfoPopUp && (
                  <div className="infoCard5" ref={ref}>
                     <div className="triangle3"></div>
                     <div className="info-popup" style={{ textAlign: 'start' }}>
                        {infoPopup.explanation}
                     </div>
                     {infoPopup.videoUrl && (
                        <div className="Video-wrapper">
                           <iframe
                              width="100%"
                              height="100%"
                              src={infoPopup.videoUrl}
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                           ></iframe>
                           <div className="video-overlay" onClick={() => onPlayVideoHandler()}>
                              {/* <img src={playIcon} className="Play-icon" /> */}
                           </div>
                        </div>
                     )}
                  </div>
               )}
            </div>
         </div>
         <div
            className="standard-input"
            style={{
               ...style,
               backgroundColor: (errorText && errorText.error) || (errorText && errorText.message) ? '#FFE1E5' : '#f1f5fb',
               borderColor: (errorText && errorText.error) || (errorText && errorText.message) ? '#E2001D' : '#cad9ee'
            }}
         >
            <input
               disabled={disabled}
               style={{ color: defaultValue ? '#000000' : 'inherit' }}
               value={defaultValue}
               className="input-field"
               placeholder={placeholder}
               onChange={(e) => handleSelectChange(e)}
            />
         </div>
      </div>
   );
}

TextInputComponent.propTypes = {
   onChange: PropTypes.func.isRequired,
   label: PropTypes.string.isRequired,
   placeholder: PropTypes.string,
   infoPopup: PropTypes.object
};

export default TextInputComponent;
