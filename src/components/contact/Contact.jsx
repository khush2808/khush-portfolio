import { useEffect, useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from '@emailjs/browser';
import { FaLinkedin } from "react-icons/fa";


const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

	// useEffect(() => {
	// 	setSuccess(false);
	// }, [success]);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();
		setSuccess(true);
		alert("Your message has been sent successfully. I will get back to you soon.");
		setTimeout(() => {
			setSuccess(false);
		}
		, 500);
    emailjs
      .sendForm(
        "service_6zgu0s7",
        "template_2xrw7qp",
        formRef.current,
        "9r8ve88niJ7ZJbjx1"
      )
      .then(
        (result) => {
         
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let’s work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>khushshah675@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>LinkedIn</h2>
          <span><a href="https://www.linkedin.com/in/khush2808/" target="_blank" rel="noreferrer">Khush Shah <FaLinkedin/>
					</a></span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+91 8160309693</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          
        </motion.div>

				
        {success?"":<form
          ref = {formRef}
          onSubmit={sendEmail}
          
        >
          <input type="text" required placeholder="Name" name="name"/>
          <input type="email" required placeholder="Email" name="email"/>
          <textarea rows={8} placeholder="Message" name="message"/>
          <button type = "submit">Submit</button>
          
          {success}
        </form>}

      </div>
    </motion.div>
  );
};

export default Contact;