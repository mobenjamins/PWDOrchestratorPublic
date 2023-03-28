import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import '../style.css';
import DropdownComponent from '../../utils/dropdown';
import TextInputComponent from '../../utils/textInput';
import { sirenAPI } from '../../../axios/api';
import FormTitle from '../../formTitle/index';
import { updateHostEntityForm } from '../../../redux/forms/forms.slice';
import { countries } from '../helpers';

function DatesAndService({ step }) {
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
               description: 'Service start dates, estimated end dates, and the place where the service will be provided.',
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
               alignItems: 'flex-start',
               height: '100%'
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
               infoPopup={{
                  explanation:
                     'A SIREN number is a unique 9-digit identification number assigned to each business in France. It is used to identify the business as a legal entity and is part of the SIRET number, which also includes the NIC number.'
               }}
               onChange={(e) => onInPutHandler(e, 'datesAndPlace', 'siren')}
               label="SIREN number"
               defaultValue={hostForm.datesAndPlace.siren}
            />
            <TextInputComponent
               infoPopup={{
                  explanation:
                     'A SIRET number is a unique 14-digit identification number assigned to each business establishment in France. It is used to identify the location of the business and is composed of two parts: the SIREN number and the NIC number.'
               }}
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
               style={{ width: '335px' }}
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
               infoPopup={{
                  explanation:
                     'NAF code is a 5-digit code that identifies the economic activity of a business. It is used to classify businesses according to their main activity.'
               }}
               onChange={(e) => onInPutHandler(e, 'datesAndPlace', 'nafCode')}
               placeholder="23453"
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
            <div className="pseudo"></div>
         </div>
      </div>
   );
}

DatesAndService.propTypes = {};

export default DatesAndService;
