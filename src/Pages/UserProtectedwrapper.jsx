import React,{useContext} from 'react'
import UserContext, { userDataContext } from '../Context/UserContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


const UserProtectedwrapper = ({
    children
}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
useEffect(()=>{

    if(!token){
        navigate('/UserLogin')
    }
},[token,navigate])
  return (
   <>
   {children}
   </>
  )
}

export default UserProtectedwrapper