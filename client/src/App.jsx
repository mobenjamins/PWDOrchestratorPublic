import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Admin from './pages/admin/admin';
import Header from './components/header';
import VideoModal from './components/videomodal';
import LogoutModal from './components/logoutmodal';

function App() {
   const { showVideoModal, showLogoutModal } = useSelector((state) => state.globals);
   return (
      <div className="App">
         {showVideoModal && <VideoModal />}
         {showLogoutModal && <LogoutModal />}
         <Header />
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />

            {/* <Route component={NotFound} /> */}
         </Routes>
      </div>
   );
}

export default App;
