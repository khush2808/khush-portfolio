import React from 'react'
import './navbar.scss'
import {motion} from "framer-motion";
import Sidebar from '../sidebar/Sidebar.jsx'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar/>
      <div className='wrapper'>
        <motion.span 
        initial={{opacity:0 , scale:0.5}} 
        animate={{opacity:1 , scale:1}}
        transition={{duration:0.5}}
        >
          
          </motion.span>
        

          
      </div>
    </div>
  )
}

export default Navbar;