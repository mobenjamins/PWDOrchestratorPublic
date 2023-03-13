import React,{useState} from 'react'
import PropTypes from 'prop-types'
import './style.css'
import QuestionHeader from '../QuestionSection/header'
import InfoIcon from '../../assets/info-icon.png'
import DropdownComponent from '../utils/dropdown'
import TextInputComponent from '../utils/textInput'
import RadioselectComponent from '../utils/radioSelect'

const activityLevelOptions = [
  {
    title: 'Level 1 - Accomodation and food service activities',
    isSelected: false
  },
  {
    title: 'Level 2 - Acommod',
    isSelected: false
  },
  {
    title: 'Level 3 - Accounting, bookkeeping  and auditing activities.  Tax consultancy',
    isSelected: false
  },
  {
    title: 'Level 4 - Activities of amusement  parks and theme parks',
    isSelected: false
  },
]
const allRadioOptions = [
  {
    title: 'On the premise of the customer or Recipient of the service?',
    isSelected: false
  },
  {
    title: 'Somewhere else',
    isSelected: false
  },
  {
    title: 'Payment of a lump sum',
    isSelected: false
  },
  {
    title: 'Other payment arrangements',
    isSelected: false
  },
]

const accomodationExpensesOptions =  [{
    title: 'Direct payment by the employer',
    isSelected: false
  },
  {
    title: 'Reimbursement of costs paid in advance by the worker',
    isSelected: false
  },
  {
    title: 'Payment of a lump sum',
    isSelected: false
  },
  {
    title: 'Other payment arrangements',
    isSelected: false
  },
]

