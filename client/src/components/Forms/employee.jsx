import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import QuestionHeader from '../QuestionSection/header';
import InfoIcon from '../../assets/info-icon.png';
import DropdownComponent from '../utils/dropdown';
import TextInputComponent from '../utils/textInput';
import RadioselectComponent from '../utils/radioselect';
import { countries } from './helpers';
import FormTitle from '../formTitle/index';

function EmployeeForm({ step }) {
   const personalInformation = () => {
      return (
         <>
            <div className="question-section">
               <FormTitle title="Personal Information" />
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'row',
                     flexWrap: 'wrap',
                     justifyContent: 'space-between',
                     alignItems: 'flex-start'
                  }}
               >
                  <TextInputComponent onChange={(e) => console.log(e)} placeholder="Gender" label="gender" />
                  <TextInputComponent onChange={(e) => console.log(e)} placeholder="Doe" label="Last name" />
                  <TextInputComponent onChange={(e) => console.log(e)} placeholder="John" label="First name" />
                  <TextInputComponent onChange={(e) => console.log(e)} placeholder="Date of birth" label="13 Jun 1990" />
                  <DropdownComponent
                     style={{ width: '440px' }}
                     onChange={(value) => console.log('Town / city ', value)}
                     options={countries}
                     label="Town / city"
                  />
                  <DropdownComponent
                     style={{ width: '440px' }}
                     onChange={(value) => console.log('Country ', value)}
                     options={countries}
                     label="Country of birth"
                  />
                  <TextInputComponent onChange={(e) => console.log(e)} placeholder="Italy" label="Nationality" />
                  <div className="pseudo"></div>
               </div>
            </div>
            {addressInformation()}
         </>
      );
   };

   const addressInformation = () => {
      return (
         <div className="question-section">
            <FormTitle title="Address" />
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start'
               }}
            >
               <TextInputComponent onChange={(e) => console.log(e)} placeholder="Address" label="Address" />
               <DropdownComponent
                  style={{ width: '440px' }}
                  onChange={(value) => console.log('Country ', value)}
                  options={countries}
                  label="Country"
               />
               <TextInputComponent onChange={(e) => console.log(e)} placeholder="Post code" label="PostCode" />
               <DropdownComponent
                  style={{ width: '440px' }}
                  onChange={(value) => console.log('Town / city ', value)}
                  options={countries}
                  label="Town / city"
               />
               <TextInputComponent onChange={(e) => console.log(e)} placeholder="Address line 2" label="Address line 2" />
               <div className="pseudo"></div>
            </div>
         </div>
      );
   };

   const StepRenderer = () => {
      return personalInformation();
   };

   return (
      <div className="QuestionSection-wrapper">
         <QuestionHeader title="Employee Information" subTitle="Declaration - Mobility of Employee Within The Same Group" />
         {StepRenderer()}
      </div>
   );
}

EmployeeForm.propTypes = {
   step: PropTypes.number.isRequired
};

export default EmployeeForm;
