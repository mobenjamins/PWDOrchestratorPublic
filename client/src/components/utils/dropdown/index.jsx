import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

function DropdownComponent({ options, onChange, label, style, defaultValue }) {
   const [selectedValue, setSelectedValue] = useState(defaultValue ? defaultValue : options[0]?.value);

   const handleSelectChange = (event) => {
      setSelectedValue(event.target.value);
      const selected = options.find((option) => option.value === event.target.value);
      onChange(selected);
   };

   return (
      <div className="input-section" style={style}>
         <div className="standard-input-label">{label}</div>
         <div className="standard-select2">
            <select value={selectedValue} className="standard-input-select" onChange={handleSelectChange}>
               {options.map((option, index) => {
                  return (
                     <option key={index} value={option.value}>
                        {option.title}
                     </option>
                  );
               })}
            </select>
         </div>
      </div>
   );
}

DropdownComponent.propTypes = {
   options: PropTypes.array.isRequired,
   onChange: PropTypes.func.isRequired,
   label: PropTypes.string.isRequired,
   defaultValue: PropTypes.any
};

export default DropdownComponent;
