import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import './style.css';
import InfoIcon from '../../../assets/info-icon.png';
import playIcon from '../../../assets/play-icon.png';
import { setShowVideoModal } from '../../../redux/globals.slice';
import {useClickOutside, addAutoplayToYoutubeUrl} from '../../../helpers';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
   PaperProps: {
      style: {
         maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
         width: 250
      }
   }
};

function MultiSelectDropdownComponent({ style, options, label, onChange, infoPopup }) {
   const [selectedSection, setSelectedSection] = useState([]);
   const [showInfoPopUp, setShowInfoPopUp] = useState({});
   const dispatch = useDispatch();
   const ref = useRef();

   function handleClickOutside() {
      console.log('Clicked outside the element');
      setShowInfoPopUp((prevState) => {
         return {
            popUp: {}
         };
      });
   }

   useClickOutside(ref, handleClickOutside);

   const onInfoPopupHandler = (section, event) => {
      event.stopPropagation();
      if (showInfoPopUp.popUp && showInfoPopUp.popUp.id === section.id) {
         setShowInfoPopUp((prevState) => {
            return {
               popUp: {}
            };
         });
         return;
      }

      setShowInfoPopUp(() => {
         return {
            popUp: {
               id: section.id,
               active: true,
               persona: section.infoPopUp.persona,
               reasons: section.infoPopUp.reasons,
               description: section.infoPopUp.description,
               videoUrl: section.infoPopUp.videoUrl
            }
         };
      });
   };

   const handleChange = (event) => {
      const {
         target: { value }
      } = event;
      onChange(value);
      setSelectedSection(
         // On autofill we get a stringified value.
         typeof value === 'string' ? value.split(',') : value
      );
   };
   const onPlayVideoHandler = () => {
      dispatch(setShowVideoModal({ value: true, videoUrl: addAutoplayToYoutubeUrl(infoPopup.videoUrl) }));
   };

   return (
      <div className="input-section" style={style}>
         <div className="standard-input-label" style={style}>
            {label}
         </div>
         <FormControl
            sx={{
               m: 0,
               width: '390px',
               border: '0px'
            }}
         >
            <InputLabel id="demo-multiple-checkbox-label"></InputLabel>
            <Select
               labelId="demo-multiple-checkbox-label"
               id="demo-multiple-checkbox"
               multiple
               value={selectedSection}
               onChange={handleChange}
               input={<OutlinedInput label="Tag" />}
               renderValue={(selected) => selected.join(', ')}
               MenuProps={MenuProps}
               sx={{
                  border: '0.5px solid #CAD9EE;',
                  borderRadius: '10px',
                  backgroundColor: '#F1F5FB',
                  height: '100%'
               }}
            >
               {options.map((section) => (
                  <MenuItem key={section.id} value={section.title}>
                     <Checkbox checked={selectedSection.indexOf(section.title) > -1} />
                     <ListItemText primary={section.title} />
                     {section.infoPopUp?.show && <img src={InfoIcon} className="info-icon" onClick={(event) => onInfoPopupHandler(section, event)} />}
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
         <div style={{ position: 'relative' }}>
            {showInfoPopUp?.popUp?.active && (
               <div className="infoCard2" ref={ref}>
                  <div className="triangle2"></div>
                  <div className="info-popup2">
                     <span className="info-title">Persona:</span> {showInfoPopUp.popUp.persona}
                  </div>
                  <div className="info-popup2">
                     <span className="info-title">Reasons:</span> {showInfoPopUp.popUp.reasons}
                  </div>
                  {showInfoPopUp.popUp.videoUrl && (
                     <div className="Video-wrapper">
                        <iframe
                           width="100%"
                           height="100%"
                           src={showInfoPopUp.popUp.videoUrl}
                           title="YouTube video player"
                           frameborder="0"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                           allowFullScreen
                        ></iframe>
                        <div className="video-overlay" onClick={() => onPlayVideoHandler()}>
                           <img src={playIcon} className="Play-icon" />
                        </div>
                     </div>
                  )}
               </div>
            )}
         </div>
      </div>
   );
}

MultiSelectDropdownComponent.propTypes = {
   onChange: PropTypes.func.isRequired,
   style: PropTypes.object,
   options: PropTypes.array.isRequired,
   label: PropTypes.string.isRequired
};

export default MultiSelectDropdownComponent;
