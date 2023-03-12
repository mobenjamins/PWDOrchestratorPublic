import React,{useState} from 'react'
import PropTypes from 'prop-types'
import './style.css'

function RadioselectComponent({item, onChange}) {

  const onRadioHandler = (item) => {
    onChange(item);
  }

  return (
      <div key={item.title} className='radio-inputs' onClick={()=> onRadioHandler(item)}>
        <div className='radiio-question'>
          <div className='radio-input' style={{
          borderColor: item.isSelected ? '#F48C07' : '#70737A'
        }}>
            <div className='radio-unput-selected' style={{
            display: item.isSelected ? 'flex' : 'none',
          }}/>
          </div>
          <div className='radio-question-title' style={{
          color: item.isSelected ? '#212529' : '#70737A'
          }}>{item.title}</div>
        </div>
    </div>
  )
}

RadioselectComponent.propTypes = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

export default RadioselectComponent
