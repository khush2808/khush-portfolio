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
          Portfolio
          </motion.span>
        <div className='social'>
          <a href="https://www.linkedin.com/in/khush-shah-a32a38248/" target='_blank'><img src="/linkedin.png" alt="" /></a>
          <a href="https://x.com/KhushTechIIIT" target='_blank'><img src="/twitter.png" alt="" /></a>
          <a href="https://github.com/khush2808" target='_blank'><img src="/github.png" alt="" style={
						{ width: '28px', height: '28px' , marginBottom:'2px', }
				} /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;