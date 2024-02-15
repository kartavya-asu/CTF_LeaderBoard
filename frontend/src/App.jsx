import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import UserInputPage from './components/UserInputPage'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path="/start" element={<UserInputPage />} />
    </Routes>
  )
}

export default App