import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Add from './pages/Add/Add'
import { Routes,Route } from 'react-router-dom'
import List from './pages/List/List'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add />}/>
          <Route path="/list" element={<List />}/>
        </Routes>
      </div>
    </>
  )
}

export default App