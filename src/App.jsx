import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RenderData from './component/RenderData'
import Registration from './component/Registration'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom'
import Surfing from './component/Surfing'
import Header from './component/Header'
import SideBar from './component/SideBar'
import Footer from './component/Footer'

function App() {
  

  return (
    <>
      
      {/* <RenderData></RenderData>
      <Registration /> */}
       {/* <Header/>
       <SideBar/> */}
      <Surfing />

      <Outlet />
      {/* <Footer/> */}
    </>
  );
}

export default App
