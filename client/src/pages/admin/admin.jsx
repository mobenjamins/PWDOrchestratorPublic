import React,{useEffect, useState} from 'react'
import '../../App.css'
import './style.css'
import TextInputComponent from '../../components/utils/textInput'
import DropdownComponent from '../../components/utils/dropdown'
import {countries} from '../../components/Forms/helpers'
import {subsectionsList, sectionsList, booleanOptions, sampleUserAsignMent} from './helpers'

function Admin() {

  const [section, setSelectedSection] = useState();
  const [subsection, setSelectedSubsection] = useState(subsectionsList);
  const onChangeSection = (value) => {
    setSelectedSection(value)
  }

  useEffect(() => {
    if(section){
      setSelectedSubsection(subsectionsList.filter((subsection) => subsection.section === section.id))
    }
  }, [section])

  const homeIdentity = () => {
    return (
      <div className='question-section'>
      <div className='Subsection-title'>Assign roles to persona</div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}>
        <DropdownComponent style={{width: '350px'}} onChange={(value)=> onChangeSection(value)} options={sectionsList} label="Section responsible" />
        <DropdownComponent style={{width: '350px'}} onChange={(value)=>console.log("Country ", value)} options={subsection} label="Sub-section responsible" />
        <TextInputComponent 
        style={{minWidth: '350px'}}
          onChange={(e)=> console.log(e)} 
          placeholder="email" 
          label="Responsible person email" 
          infoPopup={{
            explanation:"Free designation of your declaration / Certificate to help you find it easily in your dashboard",
            videoUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0"
          }}
        />
        <TextInputComponent disabled={true} style={{minWidth: '350px'}}  onChange={(e)=> console.log(e)} placeholder="7 April 2023" label="Date issued" />
        <TextInputComponent disabled={true}  style={{minWidth: '350px'}}  onChange={(e)=> console.log(e)} placeholder="7 April 2023" label="Automated Reminder 1" />
        <TextInputComponent disabled={true}  style={{minWidth: '350px'}} onChange={(e)=> console.log(e)} placeholder="7 April 2023" label="Automated Reminder 2" />
        <DropdownComponent  style={{width: '350px'}} onChange={(value)=>console.log("Town / city ", value)} options={booleanOptions} label="Manual Reminder template" />
        <TextInputComponent disabled={true}  style={{minWidth: '350px'}} onChange={(e)=> console.log(e)} placeholder="email" label="Escalation point" />
        <div className='next-btn saveBtn' onClick={()=>nextStepHandler()} style={{display: 'flex'}}>
          <div>Save</div>
        </div>

        {/* <TextInputComponent onChange={(e)=> console.log(e)} placeholder="phone number" label="Telephone number" />
        <TextInputComponent 
          onChange={(e)=> console.log(e)} 
          placeholder="your email" 
          label="Email" 
          infoPopup={{
              explanation:"Free designation of your declaration / Certificate to help you find it easily in your dashboard",
              videoUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0"
          }}
        /> */}
      </div>
   </div>
    )
  }

  const renderTable = () => {
    return sampleUserAsignMent.map((assignment, index) => {
      return (
        <tr>
				<td>{assignment.section}</td>
				<td>{assignment.subsection}</td>
				<td>{assignment.responsiblePerson}</td>
				<td>{assignment.dateIssued}</td>
				<td>{assignment.automatedReminder1}</td>
				<td>{assignment.automatedReminder2}</td>
				<td>{assignment.manualReminder}</td>
				<td>{assignment.escalationPoint}</td>
			</tr>
      )
    })
  }

  return (
    <>
      <div className='body-wrapper'>
        <div className='side-section'>
        </div>
        <div className='body-section'>
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
			</tr>
		</thead>
		<tbody>
    {
      renderTable()
    }
      </tbody>
      </table>
        </div>
      </div>
    </>
  )
}

export default Admin
