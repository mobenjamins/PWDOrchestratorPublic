import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import PropTypes from 'prop-types';
import './style.css';
import { ActivityLevelOneOptions } from '../../Forms/helpers';

function AutoCompleteDropdownComponent({ options, onChange, label, style, defaultValue }) {
   const [selectedValue, setSelectedValue] = useState(defaultValue);

   const handleSelectChange = (value) => {
      setSelectedValue(value);
      onChange(value);
   };

   return (
      <div className="input-section" style={style}>
         <div className="standard-input-label">{label}</div>
         <div className="standard-select-autocomplete" style={style}>
            <Autocomplete
               onChange={(event, newValue) => handleSelectChange(newValue)}
               disableClearable
               disablePortal
               id="combo-box-demo"
               options={ActivityLevelOneOptions}
               sx={{ width: style.width, paddingRight: '0px !important' }}
               renderInput={(params) => <TextField {...params} label="" />}
            />
         </div>
      </div>
   );
}

AutoCompleteDropdownComponent.propTypes = {
   options: PropTypes.array.isRequired,
   onChange: PropTypes.func.isRequired,
   label: PropTypes.string.isRequired
};

export default AutoCompleteDropdownComponent;
