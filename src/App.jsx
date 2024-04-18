import { useState } from 'react'
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import Home from './components/Home.jsx'


function App() {

  return (
    <>
    
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </Router>
     
    </>
  )
}

export default App
