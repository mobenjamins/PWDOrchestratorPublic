import React, { useState } from 'react';
import PropTypes from 'prop-types';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

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

function MultiSelectDropdownComponent({ style, options, label, onChange }) {
   const [selectedSection, setSelectedSection] = useState([]);

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
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
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
