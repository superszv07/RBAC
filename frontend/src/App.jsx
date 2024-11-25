import React, { useEffect } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Admin from './pages/Admin'
import  { Toaster } from 'react-hot-toast';
import AdminLayouts from './Layouts/AdminLayouts'
import UserLayouts from './Layouts/UserLayouts'
import PublicLayouts from './Layouts/PublicLayouts'
import { useDispatch,useSelector } from 'react-redux'
import { updateUser } from './redux/AuthSlice'


export default function App() {
  const user=useSelector((state)=>state.Auth.user)
const disptch=useDispatch()
  useEffect(()=>{
         
        disptch(updateUser())
  },[user])

  return (
    <>
          <BrowserRouter>
          <Toaster/>
            <Routes>
              
              <Route path='/' element={<UserLayouts/>} >
              <Route index element={<Home/>}/>

              </Route>
              <Route path='/admin' element={<AdminLayouts/>}>
              <Route index element={<Admin/>}/>

              </Route>
              <Route path='/' element={<PublicLayouts/>}>
              <Route path='login' element={<Login/>}/>
              <Route path='register' element={<Register/>}/>
                   
              </Route>
            </Routes>
          </BrowserRouter>



    </>
  )
}