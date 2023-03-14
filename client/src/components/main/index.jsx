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
  const [step, setStep] = React.useState(0)

  const nextStepHandler = () => {
    console.log("nextStepHandler")
    setStep(step + 1)
  }
  const backStepHandler = () => {
    setStep(step - 1)
  }

  const questionRouter = (question) => {
    if(activeForm === 'employee'){
      console.log("rendering EmployeeForm")
      return (
        <EmployeeForm />
      )
    } else if(activeForm === 'hostEntity') {
      console.log("rendering hostEntity")
      return (
      <HostEntityManager step={step} />
      )
    } else if(activeForm === 'homeEntity') {
      console.log("rendering homeEntity")
      return (
      <HomeEntityManager step={step} />
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
        <div className='back-btn' onClick={()=> backStepHandler()} style={{display: step === 0 ? 'none' : 'flex'}}>
          <img src={BackIcon} className="back-icon" />
        </div>
        <div className='next-btn' onClick={()=>nextStepHandler()} style={{display: step === 4 ? 'none' : 'flex'}}>
          <div>Next</div>
        </div>
      </div>
    </div>
  )
}

MainSection.propTypes = {}

export default MainSection
