import React from "react";
import { motion } from "framer-motion";

function Box4() {
  const boxVariant = {
    //desribe animation in an object, take custom animation type as keys which are object in itself
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren", //this defines that first this element animation will run and then the children animation
      },
    },
  };
  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className="box-container">
      <motion.div
        className="box"
        variants={boxVariant} //define boxVariant as variants
        animate="visible"
        initial="hidden"
      >
        {[1, 2, 3].map((box) => {
          return (
            <motion.li
              className="boxItem"
              variants={listVariant} //we don't need to define animate and inital props , as they are passed from parent element. However we can have diffrent animation listed on listVariant Object
            ></motion.li>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Box4;
