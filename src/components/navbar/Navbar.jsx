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
        <div className='social'>
          <a href="https://www.linkedin.com/in/khush-shah-a32a38248/" target='_blank' rel ="noreferrer"><img src="/linkedin.png" alt="Linkedin" /></a>
          <a href="https://leetcode.com/khush2808" target='_blank' rel ="noreferrer"><img src="https://leetcode.com/static/images/LeetCode_logo.png" alt="LC" /></a>
          <a href="https://codchef.com/users/khushshah675" target='_blank' rel ="noreferrer"><img src="https://th.bing.com/th/id/OIP.LbfxM74ERDTK8YfuEVvyAwHaHa?rs=1&pid=ImgDetMainhttps://www.stopstalk.com/stopstalk/static/images/codechef_logo.png?_rev=20190825132327" alt="Codechef" /></a>
          <a href="https://codeforces.com/profile/khush2808" target='_blank' rel ="noreferrer"><img src="https://i.pinimg.com/736x/b4/6e/54/b46e546a3ee4d410f961e81d4a8cae0f.jpg" alt="CF" /></a>

          <a href="https://x.com/KhushTechIIIT" target='_blank' rel ="noreferrer"><img src="/twitter.png" alt="Twitter" /></a>
          <a href="https://github.com/khush2808" target='_blank' rel ="noreferrer"><img src="/github.png" alt="Github"  /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;