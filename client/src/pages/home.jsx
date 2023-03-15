import React,{useEffect, useState} from 'react'
import '../App.css'
import SideNav from '../components/sidenav'
import MainSection from '../components/main'
import Footer from '../components/footer'

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

function Home() {
const [activeForm, setActiveForm] = useState('homeEntity')

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

  return (
    <>
      <div className='body-wrapper'>
        <SideNav setActiveForm={setActiveForm} onNavElementChange={onNavElementChange} sideNavElementsTemp={sideNavElements} />
        <div className='right-section'>
          <MainSection activeForm={activeForm} />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Home
