import React,{useState} from 'react'
import PropTypes from 'prop-types'
import './style.css'
import QuestionHeader from '../QuestionSection/header'
import InfoIcon from '../../assets/info-icon.png'
import DropdownComponent from '../utils/dropdown'
import TextInputComponent from '../utils/textInput'
import RadioselectComponent from '../utils/radioselect'
import { countries, allRadioOptions, accomodationExpensesOptions, foodExpensesOptions } from './helpers'

function HomeEntityManager({step}) {
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

  const homeIdentity = () => {
    return (
      <div className='question-section'>
      <div className='Subsection-title'>Identity of the home  entity </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}>
        <TextInputComponent 
          onChange={(e)=> console.log(e)} 
          placeholder="Company name" 
          label="Corporate name" 
          infoPopup={{
            explanation:"Free designation of your declaration / Certificate to help you find it easily in your dashboard",
            videoUrl: "https://www.youtube.com/embed/4NKanx3JEP4?controls=0&modestbranding=1&showinfo=0&iv_load_policy=3"
          }}
        />
        <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Address" label="Address" />
        <DropdownComponent onChange={(value)=>console.log("Country ", value)} options={countries} label="Country of birth" />
        <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Post code" label="PostCode" />
        <DropdownComponent onChange={(value)=>console.log("Town / city ", value)} options={countries} label="Town / city" />
        <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Address line 2" label="Address line 2" />
        <TextInputComponent onChange={(e)=> console.log(e)} placeholder="phone number" label="Telephone number" />
        <TextInputComponent 
          onChange={(e)=> console.log(e)} 
          placeholder="your email" 
          label="Email" 
          infoPopup={{
            explanation:"Free designation of your declaration / Certificate to help you find it easily in your dashboard",
            videoUrl: "https://www.youtube.com/embed/4NKanx3JEP4?controls=0&modestbranding=1&showinfo=0&iv_load_policy=3"
          }}
        />
      </div>
   </div>
    )
  }

  const legalFormOfHomeEntity = () => {
    return (
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
    )
  }

  const directorsInformation = () => {
    return (
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
        <DropdownComponent onChange={(value)=>console.log("Town / City of birth ", value)} options={countries} label="Town / City of birth" />
        <TextInputComponent onChange={(e)=> console.log(e)} placeholder="Email" label="Town / City of birth" />
        <DropdownComponent onChange={(value)=>console.log("Country ", value)} options={countries} label="Country of birth" />
      </div>
   </div>
    )
  }

  const financialGuarantee = () => {
    return(
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
    )
  }

  const typeOfPosting = () => {
    return (
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
    )
  }

  const serviceSites = () => {
    return (
      <div className='question-section'>
      <div className='Subsection-title'>Service Sites</div>
      <div className='standard-input-label' style={{marginTop: "20px"}}>Where will the posted workers work?</div>
      {
        radioOptions.map((item, index) => {
          return (
            <RadioselectComponent item={item} onChange={onRadioHandler} />
          )
        }
        )
      }
   </div>
    )
  }

  const travelExpenses = () => {
    return (
      <div className='question-section'>
      <div className='Subsection-title'>Travel expenses </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}>
          <div className='question-section'>
              <div className='standard-input-label' style={{marginTop: "20px"}}>Travel Expenses Process</div>
              {
                foodExpenseOptions.map((item, index) => {
                  return (
                    <RadioselectComponent item={item} onChange={onChangeFoodExpensesHandler} />
                  )
                }
                )
              }
          </div>
        <TextInputComponent 
        onChange={(e)=> console.log(e)} 
        placeholder="Travel Expenses Budget" 
        label="Travel Expenses Budget"
         />
      </div>
   </div>
    )
  }

  const livingFoodExpenses = () => {
    return (
      <div className='question-section'>
      <div className='Subsection-title'>Living (food) expenses </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}>
          <div className='question-section'>
              <div className='standard-input-label' style={{marginTop: "20px"}}>Food Expenses Process</div>
              {
                foodExpenseOptions.map((item, index) => {
                  return (
                    <RadioselectComponent item={item} onChange={onChangeFoodExpensesHandler} />
                  )
                }
                )
              }
          </div>
        <TextInputComponent 
        onChange={(e)=> console.log(e)} 
        placeholder="Food Expenses Budget" 
        label="Food Expenses Budget"
         />
      </div>
   </div>
    )
  }

  const accomodationExpenses = () => {
    return (
      <div className='question-section'>
      <div className='Subsection-title'>Accommodation Expenses </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}>
          <div className='question-section'>
              <div className='standard-input-label' style={{marginTop: "20px"}}>Accommodation Expenses Process </div>
              {
                accomodationExpenseOptions.map((item, index) => {
                  return (
                    <RadioselectComponent item={item} onChange={accomodationExpenseHandler} />
                  )
                }
                )
              }
          </div>
        <TextInputComponent 
        onChange={(e)=> console.log(e)} 
        placeholder="Accommodation Expenses Budget" 
        label="Accommodation Expenses Budget "
         />
      </div>
   </div>
    )
  }

  const StepRenderer = () => {
    if(step === 1){
      return homeIdentity()
    } else if(step === 2){
      return  legalFormOfHomeEntity()
    } else if(step === 3){
      return directorsInformation()
    } else if (step === 4){
      return financialGuarantee()
    } else if (step === 5){
      return typeOfPosting()
    } else if (step === 6){
      return serviceSites()
    } else if (step === 7){
      return travelExpenses()
    } else if (step === 8){
      return livingFoodExpenses()
    } else if (step === 9){
      return accomodationExpenses()
    }
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
{
  StepRenderer()
}


       {/* <div className='question-section'>
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
       </div> */}
      
    </div>
  )
}

HomeEntityManager.propTypes = {}

export default HomeEntityManager
