import React, { useState, useRef, useEffect } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
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
import { useClickOutside, addAutoplayToYoutubeUrl } from '../../../helpers';

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

function DatePickerComponent({ style, label, onChange, infoPopup, defaultValue }) {
   const [selectedDate, setSelectedDate] = useState('');
   const [showInfoPopUp, setShowInfoPopUp] = useState({});
   const dispatch = useDispatch();
   const ref = useRef();

   useEffect(() => {
      console.log('defaultValue', {
         defaultValue,
         converted: new Date(defaultValue.value),
         converted2: moment(defaultValue.rawDate)
      });

      setSelectedDate(defaultValue.rawDate);
   }, [defaultValue]);

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
      setShowInfoPopUp(!showInfoPopUp);
   };

   const onChangeHandler = (event) => {
      const data = moment(event.$d).format('D MMMM YYYY');
      setSelectedDate(event);
      onChange(event);
   };
   const onPlayVideoHandler = () => {
      dispatch(setShowVideoModal({ value: true, videoUrl: addAutoplayToYoutubeUrl(infoPopup.videoUrl) }));
   };

   return (
      <div className="input-section" style={style}>
         <div className="standard-input-label" style={{ ...style, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            {label}
         </div>
         <DatePicker
            value={selectedDate}
            // format="DD/MM/YYYY"
            onChange={(newValue) => onChangeHandler(newValue)}
            sx={{
               m: 0,
               width: '390px',
               border: '0.5px solid #CAD9EE;',
               borderRadius: '10px',
               backgroundColor: '#F1F5FB',
               height: '100%',
               zIndex: 0
            }}
         />
      </div>
   );
}

DatePickerComponent.propTypes = {
   onChange: PropTypes.func.isRequired,
   style: PropTypes.object,
   label: PropTypes.string.isRequired
};

export default DatePickerComponent;
