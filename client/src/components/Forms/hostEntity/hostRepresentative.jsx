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

function HostRepresentative({ step }) {
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
               <div className="pseudo"></div>
            </div>
         </div>
      );
   };

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
               <DropdownComponent
                  style={{ width: '100%' }}
                  onChange={(value) => onInPutHandler(value, 'identityOfHostCompany', 'city')}
                  options={representativeOptions}
                  label="Please specify the duties of the company's representative for this service."
                  defaultValue={hostForm.identityOfHostCompany.city}
               />
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
                  style={{ width: '440px' }}
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
               <div className="pseudo"></div>
            </div>
         </div>
         {contactMeans()}
      </>
   );
}

HostRepresentative.propTypes = {};

export default HostRepresentative;
