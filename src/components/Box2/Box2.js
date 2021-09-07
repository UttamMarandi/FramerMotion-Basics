import React from "react";
import { motion } from "framer-motion";

function Box2() {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        drag //make the element draggablle
        //drag ="x" only in x -direction
        dragConstraints={{
          //add constraints to drag elements
          bottom: 5,
          top: 0,
          right: 5,
          left: 0,
        }}
        whileHover={{
          //any animation on hover
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
      ></motion.div>
    </div>
  );
}

export default Box2;
