import React, { useEffect, useState } from 'react';
import '../App.css';
import SideNav from '../components/sidenav';
import MainSection from '../components/main';
import Footer from '../components/footer';

const sideNavElementsTemp = [
   {
      id: 'homeEntity',
      title: 'Home Entity Manager',
      isActive: true,
      subSections: [
         'Home Entity Information',
         'Registration and Legal form',
         'Directors information',
         'Type of posting',
         'Service information',
         'Travel Expenses',
         'Living Expenses',
         'Accommodation Expenses'
      ]
   },
   {
      id: 'hostEntity',
      title: 'Host Entity Manager',
      isActive: false,
      subSections: [
         'Host Entity Information',
         'Representative information',
         'Place of document storage',
         'Dates and place of document storage',
         'Service information'
      ]
   },
   {
      id: 'employee',
      title: 'Employee',
      isActive: false,
      subSections: ['Personal Information']
   }
];

function Home() {
   const [activeForm, setActiveForm] = useState(sideNavElementsTemp[0]);

   const [sideNavElements, setSideNavElements] = useState(sideNavElementsTemp);

   const [step, setStep] = React.useState(1);

   useEffect(() => {
      setStep(1);
   }, [activeForm]);

   const onNavElementChange = (element) => {
      // if same element is clicked, change it to inactive if active
      if (element.isActive) {
         return setSideNavElements(
            sideNavElements.map((item) => {
               if (item.title === element.title) {
                  return {
                     ...item,
                     isActive: false
                  };
               }
               return item;
            })
         );
      }

      setSideNavElements(
         sideNavElements.map((item, index) => {
            if (item.title === element.title) {
               setActiveForm(item);
               return {
                  ...item,
                  isActive: true
               };
            }
            if (index < sideNavElements.indexOf(element)) {
               return {
                  ...item,
                  isActive: false
               };
            }
            return {
               ...item,
               isActive: false
            };
         })
      );
   };

   const onSubSectionNav = (element, index) => {
      setStep(index + 1);
   };

   return (
      <>
         <div className="body-wrapper">
            <SideNav onNavElementChange={onNavElementChange} sideNavElements={sideNavElements} onSubSectionNav={onSubSectionNav} step={step} />
            <div className="right-section">
               <MainSection step={step} setStep={setStep} activeForm={activeForm} />
               <Footer />
            </div>
         </div>
      </>
   );
}

export default Home;
