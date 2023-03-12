import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import BackIcon from '../../assets/back-icon.png'
import QuestionSection from '../QuestionSection'
import EmployeeForm from '../Forms/employee'
import HomeEntityManager from '../Forms/homeEntityManager'
import HostEntityManager from '../Forms/hostEntityManager'

const formsList = [
  "employee",
  "hostEntity",
  "homeEntity",
]
function MainSection({activeForm}) {

  const questionRouter = (question) => {
    if(activeForm === 'employee'){
      console.log("rendering EmployeeForm")
      return (
        <EmployeeForm />
      )
    } else if(activeForm === 'hostEntity') {
      console.log("rendering hostEntity")
      return (
      <HostEntityManager />
      )
    } else if(activeForm === 'homeEntity') {
      console.log("rendering homeEntity")
      return (
      <HomeEntityManager />
      )
    } else {
      console.log("rendering default")
      return (
      <HomeEntityManager />
      )
    }
  }
  return (
    <div className='mainSection-wrapper'>
    {
      questionRouter()
    }
      <div className='nav-section'>
        <div className='back-btn'>
          <img src={BackIcon} className="back-icon" />
        </div>
        <div className='next-btn'>
          <div>Next</div>
        </div>
      </div>
    </div>
  )
}

MainSection.propTypes = {}

export default MainSection
