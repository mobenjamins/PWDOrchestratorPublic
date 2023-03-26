import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import '../style.css';
import QuestionHeader from '../../QuestionSection/header';
import TextInputComponent from '../../utils/textInput';
import { sirenAPI } from '../../../axios/api';
import FormTitle from '../../formTitle/index';
import { dutiesOfRepresentative } from '../helpers';
import HostIdentity from './hostIdentity';
import HostRepresentative from './hostRepresentative';
import ServiceInformation from './serviceInformation';
import DatesAndService from './datesAndService';

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

   const StepRenderer = () => {
      if (step === 1) {
         return <HostIdentity />;
      } else if (step === 2) {
         return <HostRepresentative />;
      } else if (step === 3) {
         return documentStorage();
      } else if (step === 4) {
         return <DatesAndService />;
      } else if (step === 5) {
         return <ServiceInformation />;
      }
   };

   return (
      <div className="QuestionSection-wrapper">
         <QuestionHeader title="Host Entity Information" subTitle="Declaration - Mobility of Employee Within The Same Group" />
         {StepRenderer(step)}
      </div>
   );
}

HostEntityManager.propTypes = {
   step: PropTypes.number.isRequired
};

export default HostEntityManager;
