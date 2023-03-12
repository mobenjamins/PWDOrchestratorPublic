import React,{useState} from 'react'
import PropTypes from 'prop-types'
import './style.css'
import tickIcon from '../../assets/tick.png'
import sideNavRedButton from '../../assets/sideNav-red-icon.png'
import sideNavGreenButton from '../../assets/sideNav-green.png'
import sideNavBlackButton from '../../assets/sideNav-black.png'

const sideNavElementsTemp = [
  {
    id: 'homeEntity',
    title: 'Home Entity Manager',
    isActive: true
  },
  {
    id: 'hostEntity',
    title: 'Host Entity Manager',
    isActive: false
  },
  {
    id: 'employee',
    title: 'Employee',
    isActive: false
  }
]

function SideNav({setActiveForm}) {
  const [sideNavElements, setSideNavElements] = useState(sideNavElementsTemp)

  const onNavElementChange = (element) =>{ 

    setSideNavElements(sideNavElements.map((item, index) => {
      if(item.title === element.title){
          setActiveForm(item.id)
        return {
          ...item,
          isActive: true
        }
      }
      if(index < sideNavElements.indexOf(element)){
        return {
          ...item,
          isActive: true
        }
      }
      return {
        ...item,
        isActive: false
      }
    }))

  }

  const renderBar =(index, isActive)=>{
    if(index >= (sideNavElements.length - 1)){
      return
    }
    if(index !== 0 || (index >= (sideNavElements.length - 1))){
      return <div className='step-bar' style={{
        backgroundColor: isActive ? '#5AEE95' : '#B7B7B7'
      }}></div>
    }
  }
  return (
    <div className='sideNav-wrapper'>
    <div className='top-section'>
      {
        sideNavElements.map((element, index) => {
          return (
            <div key={index} className='sideNav-link' onClick={()=> onNavElementChange(element)}>
            {renderBar(index, element.isActive)}
              <div className='step-indicator' style={{
                backgroundColor: element.isActive ? '#5AEE95' : '#B7B7B7'
              }}>
                <div className='middle-circle'></div>
              </div>
              <span className='link-text' style={{color: element.isActive ? '#5AEE95' : 'inherit' }}>{element.title}</span>
              {element.isActive && <img src={tickIcon} className="tick-icon" />}
            </div>
          )
        } 
        )
      }
    </div>
    <div className='bottom-section'>
      <div className='button-element bg-red'>
        <img src={sideNavRedButton} className="sideNavButtons" />
      </div>
      <div className='button-element bg-green'>
        <img src={sideNavGreenButton} className="sideNavButtons" />
      </div>
      <div className='button-element bg-black'>
        <img src={sideNavBlackButton} className="sideNavButtons" />
      </div>
    </div>
    </div>
  )
}

SideNav.propTypes = {}

export default SideNav
