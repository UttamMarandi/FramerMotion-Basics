import React from "react";
import { motion } from "framer-motion";

function Box5() {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        animate={{
          scale: [1, 1.4, 0.4, 3, 1], //pass an array of scale values and set the duration between them in transiton
          borderRadius: ["20%", "20%", "50%", "50%", "20%"], //same no of borderRadius values for
          rotate: [0, 0, 270, 270, 0],
        }}
        transition={{
          duration: 2, //the animate has an array with 5 keyframes. The total duration of animation is 2s , so each key frame is 0.4 s
        }}
      ></motion.div>
    </div>
  );
}

export default Box5;
