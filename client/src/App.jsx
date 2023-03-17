import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import Admin from './pages/admin/admin'
import Header from './components/header';
import VideoModal from './components/videomodal'

function App() {
  const {showVideoModal} = useSelector(state => state.globals)
  return (
    <div className="App">
    {showVideoModal && <VideoModal />}
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />

        {/* <Route component={NotFound} /> */}
      </Routes>
    </div>
  );
}

export default App
