import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import Admin from './pages/admin/admin'
import Header from './components/header';

function App() {
  return (
    <div className="App">
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
