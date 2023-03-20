import React, { useEffect, useState } from 'react';
import '../../App.css';
import './style.css';
import TextInputComponent from '../../components/utils/textInput';
import DropdownComponent from '../../components/utils/dropdown';
import { countries } from '../../components/Forms/helpers';
import { subsectionsList, sectionsList, booleanOptions, sampleUserAsignMent } from './helpers';
import MultiSelectDropdownComponent from '../../components/utils/multiselect';

function Admin() {
   const [selectedSection, setSelectedSection] = useState([]);
   const [selectedSubSections, setSelectedSubSections] = useState([]);
   const [subsection, setAvailableSubsection] = useState([]);
   const [formData, setFormData] = useState({});
   const [assignements, setAssignMents] = useState([]);

   const onChangeSection = (value) => {
      const filteredList = sectionsList.filter((item) => value.includes(item.title));
      setSelectedSection(value);
   };

   const onChangeSubsection = (value) => {
      setSelectedSubSections(value);
   };

   useEffect(() => {
      setFormData((prevState) => {
         return {
            ...prevState,
            subsections: selectedSubSections
         };
      });
   }, [selectedSubSections]);

   useEffect(() => {
      setFormData((prevState) => {
         return {
            ...prevState,
            sections: selectedSection
         };
      });
   }, [selectedSection]);

   useEffect(() => {
      if (selectedSection) {
         // Combined all subsections from seleted sections
         const filteredList = sectionsList.filter((item) => selectedSection.includes(item.title));
         const combinedSubsections = filteredList.reduce((acc, item) => {
            return [...acc, ...item.subsectionsList];
         }, []);

         setAvailableSubsection(combinedSubsections);
      }
   }, [selectedSection]);

   const onChangeText = (value, key) => {
      setFormData((prevState) => {
         return {
            ...prevState,
            [key]: value
         };
      });
   };

   const onSubFormData = () => {
      setAssignMents((prevState) => {
         return [...prevState, formData];
      });
      // setFormData({});
   };

   const homeIdentity = () => {
      return (
         <div className="question-section">
            <div className="Subsection-title">Assign roles to persona</div>
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start'
               }}
            >
               <MultiSelectDropdownComponent
                  style={{ width: '385px' }}
                  onChange={(value) => onChangeSection(value)}
                  options={sectionsList}
                  label="Section responsible"
               />
               <MultiSelectDropdownComponent
                  style={{ width: '385px' }}
                  onChange={(value) => onChangeSubsection(value)}
                  options={subsection}
                  label="Sub-section responsible"
               />
               <TextInputComponent
                  style={{ minWidth: '350px' }}
                  onChange={(e) => onChangeText(e, 'email')}
                  placeholder="email"
                  label="Responsible person email"
                  infoPopup={{
                     explanation: 'Free designation of your declaration / Certificate to help you find it easily in your dashboard',
                     videoUrl: 'https://www.youtube.com/embed/4NKanx3JEP4?controls=0&modestbranding=1&showinfo=0&iv_load_policy=3'
                  }}
               />
               <TextInputComponent
                  style={{ minWidth: '350px' }}
                  onChange={(e) => onChangeText(e, 'dateIssued')}
                  placeholder="7 April 2023"
                  label="Date issued"
               />
               <TextInputComponent
                  style={{ minWidth: '350px' }}
                  onChange={(e) => onChangeText(e, 'automatedReminder1')}
                  placeholder="7 April 2023"
                  label="Automated Reminder 1"
               />
               <TextInputComponent
                  style={{ minWidth: '350px' }}
                  onChange={(e) => onChangeText(e, 'automatedReminder2')}
                  placeholder="7 April 2023"
                  label="Automated Reminder 2"
               />
               <DropdownComponent
                  style={{ width: '385px' }}
                  onChange={(value) => onChangeText(value.value, 'manualReminder')}
                  options={booleanOptions}
                  label="Manual Reminder template"
               />
               <TextInputComponent
                  style={{ minWidth: '350px' }}
                  onChange={(e) => onChangeText(e, 'escalationPoint')}
                  placeholder="email"
                  label="Escalation point"
               />
               <div className="next-btn" style={{ minWidth: '300px', backgroundColor: 'transparent', boxShadow: 'none' }} />
            </div>
            <div className="next-btn" onClick={() => onSubFormData()} style={{ display: 'flex', marginTop: '60px' }}>
               <div>Save</div>
            </div>
         </div>
      );
   };

   const renderTable = () => {
      if (!assignements.length) {
         return;
      }
      return assignements.map((assignment, index) => {
         return (
            <tr>
               <td>{assignment.sections.length === 1 ? assignment.sections[0] : assignment.sections.length + ' fields'}</td>
               <td>{assignment.subsections.length === 1 ? assignment.subsections[0] : assignment.subsections.length + ' fields'}</td>
               <td>{assignment.email}</td>
               <td>{assignment.dateIssued}</td>
               <td>{assignment.automatedReminder1}</td>
               <td>{assignment.automatedReminder2}</td>
               <td>{assignment.manualReminder}</td>
               <td>{assignment.escalationPoint}</td>
               {/* <td style={{ color: 'red', fontSize: '18px' }}>X</td> */}
               <td>
                  <svg className="edit-icon" width="25" height="31" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M8.00008 13.6666C7.74036 13.6666 7.5228 13.5786 7.34741 13.4026C7.17141 13.2272 7.08342 13.0096 7.08342 12.7499V3.42282L6.25842 4.24782C6.09036 4.41587 5.88044 4.4999 5.62866 4.4999C5.37628 4.4999 5.15841 4.40824 4.97508 4.2249C4.80703 4.04157 4.723 3.82371 4.723 3.57132C4.723 3.31954 4.80703 3.10962 4.97508 2.94157L7.35842 0.558236C7.4348 0.481847 7.53044 0.420736 7.64533 0.374902C7.75961 0.329069 7.87786 0.306152 8.00008 0.306152C8.1223 0.306152 8.24086 0.329069 8.35575 0.374902C8.47003 0.420736 8.56536 0.481847 8.64175 0.558236L11.0251 2.94157C11.2084 3.1249 11.3001 3.34643 11.3001 3.60615C11.3001 3.86587 11.2084 4.07976 11.0251 4.24782C10.8417 4.41587 10.6242 4.4999 10.3724 4.4999C10.12 4.4999 9.9098 4.41587 9.74175 4.24782L8.91675 3.42282V12.7499C8.91675 13.0096 8.82905 13.2272 8.65367 13.4026C8.47766 13.5786 8.2598 13.6666 8.00008 13.6666ZM2.50008 20.0832C1.99591 20.0832 1.56447 19.9039 1.20575 19.5452C0.846415 19.1858 0.666748 18.7541 0.666748 18.2499V8.16657C0.666748 7.6624 0.846415 7.23065 1.20575 6.87132C1.56447 6.5126 1.99591 6.33324 2.50008 6.33324H4.33341C4.59314 6.33324 4.811 6.42093 4.987 6.59632C5.16239 6.77232 5.25008 6.99018 5.25008 7.2499C5.25008 7.50962 5.16239 7.72718 4.987 7.90257C4.811 8.07857 4.59314 8.16657 4.33341 8.16657H2.50008V18.2499H13.5001V8.16657H11.6667C11.407 8.16657 11.1895 8.07857 11.0141 7.90257C10.8381 7.72718 10.7501 7.50962 10.7501 7.2499C10.7501 6.99018 10.8381 6.77232 11.0141 6.59632C11.1895 6.42093 11.407 6.33324 11.6667 6.33324H13.5001C14.0042 6.33324 14.436 6.5126 14.7953 6.87132C15.1541 7.23065 15.3334 7.6624 15.3334 8.16657V18.2499C15.3334 18.7541 15.1541 19.1858 14.7953 19.5452C14.436 19.9039 14.0042 20.0832 13.5001 20.0832H2.50008Z"
                        fill="#51d887"
                     />
                  </svg>
               </td>
            </tr>
         );
      });
   };

   return (
      <>
         <div className="body-wrapper">
            <div className="side-section"></div>
            <div className="body-section">
               {homeIdentity()}
               <table>
                  <thead>
                     <tr>
                        <th>Section</th>
                        <th>Subsection</th>
                        <th>Responsible person</th>
                        <th>Date Issued</th>
                        <th>Automated Reminder1</th>
                        <th>Automated Reminder2</th>
                        <th>Manual Reminder template</th>
                        <th>Escalation Point</th>
                        <th></th>
                        <th></th>
                     </tr>
                  </thead>
                  <tbody>{renderTable()}</tbody>
               </table>
            </div>
         </div>
      </>
   );
}

export default Admin;
