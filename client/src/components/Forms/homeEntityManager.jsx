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
          <div className='input-section'>
              <div className='standard-input-label'>Company Autocompletion</div>
              <div className='standard-input'>
                <input className='input-field' placeholder='Comapny autocompletion ( via name of the foreign )' />
                <img src={InfoIcon} className="info-icon" />
              </div>
          </div>
       </div>

       <div className='question-section'>
          <div className='Subsection-title'>Identity of the home  entity </div>
          <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Comapny autocompletion222 ( via name of the foreign )" label="Company Autocompletion 22" />
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
