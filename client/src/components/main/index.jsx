import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import BackIcon from '../../assets/back-icon.png';
import EmployeeForm from '../Forms/employee';
import HomeEntityManager from '../Forms/homeEntityManager';
import HostEntityManager from '../Forms/hostEntity';

function MainSection({ activeForm, setStep, step }) {
   const nextStepHandler = () => {
      setStep(step + 1);
   };
   const backStepHandler = () => {
      setStep(step - 1);
   };

   const questionRouter = (question) => {
      if (activeForm.id === 'employee') {
         console.log('rendering EmployeeForm');
         return <EmployeeForm step={step} />;
      } else if (activeForm.id === 'hostEntity') {
         console.log('rendering hostEntity');
         return <HostEntityManager step={step} />;
      } else if (activeForm.id === 'homeEntity') {
         console.log('rendering homeEntity');
         return <HomeEntityManager step={step} />;
      } else {
         console.log('rendering default');
         return <HomeEntityManager step={step} />;
      }
   };
   return (
      <div className="mainSection-wrapper">
         {questionRouter()}
         <div className="nav-section">
            <div className="back-btn" onClick={() => backStepHandler()} style={{ display: step === 1 ? 'none' : 'flex' }}>
               <img src={BackIcon} className="back-icon" />
            </div>
            <div className="next-btn" onClick={() => nextStepHandler()} style={{ display: step === activeForm.subSections.length ? 'none' : 'flex' }}>
               <div>Next</div>
            </div>
         </div>
      </div>
   );
}

MainSection.propTypes = {
   activeForm: PropTypes.string.isRequired
};

export default MainSection;
