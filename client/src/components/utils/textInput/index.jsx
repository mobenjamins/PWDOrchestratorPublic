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
         <div className="standard-input-label">
            {label}{' '}
            {(errorText && errorText.error) || (errorText && errorText.message) ? (
               <span style={{ color: errorText.error ? 'orangered' : 'green' }}>- {errorText.message}</span>
            ) : null}
         </div>
         <div className="standard-input" style={{ ...style }}>
            <input
               disabled={disabled}
               style={{ color: defaultValue ? '#000000' : 'inherit' }}
               value={defaultValue}
               className="input-field"
               placeholder={placeholder}
               onChange={(e) => handleSelectChange(e)}
            />
            {infoPopup && <img src={InfoIcon} className="info-icon" onClick={(event) => onInfoPopupHandler(event)} />}
            {showInfoPopUp && (
               <div className="infoCard" ref={ref}>
                  <div className="triangle"></div>
                  <div className="info-popup">{infoPopup.explanation}</div>
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
                        <img src={playIcon} className="Play-icon" />
                     </div>
                  </div>
               </div>
            )}
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
