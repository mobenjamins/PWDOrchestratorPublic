import React,{useState} from 'react'
import PropTypes from 'prop-types'
import './style.css'
import QuestionHeader from '../QuestionSection/header'
import InfoIcon from '../../assets/info-icon.png'
import DropdownComponent from '../utils/dropdown'
import TextInputComponent from '../utils/textInput'
import RadioselectComponent from '../utils/radioSelect'

const countries = [
  {value: 'kenya', title:"Kenya"},
  {value: 'uganda', title:"Uganda"},
  {value: 'tanzania', title:"Tanzania"},
  {value: 'rwanda', title:"Rwanda"},
  {value: 'burundi', title:"Burundi"},
  {value: 'somalia', title:"Somalia"},
  {value: 'ethiopia', title:"Ethiopia"},
  {value: 'sudan', title:"Sudan"},
  {value: 'south sudan', title:"South Sudan"},
  {value: 'eritrea', title:"Eritrea"},
  {value: 'djibouti', title:"Djibouti"}
]
function EmployeeForm(props) {

  return (
    <div className='QuestionSection-wrapper'>
      <QuestionHeader
        title='Employee Information'
        subTitle='Declartion - Mobility of Employee Withing The Same Group - Edition'
       />
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
    </div>
  )
}

EmployeeForm.propTypes = {}

export default EmployeeForm
