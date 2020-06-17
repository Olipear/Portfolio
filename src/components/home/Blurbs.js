import React from "react";
import { motion } from 'framer-motion'

const Blurbs = ({ content, triggerIn }) => {
  return (
    <section className="section double-padded" id="blurb">
      <div className="container">
        <div className="columns">
          <motion.div
            className="column is-8-desktop is-offset-2-desktop"
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
      </div>
    </section>
  );
};


export default Blurbs