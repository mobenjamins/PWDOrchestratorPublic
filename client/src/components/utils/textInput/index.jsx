import React,{useState} from 'react'
import PropTypes from 'prop-types'
import './style.css'
import InfoIcon from '../../../assets/info-icon.png'
import playIcon from '../../../assets/play-icon.png'

function TextInputComponent({onChange, label, placeholder, defaultValue, style, infoPopup, errorText}) {
  const [value, setValue] = useState(defaultValue);
  const [showInfoPopUp, setShowInfoPopUp] = useState(false);

  const handleSelectChange = (event) => {
    setValue(event.target.value);
    onChange(event.target.value);
  }

  const onInfoPopupHandler = () => {
    setShowInfoPopUp(!showInfoPopUp)
  }

  return (
        <div className='input-section' style={style}>
            <div className='standard-input-label'>{label} {(errorText && errorText.error) || (errorText && errorText.message) ? (<span style={{color: errorText.error ? 'orangered' : 'green'}}>- {errorText.message}</span>): null}</div>
            <div className='standard-input'>
              <input style={{color: defaultValue ? '#000000': 'inherit'}} value={defaultValue} className='input-field' placeholder={placeholder} onChange={(e)=>handleSelectChange(e)} />
              {infoPopup && <img src={InfoIcon} className="info-icon" onClick={()=>onInfoPopupHandler()} /> }
              {
                showInfoPopUp && (
                  <div className='infoCard'>
                    <div className='triangle'></div>
                    <div className='info-popup'>
                    {infoPopup.explanation}
                    </div>
                    <div className='Video-wrapper'>
                      <img src={playIcon} className='Play-icon' />
                    </div>
                  </div>
                )
              }
            </div>
        </div>
  )
}

TextInputComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  infoPopup: PropTypes.object
}

export default TextInputComponent
