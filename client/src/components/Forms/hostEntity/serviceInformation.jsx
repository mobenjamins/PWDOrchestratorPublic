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

   const [level1default, setLevel1Default] = useState('');
   const [level2default, setLevel2Default] = useState('');
   const [level3default, setLevel3Default] = useState('');
   const [level4default, setLevel4Default] = useState('');

   const [levelTwoOptions, setLevelTwoOptions] = useState([]);
   const [levelThreeOptions, setLevelThreeOptions] = useState([]);
   const [levelFourOptions, setLevelFourOptions] = useState([]);

   useEffect(() => {
      console.log(activityLevel);
      if (activityLevel.activityLevelOne !== '') {
         setLevel1Default(activityLevel.activityLevelOne);
      }
      if (activityLevel.activityLevelTwo !== '') {
         setLevel2Default(activityLevel.activityLevelTwo);
      }
      if (activityLevel.activityLevelThree !== '') {
         setLevel3Default(activityLevel.activityLevelThree);
      }
      if (activityLevel.activityLevelFour !== '') {
         setLevel4Default(activityLevel.activityLevelFour);
      }
   }, [activityLevel]);

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

      if (level === 'activityLevelOne') {
         setLevelTwoOptions(value.subCategoryLevel1);
         setLevelThreeOptions([]);
         setLevelFourOptions([]);
         setLevel2Default('');
      } else if (level === 'activityLevelTwo') {
         setLevelThreeOptions(value.subCategoryLevel2);
         setLevelFourOptions([]);
         setLevel3Default('');
      } else if (level === 'activityLevelThree') {
         setLevelFourOptions(value.subCategoryLevel3);
         setLevel4Default('');
      }

      // setLevelTwoOptions(value.subCategoryLevel1);

      setActivityLevel({
         ...activityLevel,
         [level]: value
      });
   };

   const onSearchOccupation = (value) => {
      console.log(value);
      if (value === '') {
         setActivityLevel(() => {
            return {
               activityLevelOne: '',
               activityLevelTwo: '',
               activityLevelThree: '',
               activityLevelFour: ''
            };
         });
         return;
      }
      console.log('options', occupations);
      occupations.map((Level1, index1) => {
         return Level1.subCategoryLevel1.map((level2, index2) => {
            return level2.subCategoryLevel2.map((level3, index3) => {
               const includes = level3.subCategoryLevel3.some((item) => item.toLowerCase().includes(value));
               if (includes) {
                  setActivityLevel((prev) => {
                     return {
                        ...prev,
                        activityLevelOne: occupations[index1].label,
                        activityLevelTwo: occupations[index1].subCategoryLevel1[index2].label,
                        activityLevelThree: occupations[index1].subCategoryLevel1[index2].subCategoryLevel2[index3].label,
                        activityLevelFour: occupations[index1].subCategoryLevel1[index2].subCategoryLevel2[index3].subCategoryLevel3[0]
                     };
                  });
                  setLevelTwoOptions(occupations[index1].subCategoryLevel1);
                  setLevelThreeOptions(occupations[index1].subCategoryLevel1[index2].subCategoryLevel2);
                  setLevelFourOptions(occupations[index1].subCategoryLevel1[index2].subCategoryLevel2[index3].subCategoryLevel3);
               } else {
                  console.log('Not found');
               }
               return includes;
            });
         });
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
               label="Search for occupation"
            />
            <AutoCompleteDropdownComponent
               defaultValue={level1default}
               disabled={false}
               onChange={(e) => onSearchSelectChange(e, 'activityLevelOne')}
               options={occupations}
               label="Main activity "
               style={{ width: '100%', marginLeft: '30px', marginRight: '40px' }}
            />
            {activityLevel.activityLevelOne && (
               <AutoCompleteDropdownComponent
                  defaultValue={level2default ? level2default : ''}
                  disabled={activityLevel.activityLevelOne ? false : true}
                  onChange={(e) => onSearchSelectChange(e, 'activityLevelTwo')}
                  options={levelTwoOptions}
                  label="Activity Level two "
                  style={{ width: '100%', marginLeft: '40px', marginRight: '40px' }}
               />
            )}
            {activityLevel.activityLevelTwo && (
               <AutoCompleteDropdownComponent
                  defaultValue={level3default}
                  disabled={activityLevel.activityLevelTwo ? false : true}
                  onChange={(e) => onSearchSelectChange(e, 'activityLevelThree')}
                  options={levelThreeOptions}
                  label="Activity Level three "
                  style={{ width: '100%', marginLeft: '50px', marginRight: '50px' }}
               />
            )}
            {activityLevel.activityLevelThree && (
               <AutoCompleteDropdownComponent
                  defaultValue={level4default}
                  disabled={activityLevel.activityLevelThree ? false : true}
                  onChange={(e) => onSearchSelectChange(e, 'activityLevelFour')}
                  options={levelFourOptions}
                  label="Activity Level four"
                  style={{ width: '100%', marginLeft: '60px', marginRight: '60px' }}
               />
            )}
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