const foodExpensesOptions =  [{
    title: 'Direct payment by the employer',
    isSelected: false
  },
  {
    title: 'Reimbursement of costs paid in advance by the worker',
    isSelected: false
  },
  {
    title: 'Payment of a lump sum',
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

function HostEntityManager(props) {
  const [radioOptions, setRadioOptions] = useState(allRadioOptions)
  const [selectedValue, setSelectedValue] = useState("");
  const [foodExpenseOptions, setFoodExpenseOptions] = useState(foodExpensesOptions)
  const [accomodationExpenseOptions, setAccomodationExpenseOptions] = useState(accomodationExpensesOptions)

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

  const accomodationExpenseHandler = (element) => {
    setAccomodationExpenseOptions(accomodationExpenseOptions.map((item, index) => {
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

  const onChangeFoodExpensesHandler = (element) => {
    setFoodExpenseOptions(foodExpensesOptions.map((item, index) => {
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
        title='Host Entity Information'
        subTitle='Declartion - Mobility of Employee Withing The Same Group - Edition'
       />

       <div className='question-section'>
          <div className='Subsection-title'>Identity of the host  Company </div>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
            <DropdownComponent onChange={(value)=>console.log("Country ", value)} options={countries} label="Country" />
            <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Intra-community VAT number" label="Intra-community VAT number" />
            <TextInputComponent onChange={(e)=> console.log(e)} placeholder="name" label="Corporate name" />
            <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Address" label="Address" />
            <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Post code" label="PostCode" />
            <DropdownComponent onChange={(value)=>console.log("Town / city ", value)} options={countries} label="Town / city" />
            <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Address line 2" label="Address line 2" />
            <TextInputComponent onChange={(e)=> console.log(e)} placeholder="your email" label="Email" />
          </div>
       </div>
       <div className='question-section'>
          <div className='Subsection-title'>Representative in host country </div>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
            <TextInputComponent 
            onChange={(e)=> console.log(e)} 
            placeholder="Please specify..." 
            label="Please specify the duties of the company's representative for this service." 
            style={{  width: '98%'}}
            />
            <TextInputComponent onChange={(e)=> console.log(e)} placeholder="2" label="SIRET number" />
            <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Corporate name" label="Corporate name" />
            <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Address" label="Address" />
            <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Post code" label="PostCode" />
            <DropdownComponent onChange={(value)=>console.log("Town / city ", value)} options={countries} label="Town / city" />
            <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Address line 2" label="Address line 2" />
          </div>
       </div>
       <div className='question-section'>
          <div className='Subsection-title'>Means for contacting the representative in the host country </div>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
            <TextInputComponent onChange={(e)=> console.log(e)} placeholder="0712637293" label="Telephone number" />
            <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Email@email.domain" label="Email" />
          </div>
       </div>
       <div className='question-section'>
          <div className='Subsection-title'>Place where the documents, which must be kept available  for the inspection services, are stored</div>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
            <TextInputComponent 
            onChange={(e)=> console.log(e)} 
            placeholder="At the place where the  services is performed" 
            label="Location of documents "
            style={{  width: '98%'}} />
          </div>
       </div>
       <div className='question-section'>
          <div className='Subsection-title'>Dates and place of service</div>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
            <TextInputComponent 
              onChange={(e)=> console.log(e)} 
              placeholder="04 Feb 2023" 
              label="Service start date " 
            />
            <TextInputComponent 
              onChange={(e)=> console.log(e)} 
              placeholder="01 Feb 2023" 
              label="Estimated end date" 
            />
            <TextInputComponent 
              onChange={(e)=> console.log(e)} 
              placeholder="2" 
              label="SIREN number" 
            />
            <TextInputComponent 
              onChange={(e)=> console.log(e)} 
              placeholder="2" 
              label="SIRET number" 
            />
            <TextInputComponent 
              onChange={(e)=> console.log(e)} 
              placeholder="Hosting company 1" 
              label="Corporate name" 
            />
            <TextInputComponent 
              onChange={(e)=> console.log(e)} 
              placeholder="Address line 1" 
              label="Address" 
            />
            <TextInputComponent 
              onChange={(e)=> console.log(e)} 
              placeholder="6400" 
              label="Postcode" 
            />
            <DropdownComponent
              onChange={(value)=>console.log("Town / city ", value)}
              options={countries}
              label="Town / city"
            />
            <TextInputComponent 
              onChange={(e)=> console.log(e)} 
              placeholder="Address line 2" 
              label="Address line 2" 
            />
            <TextInputComponent 
              onChange={(e)=> console.log(e)} 
              placeholder="4576456743576" 
              label="NAF code" 
            />
            <TextInputComponent 
              onChange={(e)=> console.log(e)} 
              placeholder="False" 
              label="Collective accommodation" 
            />
            <TextInputComponent 
              onChange={(e)=> console.log(e)} 
              placeholder="Address" 
              label="Address type" 
            />
            <TextInputComponent 
              onChange={(e)=> console.log(e)} 
              placeholder="23646" 
              label="Postcode" 
            />
            <DropdownComponent onChange={(e)=>console.log(e)} options={countries} label="Town / City" />
            <TextInputComponent 
              onChange={(e)=> console.log(e)} 
              placeholder="Address line 2" 
              label="Address line 2" 
            />
          </div>
       </div>
       <div className='question-section'>
          <div className='Subsection-title'>Information about the service </div>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
            <DropdownComponent 
              onChange={(e)=>console.log(e)} 
              options={activityLevelOptions} 
              label="Main activity (4 level) " 
              style={{  width: '100%'}}
              />
            <TextInputComponent 
              onChange={(e)=> console.log(e)} 
              placeholder=" true / false" 
              label="Use of hazardous process or equipment "
              style={{  width: '98%'}} 
            />
            <TextInputComponent 
              onChange={(e)=> console.log(e)} 
              placeholder=" reason" 
              label="If yes, please specify"
              style={{  width: '98%'}} 
            />
            <TextInputComponent 
              onChange={(e)=> console.log(e)} 
              placeholder=" 09:00:00" 
              label="Work start time"
            />
            <TextInputComponent 
              onChange={(e)=> console.log(e)} 
              placeholder=" 09:00:00" 
              label="Work end time"
            />
            <TextInputComponent 
              onChange={(e)=> console.log(e)} 
              placeholder="2" 
              label="Number of rest days per week"
            />
            <TextInputComponent 
              onChange={(e)=> console.log(e)} 
              placeholder="True / false" 
              label="Other types of working hour arrangemnets"
            />

          </div>
       </div>      
    </div>
  )
}

HostEntityManager.propTypes = {}

export default HostEntityManager
