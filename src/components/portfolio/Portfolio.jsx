import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [

  {
    id: 1,
    title: "Finance Mate",
    img: "./FinanceMate.png",
    desc: "FinanceMate is a financial management tool that helps users track budgets, expenses, and overall financial health. Developed using the MERN stack, the platform offers an intuitive dashboard with interactive charts and tables. Users can manage budgets, categorize expenses, and view detailed spending reports. With secure authentication and a user-friendly interface, FinanceMate simplifies financial planning and promotes better money management.",
    link: "https://finance-mate.vercel.app/",
  },

  {
    id: 2,
    title: "Tomato",
    img: "./Tomato.png",
    desc: "Tomato is a food delivery app that offers a wide range of food options for users to order from. Developed using the MERN stack, the platform features integrated payment options for a seamless checkout experience. Users can view their order history in the 'Orders' section, while admins have access to a comprehensive admin panel to manage and track all orders. With a user-friendly interface and secure payment integration, Tomato provides a convenient and efficient food ordering experience.",
    link: "https://food-delivery-frontend-no0l.onrender.com",
  },

  {
    id: 3,
    title: "Crypto-Tracker",
    img: "./crypto.png",
    desc: "I have developed a comprehensive website for tracking cryptocurrency trends. This platform provides detailed information on all bitcoins available in the market, featuring interactive graphs that display price movements, total trading volume, and market capitalization. Users can monitor market changes over various timeframes,enabling them to make informed investment decisions based on historical data and trends.",
    link: "https://crypto-tracker-loval.vercel.app/",
  },

  {
		id:4,
		title:"Sync Stream",
		img: "./syncstream.png",
		desc:"SyncStream is a video streaming platform that allows users video call. Developed using the MERN stack, the platform features a user-friendly interface with a wide range of content categories. Users can create personalized watchlists, rate movies, and leave reviews. With secure authentication and integrated payment options, SyncStream offers a seamless streaming experience for users worldwide.",
		link:"https://sync-stream-app.vercel.app",
	}
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-190, 190]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank"><button>See Demo</button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar "></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;