import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './style.css';
import InfoIcon from '../../assets/info-icon.png';
import playIcon from '../../assets/play-icon.png';
import { setShowVideoModal } from '../../redux/globals.slice';
import { useClickOutside, addAutoplayToYoutubeUrl } from '../../helpers';

function FormTitle({ title, infoPopup }) {
   const dispatch = useDispatch();
   const ref = useRef();
   const [showInfoPopUp, setShowInfoPopUp] = useState(false);

   const handleClickOutside = () => {
      setShowInfoPopUp(false);
   };

   useClickOutside(ref, handleClickOutside);

   const onInfoPopupHandler = (event) => {
      event.stopPropagation();
      setShowInfoPopUp(!showInfoPopUp);
   };

   const onPlayVideoHandler = (videoUrl) => {
      dispatch(setShowVideoModal({ value: true, videoUrl: addAutoplayToYoutubeUrl(videoUrl) }));
   };

   return (
      <div
         style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '10px'
            // position: 'relative'
         }}
      >
         <div className="Subsection-title">{title}</div>
         <div
            style={{
               position: 'relative',
               display: 'flex',
               flexDirection: 'row',
               alignItems: 'center'
            }}
         >
            {infoPopup && (
               <>
                  <img
                     style={{ marginLeft: '10px' }}
                     src={InfoIcon}
                     className="info-icon Subsection-title"
                     onClick={(event) => onInfoPopupHandler(event)}
                  />
                  {showInfoPopUp && (
                     <div className="infoCard3" ref={ref}>
                        <div className="triangle"></div>
                        <div className="info-popup2">{infoPopup.description}</div>
                        {infoPopup && infoPopup.videoUrl && (
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
                              <div className="video-overlay" onClick={() => onPlayVideoHandler(infoPopup.videoUrl)}>
                                 {/* <img src={playIcon} className="Play-icon" /> */}
                              </div>
                           </div>
                        )}
                     </div>
                  )}
               </>
            )}
         </div>
      </div>
   );
}

FormTitle.propTypes = {
   title: PropTypes.string.isRequired,
   infoPopup: PropTypes.object
};

export default FormTitle;
