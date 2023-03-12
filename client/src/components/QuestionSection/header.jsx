import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

function QuestionHeader({title, subTitle}) {
  return (
      <div className='question-header'>
        <div className='question-title'>{title}</div>
        <div className='question-subtitle'>{subTitle}</div>
      </div>
  )
}

QuestionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
}

export default QuestionHeader
