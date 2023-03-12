import React,{useState} from 'react'
import PropTypes from 'prop-types'
import './style.css'
import QuestionHeader from '../QuestionSection/header'
import InfoIcon from '../../assets/info-icon.png'
import DropdownComponent from '../utils/dropdown'
import TextInputComponent from '../utils/textInput'
import RadioselectComponent from '../utils/radioSelect'

const allRadioOptions = [
  {
    title: 'Direct payment by the employer',
    isSelected: false
  },
  {
    title: 'Reimbursement of costs paid in advance by the worker',
    isSelected: false
  },
  {
    title: 'Payment of a lump sum ',
    isSelected: false
  },
  {
    title: 'Other payment arrangements',
    isSelected: false
  },
]

const dummyOptions = [
  {
    title: 'Try this out',
    label: 'Try this out'
  },
  {
    title: 'Wanna test',
    label: 'Wanna test'
  },
  {
    title: 'Optional figures',
    label: 'Optional figures'
  },
]

function HomeEntityManager(props) {
  const [radioOptions, setRadioOptions] = useState(allRadioOptions)
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  }

  const onRadioHandler = (element) => {
    setRadioOptions(radioOptions.map((item, index) => {
      if(element.title === item.title){
        return {
          ...item,
          isSelected: true
        }
      }
      return {
        ...item,
        isSelected: false
      }
    }))
  }

  return (
    <div className='QuestionSection-wrapper'>
      <QuestionHeader
        title='Home Entity Information'
        subTitle='Declartion - Mobility of Employee Withing The Same Group - Edition'
       />

       {/* <div className='input-section'>
          <div className='standard-input-label'>Name</div>
          <div className='standard-input'>
            <input className='input-field' placeholder='Enter your name' />
            <img src={InfoIcon} className="info-icon" />
          </div>
       </div> */}

       <div className='question-section'>
          <div className='Subsection-title'>Identity of the home  entity </div>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
            <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Company name" label="Corporate name" />
            <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Address" label="Address" />
            <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Country" label="Country" />
            <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Post code" label="PostCode" />
            <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Town or city" label="Town/City" />
            <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Address line 2" label="Address line 2" />
            <TextInputComponent onChange={(e)=> console.log(e)} placeholder="phone number" label="Telephone number" />
            <TextInputComponent onChange={(e)=> console.log(e)} placeholder="your email" label="Email" />
          </div>
       </div>
       <div className='question-section'>
          <div className='Subsection-title'>Registration and legal form of the entity</div>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
            <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Legal form" label="Legal form" />
            <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Bussiness register" label="Bussiness register" />
            <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Reference of the registration" label="Reference of the registration" />
          </div>
       </div>
       <div className='question-section'>
          <div className='Subsection-title'>Director’s information </div>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
            <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Last name" label="Last name" />
            <TextInputComponent onChange={(e)=> console.log(e)} placeholder="First name" label="First name" />
            <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Date of birth" label="Date of birth" />
            <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Town of birth" label="Town / City of birth" />
            <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Email" label="Town / City of birth" />
            <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Country of birth" label="Country of birth" />
          </div>
       </div>
       <div className='question-section'>
          <div className='Subsection-title'>Financial guarantee body </div>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
            <TextInputComponent 
            onChange={(e)=> console.log(e)} 
            placeholder="Identity of the body from which a financial guarantee has been  obtained" 
            label="Identity of the body from which a financial guarantee has been  obtained"
            style={{  width: '98%'}} />
          </div>
       </div>
       <div className='question-section'>
          <div className='Subsection-title'>Type of posting </div>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
            <TextInputComponent 
              onChange={(e)=> console.log(e)} 
              placeholder="Applicable social security legislation " 
              label="Applicable social security legislation " 
            />
            <TextInputComponent 
              onChange={(e)=> console.log(e)} 
              placeholder="01 Feb 2023" 
              label="Date of contract signature or start of the working relationship " 
            />
            <TextInputComponent 
              onChange={(e)=> console.log(e)} 
              placeholder="true / false" 
              label="Reasoned statement in the context of a long-term posting " 
            />
            <TextInputComponent 
              onChange={(e)=> console.log(e)} 
              placeholder="" 
              label="Reason for long-term posting" 
            />
            <TextInputComponent 
              onChange={(e)=> console.log(e)} 
              placeholder="" 
              label="Posting held in France" 
            />
            <TextInputComponent 
              onChange={(e)=> console.log(e)} 
              placeholder="Executive" 
              label="Professional qualification " 
            />
            <TextInputComponent 
              onChange={(e)=> console.log(e)} 
              placeholder="Executive" 
              label="Professional qualification " 
            />
            <TextInputComponent 
              onChange={(e)=> console.log(e)} 
              placeholder="ie £300" 
              label="Gross hourly rate of pay applied during the posting (€) " 
            />
            //TODO: Add a radio button, single
            <RadioselectComponent item={{title: 'Unable ?', isSelected: true}} onChange={onRadioHandler} />
          </div>
       </div>

       <div className='question-section'>
          <div className='Subsection-title'>Foreign Company</div>
          <DropdownComponent label="Company Autocompletion" options={dummyOptions} onChange={(e)=>console.log("WORKED ", e)} />
       </div>


       <div className='question-section'>
          <div className='Subsection-title'>Foreign Company</div>
          {
            radioOptions.map((item, index) => {
              return (
                <RadioselectComponent item={item} onChange={onRadioHandler} />
              )
            }
            )
          }
       </div>
      
    </div>
  )
}

HomeEntityManager.propTypes = {}

export default HomeEntityManager
