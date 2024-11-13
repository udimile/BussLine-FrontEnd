// AnimatedRoute.js
import { motion } from "framer-motion";
import { Route } from "react-router-dom";

const AnimatedRoute = ({ element, path }) => {
  return (
    <Route
      path={path}
      element={
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {element}
        </motion.div>
      }
    />
  );
};

export default AnimatedRoute;
