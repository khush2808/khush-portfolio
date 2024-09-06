import "./hero.scss";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const textVariants = {
	lineHeight: 1 ,
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants} className="khush-name">Khush Shah</motion.h2>
          <motion.h1 variants={textVariants}>
           Full Stack Web Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">

            <a href="#Portfolio">
            <motion.button
              variants={textVariants}
            >See the Latest Works
            </motion.button>
            </a>
            
            <a href="#Contact">
            <motion.button
              variants={textVariants}
            >
              Contact Me
            </motion.button>
            </a>

						<a href="https://drive.google.com/file/d/1l2jwt9Y4j8dLHvFhMI1w8_NWw2F2gQlr/view?usp=sharing" target = "_blank" rel = "noreferrer">
            <motion.button
              variants={textVariants} className="resume"
            >
              My Resume <FaExternalLinkAlt />
            </motion.button>
            </a>
						<div className='social'>
          <a href="https://www.linkedin.com/in/khush-shah-a32a38248/" target='_blank' rel ="noreferrer"><img src="/linkedin.png" alt="Linkedin" /></a>
          <a href="https://leetcode.com/khush2808" target='_blank' rel ="noreferrer"><img src="https://leetcode.com/static/images/LeetCode_logo.png" alt="LC" /></a>
          <a href="https://codchef.com/users/khushshah675" target='_blank' rel ="noreferrer"><img src="https://th.bing.com/th/id/OIP.LbfxM74ERDTK8YfuEVvyAwHaHa?rs=1&pid=ImgDetMainhttps://www.stopstalk.com/stopstalk/static/images/codechef_logo.png?_rev=20190825132327" alt="Codechef" /></a>
          <a href="https://codeforces.com/profile/khush2808" target='_blank' rel ="noreferrer"><img src="https://i.pinimg.com/736x/b4/6e/54/b46e546a3ee4d410f961e81d4a8cae0f.jpg" alt="CF" /></a>

          <a href="https://x.com/KhushTechIIIT" target='_blank' rel ="noreferrer"><img src="/twitter.png" alt="Twitter" /></a>
          <a href="https://github.com/khush2808" target='_blank' rel ="noreferrer"><img src="data:image/png;base64,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" alt="Github"  /></a>
        </div>
					

						
            



          </motion.div>
					
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web developer 
      </motion.div>
      <div className="imageContainer">
        <img src="/mygoodphoto.png" alt="" />
				
      </div>
    </div>
  );
};

export default Hero;