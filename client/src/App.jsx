import React,{useEffect, useState} from 'react'
import './App.css'
import Header from './components/header'
import SideNav from './components/sideNav'
import MainSection from './components/main'
import Footer from './components/footer'

function App() {
const [activeForm, setActiveForm] = useState(false)

  return (
    <div className="App">
      <Header />
      <div className='body-wrapper'>
        <SideNav setActiveForm={setActiveForm} />
        <div className='right-section'>
          <MainSection activeForm={activeForm}/>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
