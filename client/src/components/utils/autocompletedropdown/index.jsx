import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import PropTypes from 'prop-types';
import './style.css';
import { ActivityLevelOneOptions, occupations } from '../../Forms/helpers';

function AutoCompleteDropdownComponent({ options, onChange, label, style, defaultValue, disabled }) {
   // const [selectedValue, setSelectedValue] = useState(defaultValue);

   const handleSelectChange = (value, custom) => {
      // setSelectedValue(value);
      onChange(value);
   };

   // useEffect(() => {
   //    setSelectedValue(defaultValue);
   // }, [defaultValue]);

   return (
      <div className="input-section" style={style}>
         <div className="standard-input-label">{label}</div>
         <div className="standard-select-autocomplete" style={style}>
            <Autocomplete
               isOptionEqualToValue={(option, value) => option === value}
               value={defaultValue}
               disabled={disabled}
               onChange={(event, newValue) => handleSelectChange(newValue)}
               disableClearable
               disablePortal
               // freeSolo={true}
               id="combo-box-demo"
               options={options}
               sx={{ width: style.width, paddingRight: '0px !important' }}
               renderInput={(params) => <TextField onChange={(e) => handleSelectChange(e.target.value, true)} {...params} label="" />}
            />
         </div>
      </div>
   );
}

AutoCompleteDropdownComponent.propTypes = {
   options: PropTypes.array.isRequired,
   onChange: PropTypes.func.isRequired,
   label: PropTypes.string.isRequired,
   disabled: PropTypes.bool
};

export default AutoCompleteDropdownComponent;
