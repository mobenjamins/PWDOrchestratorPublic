import React,{useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import PropTypes from 'prop-types'
import './style.css'
import QuestionHeader from '../QuestionSection/header'
import InfoIcon from '../../assets/info-icon.png'
import DropdownComponent from '../utils/dropdown'
import TextInputComponent from '../utils/textInput'
import RadioselectComponent from '../utils/radioSelect'
import { sirenAPI } from '../../axios/api'
import {updateHostEntityForm} from '../../redux/forms/forms.slice'

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

function HostEntityManager({step}) {
  const dispatch = useDispatch()
  const [errorText, setErrorText] = useState({
    siret:{
      error: false,
       message: ''
      },
    siret2:{
      error: false,
       message: ''
      }
    });
  const [foodExpenseOptions, setFoodExpenseOptions] = useState(foodExpensesOptions)
  const [accomodationExpenseOptions, setAccomodationExpenseOptions] = useState(accomodationExpensesOptions)
  const [companyData, setCompanyData] = useState({
    corporateName: '',
    siren: '',
    address: '',
  })
  const {hostEntityForm} = useSelector(state => state.forms)
  const [hostForm, setHostEntityForm] = useState(hostEntityForm)

  const onChangeSiretHandler = async (siret, section, inputKey) => {
    try {
      const response = await sirenAPI.get(`/siret/${siret}`)

      setHostEntityForm({
        ...hostForm,
        [section]: {
          ...hostForm[section],
          [inputKey]: siret,
          siren: response.data.etablissement.siren,
          corporateName: response.data.etablissement.uniteLegale.denominationUniteLegale,
          address: response.data.etablissement.adresseEtablissement.complementAdresseEtablissement,
        }
      })
      if(section === 'representativeInHostCountry'){
        setErrorText({
          ...errorText,
          siret2: {
            error: false,
            message: 'Siret is Valid'
          }
      })

    } else {
      setErrorText({
        ...errorText,
        siret: {
          error: false,
          message: 'Siret is Valid'
        }
      })
    }

    console.log(companyData)
    return
    } catch (error) {
        if(section === 'representativeInHostCountry'){
          setErrorText({
            ...errorText,
            siret2: {
              error: true,
              message: 'Siret is number not found'
            }
        })
  
      } else {
        setErrorText({
          ...errorText,
          siret: {
            error: true,
            message: 'Siret number not found'
          }
        })
      }
        return
      }
  }

  const onInPutHandler = (value, section, inputKey) => {
    console.log({
      hostForm
    })
    if(inputKey === 'siret' && value.length === 14){
      onChangeSiretHandler(value, section, inputKey)
    }
    if(inputKey === 'siret' && value.length < 14){
      setErrorText({
        ...errorText,
        siret: {
          error: true,
          message: 'Siret must be 14 characters long'
        }
      })
    }

    if(section === 'representativeInHostCountry' && value.length === 14){
      onChangeSiretHandler(value, section, inputKey)
    }
    if(section === 'representativeInHostCountry' && inputKey === 'siret' && value.length < 14){
      setErrorText({
        ...errorText,
        siret2: {
          error: true,
          message: 'Siret must be 14 characters long'
        }
      })
    }

    setHostEntityForm({
      ...hostForm,
      [section]: {
        ...hostForm[section],
        [inputKey]: value
      }
    })

    // dispatch(updateHostEntityForm(
    //   {
    //     ...hostEntityForm,
    //     [section]: {
    //       ...hostEntityForm[section],
    //       [inputKey]: value
    //     }
    //   }
    // ))
  }



const StepRenderer = () => {
  if(step === 0){
    return (
      <div className='question-section'>
      <div className='Subsection-title'>Identity of the host  Company </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}>
        <DropdownComponent 
          onChange={(value)=>onInPutHandler(value, 'identityOfHostCompany', 'country')} 
          options={countries} 
          label="Country" 
          defaultValue={hostForm.identityOfHostCompany.country}
        />
        <TextInputComponent
         onChange={(value)=>onInPutHandler(value, 'identityOfHostCompany', 'intraCommunityVATNumber')} 
         placeholder="Intra-community VAT number" 
         label="Intra-community VAT number" 
         defaultValue={hostForm.identityOfHostCompany.intraCommunityVATNumber}
         infoPopup={{
                explanation:"Free designation of your declaration / Certificate to help you find it easily in your dashboard",
                videoUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0"
         }}
         />
        <TextInputComponent 
          onChange={(value)=>onInPutHandler(value, 'identityOfHostCompany', 'corporateName')} 
          placeholder="name" 
          label="Corporate name" 
          defaultValue={hostForm.identityOfHostCompany.corporateName}
        />
        <TextInputComponent
         onChange={(value)=>onInPutHandler(value, 'identityOfHostCompany', 'address')} 
         placeholder="Address" 
         label="Address" 
         defaultValue={hostForm.identityOfHostCompany.address}
        />
        <TextInputComponent
          onChange={(value)=>onInPutHandler(value, 'identityOfHostCompany', 'postCode')} 
         placeholder="Post code" 
         label="PostCode" 
         defaultValue={hostForm.identityOfHostCompany.postCode}
        />
        <DropdownComponent
         onChange={(value)=>onInPutHandler(value, 'identityOfHostCompany', 'city')} 
         options={countries} 
         label="Town / city" 
         defaultValue={hostForm.identityOfHostCompany.city}
        />
        <TextInputComponent
         onChange={(value)=>onInPutHandler(value, 'identityOfHostCompany', 'addressline2')} 
         placeholder="Address line 2" 
         label="Address line 2" 
          defaultValue={hostForm.identityOfHostCompany.addressline2}
        />
        <TextInputComponent 
          onChange={(value)=>onInPutHandler(value, 'identityOfHostCompany', 'email')} 
          placeholder="your email" 
          label="Email" 
          defaultValue={hostForm.identityOfHostCompany.email}
        />
      </div>
   </div>
    )
  } else if(step === 1){
    return (
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
          onChange={(value)=>onInPutHandler(value, 'representativeInHostCountry', 'dutiesOFrepresentative')}
          placeholder="Please specify..." 
          label="Please specify the duties of the company's representative for this service." 
          style={{  width: '98%'}}
          defaultValue={hostForm.representativeInHostCountry.name}
          infoPopup={{
                explanation:"Free designation of your declaration / Certificate to help you find it easily in your dashboard",
                videoUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0"
         }}
        />
        <TextInputComponent
          onChange={(value)=>onInPutHandler(value, 'representativeInHostCountry', 'siret')}
         placeholder="78013017514688"
         label="SIRET number" 
          defaultValue={hostForm.representativeInHostCountry.siret}
          errorText={errorText.siret2}
        />
        <TextInputComponent
          onChange={(value)=>onInPutHandler(value, 'representativeInHostCountry', 'corporateName')}
         placeholder="Corporate name"
         label="Corporate name" 
          defaultValue={hostForm.representativeInHostCountry.corporateName}
        />
        <TextInputComponent
          onChange={(value)=>onInPutHandler(value, 'representativeInHostCountry', 'address')}
         placeholder="Address" 
         label="Address" 
          defaultValue={hostForm.representativeInHostCountry.address}
        />
        <TextInputComponent 
          onChange={(value)=>onInPutHandler(value, 'representativeInHostCountry', 'postCode')}
          placeholder="Post code" 
          label="PostCode" 
          defaultValue={hostForm.representativeInHostCountry.postCode}
        />
        <DropdownComponent 
          onChange={(value)=>onInPutHandler(value, 'representativeInHostCountry', 'city')}
          options={countries} 
          label="Town / city" 
          defaultValue={hostForm.representativeInHostCountry.city}
        />
        <TextInputComponent 
          onChange={(value)=>onInPutHandler(value, 'representativeInHostCountry', 'addressline2')}
          placeholder="Address line 2" 
          label="Address line 2" 
          defaultValue={hostForm.representativeInHostCountry.addressline2}
        />
      </div>
   </div>
    )
  } else if(step === 2){
    return(
<>
<div className='question-section'>
          <div className='Subsection-title'>Means for contacting the representative in the host country </div>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
            <TextInputComponent
              onChange={(value)=>onInPutHandler(value, 'meansOfContact', 'phone')}
              placeholder="0712637293" 
              label="Telephone number" 
              defaultValue={hostForm.meansOfContact.phone}
               />
            <TextInputComponent
              onChange={(value)=>onInPutHandler(value, 'meansOfContact', 'email')}
             placeholder="Email@email.domain"
             label="Email" 
              defaultValue={hostForm.meansOfContact.email}
            />
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
              onChange={(e)=> onInPutHandler(e, 'storeOfDocuments', 'location')}
              placeholder="At the place where the  services is performed" 
              label="Location of documents "
              style={{  width: '98%'}} 
              defaultValue={hostForm.storeOfDocuments.location}
            />
          </div>
       </div>
</>
    )
  } else if (step === 3){
    return(
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
          onChange={(e)=> onInPutHandler(e, 'datesAndPlace', 'serviceStartDate')}
          placeholder="04 Feb 2023" 
          label="Service start date " 
          defaultValue={hostForm.datesAndPlace.serviceStartDate}
        />
        <TextInputComponent 
          onChange={(e)=> onInPutHandler(e, 'datesAndPlace', 'serviceEndDate')}
          placeholder="01 Feb 2023" 
          label="Estimated end date" 
          defaultValue={hostForm.datesAndPlace.serviceEndDate}
        />
        <TextInputComponent
          onChange={(e)=> onInPutHandler(e, 'datesAndPlace', 'siren')}
          // placeholder="780130175" 
          label="SIREN number" 
          defaultValue={hostForm.datesAndPlace.siren}
        />
        <TextInputComponent 
          onChange={(e)=> onInPutHandler(e, 'datesAndPlace', 'siret')}
          placeholder="78013017514688" 
          label="SIRET number" 
          defaultValue={hostForm.datesAndPlace.siret}
          errorText={errorText.siret}
        />
        <TextInputComponent 
          onChange={(e)=> onInPutHandler(e, 'datesAndPlace', 'corporateName')}
          label="Corporate name" 
          defaultValue={hostForm.datesAndPlace.corporateName}
        />
        <TextInputComponent 
          onChange={(e)=> onInPutHandler(e, 'datesAndPlace', 'address')}
          label="Address" 
          defaultValue={hostForm.datesAndPlace.address}
        />
        <TextInputComponent 
          onChange={(e)=> onInPutHandler(e, 'datesAndPlace', 'postCode')}
          placeholder="6400" 
          label="Postcode" 
          defaultValue={hostForm.datesAndPlace.postCode}
        />
        <DropdownComponent
          onChange={(e)=> onInPutHandler(e, 'datesAndPlace', 'city')}
          options={countries}
          label="Town / city"
          defaultValue={hostForm.datesAndPlace.city}
        />
        <TextInputComponent 
          onChange={(e)=> onInPutHandler(e, 'datesAndPlace', 'addressline2')}
          placeholder="Address line 2" 
          label="Address line 2" 
          defaultValue={hostForm.datesAndPlace.addressline2}
        />
        <TextInputComponent 
          onChange={(e)=> onInPutHandler(e, 'datesAndPlace', 'nafCode')}
          placeholder="4576456743576" 
          label="NAF code" 
          defaultValue={hostForm.datesAndPlace.nafCode}
        />
        <TextInputComponent 
          onChange={(e)=> onInPutHandler(e, 'datesAndPlace', 'collectiveAccomodation')}
          placeholder="False" 
          label="Collective accommodation" 
          defaultValue={hostForm.datesAndPlace.collectiveAccomodation}
        />
        <TextInputComponent 
          onChange={(e)=> onInPutHandler(e, 'datesAndPlace', 'numberOfRooms')}
          placeholder="Address" 
          label="Address type" 
          defaultValue={hostForm.datesAndPlace.numberOfRooms}
        />
      </div>
   </div>
    )
  } else if (step === 4){
return (
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
      onChange={(e)=> onInPutHandler(e, 'infoAboutService', 'mainActivity')}
      options={activityLevelOptions} 
      label="Main activity (4 level) " 
      style={{  width: '100%'}}
      defaultValue={hostForm.infoAboutService.mainActivity}
      />
    <TextInputComponent 
      onChange={(e)=> onInPutHandler(e, 'infoAboutService', 'useOfHazardousProcess')}
      placeholder=" true / false" 
      label="Use of hazardous process or equipment "
      style={{  width: '98%'}} 
      defaultValue={hostForm.infoAboutService.useOfHazardousProcess}
    />
    <TextInputComponent 
      onChange={(e)=> onInPutHandler(e, 'infoAboutService', 'hazardousProcess')}
      placeholder=" reason" 
      label="If yes, please specify"
      style={{  width: '98%'}} 
      defaultValue={hostForm.infoAboutService.hazardousProcess}
    />
    <TextInputComponent 
      onChange={(e)=> onInPutHandler(e, 'infoAboutService', 'workStartTime')}
      placeholder=" 09:00:00" 
      label="Work start time"
      defaultValue={hostForm.infoAboutService.workStartTime}
    />
    <TextInputComponent 
      onChange={(e)=> onInPutHandler(e, 'infoAboutService', 'workEndTime')}
      placeholder=" 09:00:00" 
      label="Work end time"
      defaultValue={hostForm.infoAboutService.workEndTime}
    />
    <TextInputComponent 
      onChange={(e)=> onInPutHandler(e, 'infoAboutService', 'restDays')}
      placeholder="2" 
      label="Number of rest days per week"
      defaultValue={hostForm.infoAboutService.restDays}
    />
    <TextInputComponent 
      onChange={(e)=> onInPutHandler(e, 'infoAboutService', 'otherWorkArrangements')}
      placeholder="True / false" 
      label="Other types of working hour arrangemnets"
      defaultValue={hostForm.infoAboutService.otherWorkArrangements}
    />
  </div>
</div>   
)
  }
}

  return (
    <div className='QuestionSection-wrapper'>
      <QuestionHeader
        title='Host Entity Information'
        subTitle='Declartion - Mobility of Employee Withing The Same Group - Edition'
       />

       {
        StepRenderer(step)
       }
    </div>
  )
}

HostEntityManager.propTypes = {}

export default HostEntityManager
