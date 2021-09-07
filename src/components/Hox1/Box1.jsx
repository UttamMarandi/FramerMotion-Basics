import React, { useState } from "react";
import { motion } from "framer-motion";

function Box1() {
  const [animate, setAnimate] = useState(false);
  //this state helps to animate the element when we require it
  return (
    <div className="box-container">
      <motion.div //if you want to animate an elelement rewrite the element tag to mation.elementTag
        className="box"
        animate={{
          //similar to gsap.to

          x: animate ? 1300 : 0, //if animate is true move x to 1300 px else set it to original position
          opacity: 1,
          scale: 1.5,
        }}
        initial={{
          //intial values
          opacity: 0.1,
        }}
        transition={{
          //type of transition , it can be "tween" - linear motion, takes duration property. also spring , takes stiffness property
          // type: "tween",
          // duration:1,
          type: "spring",
          stiffness: 60,
          damping: 5, //back motion
        }}
        onClick={() => setAnimate(!animate)}
      ></motion.div>
    </div>
  );
}

export default Box1;
