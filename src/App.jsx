import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import UserLogin from './Pages/UserLogin'
import UserSignUp from './Pages/UserSignUp'
import CaptainLogin from './Pages/CaptainLogin'
import CaptainSignup from './Pages/CaptainSignup'
import Start from './Pages/Start'
import UserProtectedwrapper from './Pages/UserProtectedwrapper'
import CaptainHome from './Pages/CaptainHome'
import CaptainProtectedWrapper from './Pages/CaptainProtectedWrapper'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/UserLogin' element={<UserLogin/>}/>
        <Route path='/UserSignup' element={<UserSignUp/>}/>
        <Route path='/CaptainLogin' element={<CaptainLogin/>}/>
        <Route path='/CaptainSignup' element={<CaptainSignup/>}/>
        <Route path='/Home' element={
          <UserProtectedwrapper>
            <Home/>
          </UserProtectedwrapper>
        }/>
        <Route path='/CaptainHome' element={
          <CaptainProtectedWrapper>
          <CaptainHome/>
          </CaptainProtectedWrapper>
          }/>
      </Routes>
    </Router>
    </>
  )
}

export default App