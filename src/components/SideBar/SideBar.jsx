import Reac,{useState,useCallback} from 'react'
import './SideBar.css'
import Logo from '../../imgs/logo.png'
import { SidebarData } from '../../Data/Data'
import {UilSignOutAlt,UilBars} from "@iconscout/react-unicons"
import { motion } from "framer-motion";

const SideBar = () => {
    const [selected, setSelected] = useState(0);
    const [expanded, setExpaned] = useState(true)
    
    const sidebarVariants = {
        true: {
          left : '0'
        },
        false:{
          left : '-60%'
        }
      }
      function handleChange(x){
        console.log(x);
    
      }
      // const handleChange = useCallback(event => {
      //   onNameChange(event.target.value)
      // }, [onNameChange])
  return (
    <>
      <div className="bars"  style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars/>
    </div>
   <motion.div className="Sidebar"
   variants={sidebarVariants}
   animate={window.innerWidth<=768?`${expanded}`:''}
   >
    {/*logo*/}
    <div className="logo">
        <img src={Logo} alt="" />
        <span>
        Sh<span>o</span>ps
        </span>
    </div>

   {/*menu*/}
    <div className="menu" >
        {SidebarData.map((item,index)=>{
            return(
                <div 
                className={selected===index?"menuItem active":"menuItem" }
                key={index}
                onClick={()=>{setSelected(index)
                  handleChange(item.heading)  }}
                >
                    <item.icon/>
                    <span>
                        {item.heading}
                    </span>
                </div>
            )
        })}
        <div className="menuItem">
            <UilSignOutAlt/>
        </div>
    </div>

   </motion.div>
    </>
  )
 
}

export default SideBar