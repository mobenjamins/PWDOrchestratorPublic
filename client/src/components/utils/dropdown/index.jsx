import React,{useState} from 'react'
import PropTypes from 'prop-types'
import './style.css'

function DropdownComponent({options, onChange, label}) {
  const [selectedValue, setSelectedValue] = useState(options[0].value);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    onChange(event.target.value);
  }

  return (
        <div className='input-section'>
          <div className='standard-input-label'>{label}</div>
          <div className='standard-select' >
            <select value={selectedValue} className='standard-input-select' onChange={handleSelectChange}>
            {
              options.map((option, index) => {
                return <option key={index} value={option.value}>{option.label}</option>
              }
            )
            }
            </select>
        </div>
      </div>
  )
}

DropdownComponent.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

export default DropdownComponent
