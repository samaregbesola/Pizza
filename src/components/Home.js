import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "./Loader";

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255",
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2>Welcome to Pizza & Toppings</h2>
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover="hover">
          Welcome to Pizza & Toppings
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
