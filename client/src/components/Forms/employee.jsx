import React,{useState} from 'react'
import PropTypes from 'prop-types'
import './style.css'
import QuestionHeader from '../QuestionSection/header'
import InfoIcon from '../../assets/info-icon.png'
import DropdownComponent from '../utils/dropdown'
import TextInputComponent from '../utils/textInput'
import RadioselectComponent from '../utils/radioSelect'
import {countries} from './helpers'

function EmployeeForm({step}) {

  const personalInformation = () => {
    return (
      <div className='question-section'>
      <div className='Subsection-title'>Personal Information </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}>
        <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Gender" label="gender" />
        <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Doe" label="Last name" />
        <TextInputComponent onChange={(e)=> console.log(e)} placeholder="John" label="John" />
        <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Date of birth" label="13 Jun 1990" />
        <DropdownComponent onChange={(value)=>console.log("Town / city ", value)} options={countries} label="Town / city" />
        <DropdownComponent onChange={(value)=>console.log("Country ", value)} options={countries} label="Country of birth" />
        <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Italy" label="Nationality" />
      </div>
   </div>
    )
  }

  const addressInformation = () => {
    return (
      <div className='question-section'>
      <div className='Subsection-title'>Address</div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}>
        <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Address" label="Address" />
        <DropdownComponent onChange={(value)=>console.log("Country ", value)} options={countries} label="Country" />
        <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Post code" label="PostCode" />
        <DropdownComponent onChange={(value)=>console.log("Town / city ", value)} options={countries} label="Town / city" />
        <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Address line 2" label="Address line 2" />
      </div>
   </div>
    )
  }

  const StepRenderer = () => {
    if(step === 1){
      return personalInformation()
    } else if(step === 2){
      return  addressInformation()
    }
  }

  return (
    <div className='QuestionSection-wrapper'>
      <QuestionHeader
        title='Employee Information'
        subTitle='Declaration - Mobility of Employee Withing The Same Group - Edition'
       />
        {StepRenderer()}
    </div>
  )
}

EmployeeForm.propTypes = {
  step: PropTypes.number.isRequired
}

export default EmployeeForm
