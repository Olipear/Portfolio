import React from "react";
import { motion } from 'framer-motion'

const Blurbs = ({ content, triggerIn }) => {
  return (
    <section className="section standout" id="blurb">
      <div className="container">
        <motion.div
            animate={{
              opacity: triggerIn ? 1 : 0,
              translateY: triggerIn ? 0 : 50,
            }}
            transition={{
              type: "spring",
              damping: 15,
              mass: 2,
              stiffness: 100,
            }}
          >
            {content &&
              content.map((i) => (
                <h2 key={i.blurb.substring(0, 5)}>{i.blurb}</h2>
              ))}
          </motion.div>
      </div>
    </section>
  );
};


export default Blurbs