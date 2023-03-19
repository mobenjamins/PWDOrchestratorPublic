import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import tickIcon from '../../assets/tick.png';
import sideNavRedButton from '../../assets/sideNav-red-icon.png';
import sideNavGreenButton from '../../assets/sideNav-green.png';
import sideNavBlackButton from '../../assets/sideNav-black.png';

function SideNav({ onSubSectionNav, step, sideNavElements, onNavElementChange }) {
   const [barHeight, setBarHeight] = useState(0);

   useEffect(() => {
      const parentElement = document.getElementById('myElement');
      if (parentElement) {
         console.log(parentElement.offsetHeight);
         setBarHeight(parentElement.offsetHeight * 2);
      }
   }, [sideNavElements]);

   const renderBar = (index, isActive, barHeight) => {
      if (index >= sideNavElements.length - 1) {
         return;
      }
      return;
      if (index !== 0 || index >= sideNavElements.length - 1) {
         return (
            <div
               className="step-bar"
               style={{
                  backgroundColor: isActive ? '#5AEE95' : '#B7B7B7',
                  height: barHeight[`myElement${index}`]
               }}
            ></div>
         );
      }
   };

   const ElementComponent = ({ element, index, onSubSectionNav }) => {
      const [barHeight, setBarHeight] = useState(0);
      useEffect(() => {
         const parentElement = document.getElementById(`myElement${index}`);
         if (parentElement) {
            console.log(parentElement.offsetHeight);
            setBarHeight((prev) => {
               return {
                  ...prev,
                  [`myElement${index}`]: parentElement.offsetHeight * 2
               };
            });
         }
      }, [element.isActive]);

      return (
         <div
            className="parent-element"
            id={`myElement${index}`}
            style={{
               display: 'flex',
               flexDirection: 'column'
            }}
         >
            <div key={index} className="sideNav-link" onClick={() => onNavElementChange(element)} style={{}}>
               {renderBar(index, element.isActive, barHeight)}
               <div
                  className="step-indicator"
                  style={{
                     backgroundColor: element.isActive ? '#5AEE95' : '#B7B7B7'
                  }}
               >
                  <div className="middle-circle"></div>
               </div>
               <span className="link-text" style={{ color: element.isActive ? '#5AEE95' : 'inherit' }}>
                  {element.title}
               </span>
               {element.isActive && <img src={tickIcon} className="tick-icon" />}
            </div>
            <div
               style={{
                  display: element.isActive ? 'flex' : 'none',
                  flexDirection: 'column',
                  paddingLeft: '20px'
               }}
            >
               {element.subSections.map((subSection, index) => {
                  return (
                     <span
                        className="link-text sub-link"
                        style={{
                           color: step === index + 1 ? '#5AEE95' : 'inherit',
                           fontSize: step === index + 1 ? '16px' : '14px'
                        }}
                        onClick={() => onSubSectionNav(subSection, index)}
                     >
                        {subSection}
                     </span>
                  );
               })}
            </div>
         </div>
      );
   };

   return (
      <div className="sideNav-wrapper">
         <div className="top-section" style={{}}>
            {sideNavElements.map((element, index) => {
               return <ElementComponent element={element} index={index} onSubSectionNav={onSubSectionNav} />;
            })}
         </div>
         <div className="bottom-section">
            <div className="button-element bg-red">
               <img src={sideNavRedButton} className="sideNavButtons" />
            </div>
            <div className="button-element bg-green">
               <img src={sideNavGreenButton} className="sideNavButtons" />
            </div>
            <div className="button-element bg-black">
               <img src={sideNavBlackButton} className="sideNavButtons" />
            </div>
         </div>
      </div>
   );
}

SideNav.propTypes = {
   onSubSectionNav: PropTypes.func.isRequired,
   step: PropTypes.number.isRequired,
   sideNavElements: PropTypes.array.isRequired,
   onNavElementChange: PropTypes.func.isRequired
};

export default SideNav;
