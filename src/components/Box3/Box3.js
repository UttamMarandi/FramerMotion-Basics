import React from "react";
import { motion } from "framer-motion";

function Box3() {
  const boxVariant = {
    lion: {
      x: 100,
      scale: 1.5,
    },
    teddy: {
      x: 1000,
      scale: 0.8,
    },
  };

  return (
    <div className="box-container">
      <motion.div
        className="box"
        variants={boxVariant}
        animate="lion"
        initial="teddy"
        transition={{
          type: "spring",
          stiffness: 60,
        }}
      ></motion.div>
    </div>
  );
}

export default Box3;
