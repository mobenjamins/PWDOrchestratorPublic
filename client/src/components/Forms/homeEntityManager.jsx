import React,{useState} from 'react'
import PropTypes from 'prop-types'
import './style.css'
import QuestionHeader from '../QuestionSection/header'
import InfoIcon from '../../assets/info-icon.png'
import dropDownIcon from '../../assets/dropdown-icon.png'

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
          <div className='Subsection-title'>Foreign Company</div>
          <div className='input-section'>
              <div className='standard-input-label'>Company Autocompletion</div>
              <div className='standard-input standard-select' style={{width: "500px"}}>
                <select value={selectedValue} className='standard-input-select' onChange={handleSelectChange}>
                  <option value="">-- Select an option --</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
          </div>
       </div>


       <div className='question-section'>
          <div className='Subsection-title'>Foreign Company</div>
          {
            radioOptions.map((item, index) => {
              return (
                <div key={index} className='radio-inputs' onClick={()=> onRadioHandler(item)}>
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
                        }}>Direct payment by the employer</div>
                      </div>
                    </div>
              )
            }
            )
          }
          {/* <div className='radio-inputs'>
            <div className='radiio-question'>
              <div className='radio-input'>
                <div className='radio-unput-selected' />
              </div>
              <div className='radio-question-title'>Direct payment by the employer</div>
            </div>
          </div> */}
       </div>
      
    </div>
  )
}

HomeEntityManager.propTypes = {}

export default HomeEntityManager
