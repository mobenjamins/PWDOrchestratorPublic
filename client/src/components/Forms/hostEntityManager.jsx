import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './style.css';
import QuestionHeader from '../QuestionSection/header';
import DropdownComponent from '../utils/dropdown';
import TextInputComponent from '../utils/textInput';
import RadioselectComponent from '../utils/radioselect';
import AutoCompleteDropdownComponent from '../utils/autocompletedropdown';
import { sirenAPI } from '../../axios/api';
import FormTitle from '../formTitle/index';
import { updateHostEntityForm } from '../../redux/forms/forms.slice';
import { activityLevelOptions, countries, accomodationExpensesOptions, dutiesOfRepresentative, ActivityLevelOneOptions } from './helpers';
function HostEntityManager({ step }) {
   const dispatch = useDispatch();
   const [errorText, setErrorText] = useState({
      siret: {
         error: false,
         message: ''
      },
      siret2: {
         error: false,
         message: ''
      }
   });

   const [companyData, setCompanyData] = useState({
      corporateName: '',
      siren: '',
      address: ''
   });
   const { hostEntityForm } = useSelector((state) => state.forms);
   const [hostForm, setHostEntityForm] = useState(hostEntityForm);
   const [representativeOptions, setRepresentativeOptions] = useState(dutiesOfRepresentative);
   const [activityLevel, setActivityLevel] = useState({
      activityLevelOne: '',
      activityLevelTwo: '',
      activityLevelThree: '',
      activityLevelFour: ''
   });

   const onChangeRepsentativeHandler = (element) => {
      setRepresentativeOptions(
         dutiesOfRepresentative.map((item, index) => {
            if (element.title === item.title) {
               return {
                  ...item,
                  isSelected: true
               };
            }
            return {
               ...item,
               isSelected: false
            };
         })
      );
   };

   const onChangeSiretHandler = async (siret, section, inputKey) => {
      try {
         const response = await sirenAPI.get(`/siret/${siret}`);
         const locationData = response.data.etablissement.adresseEtablissement;
         setHostEntityForm({
            ...hostForm,
            [section]: {
               ...hostForm[section],
               [inputKey]: siret,
               siren: response.data.etablissement.siren,
               corporateName: response.data.etablissement.uniteLegale.denominationUniteLegale,
               addressline2: response.data.etablissement.adresseEtablissement.complementAdresseEtablissement,
               postCode: response.data.etablissement.adresseEtablissement.codePostalEtablissement,
               address: `${locationData.numeroVoieEtablissement} ${locationData.libelleVoieEtablissement} ${locationData.codePostalEtablissement} ${locationData.libelleCommuneEtablissement}`
            }
         });
         if (section === 'representativeInHostCountry') {
            setErrorText({
               ...errorText,
               siret2: {
                  error: false,
                  message: 'Siret is Valid'
               }
            });
         } else {
            setErrorText({
               ...errorText,
               siret: {
                  error: false,
                  message: 'Siret is Valid'
               }
            });
         }

         console.log(companyData);
         return;
      } catch (error) {
         if (section === 'representativeInHostCountry') {
            setErrorText({
               ...errorText,
               siret2: {
                  error: true,
                  message: 'Siret is number not found'
               }
            });
         } else {
            setErrorText({
               ...errorText,
               siret: {
                  error: true,
                  message: 'Siret number not found'
               }
            });
         }
         return;
      }
   };

   const onSearchSelectChange = (value, level) => {
      setActivityLevel({
         ...activityLevel,
         [level]: value
      });
   };

   const onInPutHandler = (value, section, inputKey) => {
      if (inputKey === 'siret' && value.length === 14) {
         onChangeSiretHandler(value, section, inputKey);
      }
      if (inputKey === 'siret' && value.length !== 14) {
         setErrorText({
            ...errorText,
            siret: {
               error: true,
               message: 'Siret must be 14 characters long'
            }
         });
      }

      if (section === 'representativeInHostCountry' && value.length === 14) {
         onChangeSiretHandler(value, section, inputKey);
      }
      if (section === 'representativeInHostCountry' && inputKey === 'siret' && value.length !== 14) {
         setErrorText({
            ...errorText,
            siret2: {
               error: true,
               message: 'Siret must be 14 characters long'
            }
         });
      }

      setHostEntityForm({
         ...hostForm,
         [section]: {
            ...hostForm[section],
            [inputKey]: value
         }
      });

      // dispatch(updateHostEntityForm(
      //   {
      //     ...hostEntityForm,
      //     [section]: {
      //       ...hostEntityForm[section],
      //       [inputKey]: value
      //     }
      //   }
      // ))
   };

   const hostIdentity = () => {
      return (
         <div className="question-section">
            <FormTitle
               infoPopup={{
                  description:
                     ' Information about the new comapny  mation the about the new comapny  Info mation the the new comapny  Info mation the about new comapny  Info mation about the new the  Info mation about the new comapny  Info mation about the new comapny  Info mation about the new comapny ',
                  videoUrl: 'https://www.youtube.com/embed/4NKanx3JEP4?controls=0&modestbranding=1&showinfo=0&iv_load_policy=3'
               }}
               title="Identity of the host Company"
            />
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start'
               }}
            >
               <DropdownComponent
                  onChange={(value) => onInPutHandler(value, 'identityOfHostCompany', 'country')}
                  options={countries}
                  label="Country"
                  defaultValue={hostForm.identityOfHostCompany.country}
               />
               <TextInputComponent
                  onChange={(value) => onInPutHandler(value, 'identityOfHostCompany', 'intraCommunityVATNumber')}
                  placeholder="Intra-community VAT number"
                  label="Intra-community VAT number"
                  defaultValue={hostForm.identityOfHostCompany.intraCommunityVATNumber}
                  infoPopup={{
                     explanation: 'Free designation of your declaration / Certificate to help you find it easily in your dashboard',
                     videoUrl: 'https://www.youtube.com/watch?v=9bZkp7q19f0'
                  }}
               />
               <TextInputComponent
                  onChange={(value) => onInPutHandler(value, 'identityOfHostCompany', 'corporateName')}
                  placeholder="name"
                  label="Corporate name"
                  defaultValue={hostForm.identityOfHostCompany.corporateName}
               />
               <TextInputComponent
                  onChange={(value) => onInPutHandler(value, 'identityOfHostCompany', 'address')}
                  placeholder="Address"
                  label="Address"
                  defaultValue={hostForm.identityOfHostCompany.address}
               />
               <TextInputComponent
                  onChange={(value) => onInPutHandler(value, 'identityOfHostCompany', 'postCode')}
                  placeholder="Post code"
                  label="PostCode"
                  defaultValue={hostForm.identityOfHostCompany.postCode}
               />
               <DropdownComponent
                  onChange={(value) => onInPutHandler(value, 'identityOfHostCompany', 'city')}
                  options={countries}
                  label="Town / city"
                  defaultValue={hostForm.identityOfHostCompany.city}
               />
               <TextInputComponent
                  onChange={(value) => onInPutHandler(value, 'identityOfHostCompany', 'addressline2')}
                  placeholder="Address line 2"
                  label="Address line 2"
                  defaultValue={hostForm.identityOfHostCompany.addressline2}
               />
               <TextInputComponent
                  onChange={(value) => onInPutHandler(value, 'identityOfHostCompany', 'email')}
                  placeholder="your email"
                  label="Email"
                  defaultValue={hostForm.identityOfHostCompany.email}
               />
            </div>
         </div>
      );
   };

   const representativeSelect = () => {
      return (
         <div className="question-section">
            {/* <div className="Subsection-title">Travel expenses </div> */}
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  width: '100%'
               }}
            >
               <div className="question-section">
                  <DropdownComponent
                     onChange={(value) => onInPutHandler(value, 'identityOfHostCompany', 'city')}
                     options={representativeOptions}
                     label="Please specify the duties of the company's representative for this service."
                     defaultValue={hostForm.identityOfHostCompany.city}
                  />
               </div>
               {/* <TextInputComponent onChange={(e) => console.log(e)} placeholder="Travel Expenses Budget" label="Travel Expenses Budget" /> */}
            </div>
         </div>
      );
   };

   const hostRepresentative = () => {
      return (
         <>
            <div className="question-section">
               <FormTitle
                  infoPopup={{
                     description:
                        ' Info mation about the new comapny  mation the about the new comapny  Info mation the the new comapny  Info mation the about new comapny  Info mation about the new the  Info mation about the new comapny  Info mation about the new comapny  Info mation about the new comapny ',
                     videoUrl: 'https://www.youtube.com/embed/4NKanx3JEP4?controls=0&modestbranding=1&showinfo=0&iv_load_policy=3'
                  }}
                  title="Representative in host country"
               />
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'row',
                     flexWrap: 'wrap',
                     justifyContent: 'space-between',
                     alignItems: 'flex-start'
                  }}
               >
                  {representativeSelect()}
                  {/* <TextInputComponent
                     onChange={(value) => onInPutHandler(value, 'representativeInHostCountry', 'dutiesOFrepresentative')}
                     placeholder="Please specify..."
                     label="Please specify the duties of the company's representative for this service."
                     style={{ width: '98%' }}
                     defaultValue={hostForm.representativeInHostCountry.name}
                     infoPopup={{
                        explanation: 'Free designation of your declaration / Certificate to help you find it easily in your dashboard',
                        videoUrl: 'https://www.youtube.com/watch?v=9bZkp7q19f0'
                     }}
                  /> */}
                  <TextInputComponent
                     infoPopup={{
                        description:
                           ' Information about the new comapny  mation the about the new comapny  Info mation the the new comapny  Info mation the about new comapny  Info mation about the new the  Info mation about the new comapny  Info mation about the new comapny  Info mation about the new comapny ',
                        videoUrl: 'https://www.youtube.com/embed/4NKanx3JEP4?controls=0&modestbranding=1&showinfo=0&iv_load_policy=3'
                     }}
                     onChange={(value) => onInPutHandler(value, 'representativeInHostCountry', 'siret')}
                     placeholder="78013017514688"
                     label="SIRET number"
                     defaultValue={hostForm.representativeInHostCountry.siret}
                     errorText={errorText.siret2}
                  />
                  <TextInputComponent
                     onChange={(value) => onInPutHandler(value, 'representativeInHostCountry', 'corporateName')}
                     placeholder="Corporate name"
                     label="Corporate name"
                     defaultValue={hostForm.representativeInHostCountry.corporateName}
                  />
                  <TextInputComponent
                     onChange={(value) => onInPutHandler(value, 'representativeInHostCountry', 'address')}
                     placeholder="Address"
                     label="Address"
                     defaultValue={hostForm.representativeInHostCountry.address}
                  />
                  <TextInputComponent
                     onChange={(value) => onInPutHandler(value, 'representativeInHostCountry', 'postCode')}
                     placeholder="Post code"
                     label="PostCode"
                     defaultValue={hostForm.representativeInHostCountry.postCode}
                  />
                  <DropdownComponent
                     onChange={(value) => onInPutHandler(value, 'representativeInHostCountry', 'city')}
                     options={countries}
                     label="Town / city"
                     defaultValue={hostForm.representativeInHostCountry.city}
                  />
                  <TextInputComponent
                     onChange={(value) => onInPutHandler(value, 'representativeInHostCountry', 'addressline2')}
                     placeholder="Address line 2"
                     label="Address line 2"
                     defaultValue={hostForm.representativeInHostCountry.addressline2}
                  />
               </div>
            </div>
            {contactMeans()}
         </>
      );
   };

   const contactMeans = () => {
      return (
         <div className="question-section">
            <FormTitle
               infoPopup={{
                  description:
                     ' Info mation about the new comapny  mation the about the new comapny  Info mation the the new comapny  Info mation the about new comapny  Info mation about the new the  Info mation about the new comapny  Info mation about the new comapny  Info mation about the new comapny ',
                  videoUrl: 'https://www.youtube.com/embed/4NKanx3JEP4?controls=0&modestbranding=1&showinfo=0&iv_load_policy=3'
               }}
               title="Means for contacting the representative in the host country"
            />
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start'
               }}
            >
               <TextInputComponent
                  onChange={(value) => onInPutHandler(value, 'meansOfContact', 'phone')}
                  placeholder="0712637293"
                  label="Telephone number"
                  defaultValue={hostForm.meansOfContact.phone}
               />
               <TextInputComponent
                  onChange={(value) => onInPutHandler(value, 'meansOfContact', 'email')}
                  placeholder="Email@email.domain"
                  label="Email"
                  defaultValue={hostForm.meansOfContact.email}
               />
            </div>
         </div>
      );
   };

   const documentStorage = () => {
      return (
         <div className="question-section">
            <FormTitle
               infoPopup={{
                  description:
                     ' Info mation about the new comapny  mation the about the new comapny  Info mation the the new comapny  Info mation the about new comapny  Info mation about the new the  Info mation about the new comapny  Info mation about the new comapny  Info mation about the new comapny ',
                  videoUrl: 'https://www.youtube.com/embed/4NKanx3JEP4?controls=0&modestbranding=1&showinfo=0&iv_load_policy=3'
               }}
               title="Place where the documents, which must be kept available for the inspection services, are stored"
            />
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start'
               }}
            >
               <TextInputComponent
                  onChange={(e) => onInPutHandler(e, 'storeOfDocuments', 'location')}
                  placeholder="At the place where the  services is performed"
                  label="Location of documents "
                  style={{ width: '98%' }}
                  defaultValue={hostForm.storeOfDocuments.location}
               />
            </div>
         </div>
      );
   };

   const datesAndService = () => {
      return (
         <div className="question-section">
            <FormTitle
               infoPopup={{
                  description:
                     ' Info mation about the new comapny  mation the about the new comapny  Info mation the the new comapny  Info mation the about new comapny  Info mation about the new the  Info mation about the new comapny  Info mation about the new comapny  Info mation about the new comapny ',
                  videoUrl: 'https://www.youtube.com/embed/4NKanx3JEP4?controls=0&modestbranding=1&showinfo=0&iv_load_policy=3'
               }}
               title="Dates and place of service"
            />
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start'
               }}
            >
               <TextInputComponent
                  onChange={(e) => onInPutHandler(e, 'datesAndPlace', 'serviceStartDate')}
                  placeholder="04 Feb 2023"
                  label="Service start date "
                  defaultValue={hostForm.datesAndPlace.serviceStartDate}
               />
               <TextInputComponent
                  onChange={(e) => onInPutHandler(e, 'datesAndPlace', 'serviceEndDate')}
                  placeholder="01 Feb 2023"
                  label="Estimated end date"
                  defaultValue={hostForm.datesAndPlace.serviceEndDate}
               />
               <TextInputComponent
                  onChange={(e) => onInPutHandler(e, 'datesAndPlace', 'siren')}
                  label="SIREN number"
                  defaultValue={hostForm.datesAndPlace.siren}
               />
               <TextInputComponent
                  onChange={(e) => onInPutHandler(e, 'datesAndPlace', 'siret')}
                  placeholder="78013017514688"
                  label="SIRET number"
                  defaultValue={hostForm.datesAndPlace.siret}
                  errorText={errorText.siret}
               />
               <TextInputComponent
                  onChange={(e) => onInPutHandler(e, 'datesAndPlace', 'corporateName')}
                  label="Corporate name"
                  defaultValue={hostForm.datesAndPlace.corporateName}
               />
               <TextInputComponent
                  onChange={(e) => onInPutHandler(e, 'datesAndPlace', 'address')}
                  label="Address"
                  defaultValue={hostForm.datesAndPlace.address}
               />
               <TextInputComponent
                  onChange={(e) => onInPutHandler(e, 'datesAndPlace', 'postCode')}
                  placeholder="6400"
                  label="Postcode"
                  defaultValue={hostForm.datesAndPlace.postCode}
               />
               <DropdownComponent
                  onChange={(e) => onInPutHandler(e, 'datesAndPlace', 'city')}
                  options={countries}
                  label="Town / city"
                  defaultValue={hostForm.datesAndPlace.city}
               />
               <TextInputComponent
                  onChange={(e) => onInPutHandler(e, 'datesAndPlace', 'addressline2')}
                  placeholder="Address line 2"
                  label="Address line 2"
                  defaultValue={hostForm.datesAndPlace.addressline2}
               />
               <TextInputComponent
                  onChange={(e) => onInPutHandler(e, 'datesAndPlace', 'nafCode')}
                  placeholder="4576456743576"
                  label="NAF code"
                  defaultValue={hostForm.datesAndPlace.nafCode}
               />
               <TextInputComponent
                  onChange={(e) => onInPutHandler(e, 'datesAndPlace', 'collectiveAccomodation')}
                  placeholder="False"
                  label="Collective accommodation"
                  defaultValue={hostForm.datesAndPlace.collectiveAccomodation}
               />
               <TextInputComponent
                  onChange={(e) => onInPutHandler(e, 'datesAndPlace', 'numberOfRooms')}
                  placeholder="Address"
                  label="Address type"
                  defaultValue={hostForm.datesAndPlace.numberOfRooms}
               />
            </div>
         </div>
      );
   };

   const serviceInformation = () => {
      return (
         <div className="question-section">
            <FormTitle
               infoPopup={{
                  description:
                     ' Info mation about the new comapny  mation the about the new comapny  Info mation the the new comapny  Info mation the about new comapny  Info mation about the new the  Info mation about the new comapny  Info mation about the new comapny  Info mation about the new comapny ',
                  videoUrl: 'https://www.youtube.com/embed/4NKanx3JEP4?controls=0&modestbranding=1&showinfo=0&iv_load_policy=3'
               }}
               title="Information about the service"
            />
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start'
               }}
            >
               <AutoCompleteDropdownComponent
                  onChange={(e) => onSearchSelectChange(e, 'activityLevelOne')}
                  options={ActivityLevelOneOptions}
                  label="Main activity (4 level) "
                  style={{ width: '100%' }}
                  // defaultValue={''}
               />
               {activityLevel.activityLevelOne && (
                  <AutoCompleteDropdownComponent
                     onChange={(e) => onSearchSelectChange(e, 'activityLevelTwo')}
                     options={ActivityLevelOneOptions}
                     label="Level two "
                     style={{ width: '100%', marginLeft: '40px', marginRight: '40px' }}
                     // defaultValue={''}
                  />
               )}
               {activityLevel.activityLevelTwo && (
                  <AutoCompleteDropdownComponent
                     onChange={(e) => onSearchSelectChange(e, 'activityLevelThree')}
                     options={ActivityLevelOneOptions}
                     label="Level three "
                     style={{ width: '100%', marginLeft: '50px', marginRight: '50px' }}
                     // defaultValue={''}
                  />
               )}
               {activityLevel.activityLevelThree && (
                  <AutoCompleteDropdownComponent
                     onChange={(e) => onSearchSelectChange(e, 'activityLevelFour')}
                     options={ActivityLevelOneOptions}
                     label="Level four"
                     style={{ width: '100%', marginLeft: '60px', marginRight: '60px' }}
                     // defaultValue={''}
                  />
               )}
               <DropdownComponent
                  onChange={(e) => onInPutHandler(e.value, 'infoAboutService', 'useOfHazardousProcess')}
                  options={[
                     { value: 'true', title: 'Yes' },
                     { value: 'false', title: 'No' }
                  ]}
                  label="Use of hazardous process or equipment"
                  defaultValue={hostForm.infoAboutService.useOfHazardousProcess}
               />
               {hostForm?.infoAboutService?.useOfHazardousProcess === 'true' && (
                  <TextInputComponent
                     onChange={(e) => onInPutHandler(e, 'infoAboutService', 'hazardousProcess')}
                     placeholder=" reason"
                     label="Please specify"
                     // style={{ width: '98%' }}
                     defaultValue={hostForm.infoAboutService.hazardousProcess}
                  />
               )}
               <TextInputComponent
                  onChange={(e) => onInPutHandler(e, 'infoAboutService', 'workStartTime')}
                  placeholder=" 09:00:00"
                  label="Work start time"
                  defaultValue={hostForm.infoAboutService.workStartTime}
               />
               <TextInputComponent
                  onChange={(e) => onInPutHandler(e, 'infoAboutService', 'workEndTime')}
                  placeholder=" 09:00:00"
                  label="Work end time"
                  defaultValue={hostForm.infoAboutService.workEndTime}
               />
               <TextInputComponent
                  onChange={(e) => onInPutHandler(e, 'infoAboutService', 'restDays')}
                  placeholder="2"
                  label="Number of rest days per week"
                  defaultValue={hostForm.infoAboutService.restDays}
               />
               <TextInputComponent
                  infoPopup={{
                     explanation:
                        'If you are unable to indicate regular start and finish times for he work, including provisional times (for example, cyclical work, shift work, personalised working hours), a document showing the number of hours worked must be completed and made available to inspection agents at place of work'
                     // videoUrl: 'https://www.youtube.com/embed/4NKanx3JEP4?controls=0&modestbranding=1&showinfo=0&iv_load_policy=3'
                  }}
                  onChange={(e) => onInPutHandler(e, 'infoAboutService', 'otherWorkArrangements')}
                  placeholder="True / false"
                  label="Other types of working hour arrangemnets"
                  defaultValue={hostForm.infoAboutService.otherWorkArrangements}
               />
            </div>
         </div>
      );
   };

   const StepRenderer = () => {
      if (step === 1) {
         return hostIdentity();
      } else if (step === 2) {
         return hostRepresentative();
      } else if (step === 3) {
         return documentStorage();
      } else if (step === 4) {
         return datesAndService();
      } else if (step === 5) {
         return serviceInformation();
      }
   };

   return (
      <div className="QuestionSection-wrapper">
         <QuestionHeader title="Host Entity Information" subTitle="Declaration - Mobility of Employee Within The Same Group" />
         {StepRenderer(step)}
      </div>
   );
}

HostEntityManager.propTypes = {};

export default HostEntityManager;
