import './App.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RightSide/RightSide';
import SideBar from './components/SideBar/SideBar';
import CustomerDash from './components/CusomerDash/CustomerDash'
import { useState } from 'react';
import {Router,Route,Routes} from "react-router-dom"
function App() {

   const [visibility,setVisibility]=useState(false)

  function handleChange(){
    setVisibility(!visibility)
  }

  return (
    <div className="App">
        <div className='AppGlass'>
         <SideBar/>

         {/* if (visibility) {
           <MainDash handleChange={true} />
         } */}
        <MainDash/>
         {/* <CustomerDash/> */}
         
         <RightSide/>
        </div>
    
    </div>
  );
}

export default App;
