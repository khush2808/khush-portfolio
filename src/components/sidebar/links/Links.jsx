import {motion} from "framer-motion"
import { FaExternalLinkAlt } from "react-icons/fa";

const variants = {
  open:{
    transition:{
      staggerChildren: 0.3,
    },
  },
  closed:{
    transition: {
      staggerChildren:0.05,
      staggerDirection : -1,
    },
  }
}

const itemvariants = {
  open:{
    y:0,
    opacity:1,
  },
  closed:{
    y:50,
    opacity:0,
  }
}


const Links = () => {

  const items = [ "Homepage" , "Skills" , "Certification" , "Portfolio" , "Contact","Resume"];


  return (
    <motion.div className="links" variants={variants}>{items.map((item)=>{ if(item === "Resume"){ return (
      <motion.a href={`https://drive.google.com/file/d/1l2jwt9Y4j8dLHvFhMI1w8_NWw2F2gQlr/view?usp=drive_link`} target = "_blank" key={item} variants = {itemvariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>{item } < FaExternalLinkAlt />
</motion.a>

    )}
			else return (
      <motion.a href={`#${item}`} key={item} variants = {itemvariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>{item}</motion.a>

    )})}</motion.div>
  )
}

export default Links