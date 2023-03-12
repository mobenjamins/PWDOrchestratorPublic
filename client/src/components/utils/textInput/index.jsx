import React,{useState} from 'react'
import PropTypes from 'prop-types'
import './style.css'
import InfoIcon from '../../../assets/info-icon.png'

function TextInputComponent({onChange, label, placeholder, defaultValue, style}) {
  const [value, setValue] = useState(defaultValue || '');

  const handleSelectChange = (event) => {
    setValue(event.target.value);
    onChange(event.target.value);
  }

  return (
        <div className='input-section' style={style}>
            <div className='standard-input-label'>{label}</div>
            <div className='standard-input'>
              <input value={value} className='input-field' placeholder={placeholder} onChange={(e)=>handleSelectChange(e)} />
              <img src={InfoIcon} className="info-icon" />
            </div>
        </div>
  )
}

TextInputComponent.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string
}

export default TextInputComponent
