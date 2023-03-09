import './App.css'
import Header from './components/header'
import SideNav from './components/sideNav'
import MainSection from './components/main'
import Footer from './components/footer'

function App() {

  return (
    <div className="App">
      <Header />
      <div className='body-wrapper'>
        <SideNav />
        <div className='right-section'>
          <MainSection />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
