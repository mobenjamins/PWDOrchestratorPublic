import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import '../style.css';
import QuestionHeader from '../../QuestionSection/header';
import DropdownComponent from '../../utils/dropdown';
import TextInputComponent from '../../utils/textInput';
import { sirenAPI } from '../../../axios/api';
import FormTitle from '../../formTitle/index';
import { updateHostEntityForm } from '../../../redux/forms/forms.slice';
import { countries } from '../helpers';

function HostIdentity({ step }) {
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

   const onInPutHandler = (value, section, inputKey) => {
      setHostEntityForm({
         ...hostForm,
         [section]: {
            ...hostForm[section],
            [inputKey]: value
         }
      });
   };

   return (
      <div className="question-section">
         <FormTitle
            infoPopup={{
               description:
                  'A representative in the host country is a person who will liaise with the labour authorities in the event of an inspection. The person should have detailed knowledge about the company compliance processes, status of all posted workers, and relevant documentation. The video below includes further guidance.',
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
               alignItems: 'flex-start',
               height: '100%'
            }}
         >
            <DropdownComponent
               style={{ width: '335px' }}
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
               style={{ width: '335px' }}
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
            <div className="pseudo"></div>
         </div>
      </div>
   );
}

HostIdentity.propTypes = {};

export default HostIdentity;
