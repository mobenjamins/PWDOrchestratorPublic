import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import '../style.css';
import QuestionHeader from '../../QuestionSection/header';
import DropdownComponent from '../../utils/dropdown';
import TextInputComponent from '../../utils/textInput';
import RadioselectComponent from '../../utils/radioselect';
import AutoCompleteDropdownComponent from '../../utils/autocompletedropdown';
import { sirenAPI } from '../../../axios/api';
import FormTitle from '../../formTitle/index';
import { updateHostEntityForm } from '../../../redux/forms/forms.slice';
import {
   activityLevelOptions,
   countries,
   accomodationExpensesOptions,
   dutiesOfRepresentative,
   ActivityLevelOneOptions,
   occupations
} from '../helpers';
import HostIdentity from './hostIdentity';
import HostRepresentative from './hostRepresentative';

function ServiceInformation({ step }) {
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
      console.log(value, level);

      setActivityLevel({
         ...activityLevel,
         [level]: value
      });
   };

   const onSearchOccupation = (value) => {
      console.log(value);

      // setActivityLevel({
      //    ...activityLevel,
      //    [level]: value
      // });
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
            <TextInputComponent
               style={{ width: '97.5%' }}
               onChange={(e) => onSearchOccupation(e)}
               placeholder="Search here or select below"
               label="Main activity (4 level)"
               // defaultValue={hostForm.infoAboutService.workStartTime}
            />
            <AutoCompleteDropdownComponent
               disabled={false}
               onChange={(e) => onSearchSelectChange(e, 'activityLevelOne')}
               options={occupations}
               label="Main activity (4 level) "
               style={{ width: '100%', marginLeft: '30px', marginRight: '40px' }}
               // defaultValue={''}
            />
            <AutoCompleteDropdownComponent
               disabled={activityLevel.activityLevelOne ? false : true}
               onChange={(e) => onSearchSelectChange(e, 'activityLevelTwo')}
               options={occupations}
               label="Level two "
               style={{ width: '100%', marginLeft: '40px', marginRight: '40px' }}
               // defaultValue={''}
            />
            <AutoCompleteDropdownComponent
               disabled={activityLevel.activityLevelTwo ? false : true}
               onChange={(e) => onSearchSelectChange(e, 'activityLevelThree')}
               options={occupations}
               label="Level three "
               style={{ width: '100%', marginLeft: '50px', marginRight: '50px' }}
               // defaultValue={''}
            />
            <AutoCompleteDropdownComponent
               disabled={activityLevel.activityLevelThree ? false : true}
               onChange={(e) => onSearchSelectChange(e, 'activityLevelFour')}
               options={occupations}
               label="Level four"
               style={{ width: '100%', marginLeft: '60px', marginRight: '60px' }}
               // defaultValue={''}
            />
            <DropdownComponent
               style={{ width: '440px' }}
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
            <div className="pseudo"></div>
         </div>
      </div>
   );
}

ServiceInformation.propTypes = {};

export default ServiceInformation;
