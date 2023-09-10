// eslint-disable-next-line react/prop-types

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Heading({ children }) {
  const [headingRef, inHeadingView] = useInView();
  const transition = { type: "spring", stiffness: 200, damping: 15 };
  const initial = { y: 50, opacity: 0 };
  const animate = { y: 0, opacity: 1 };

  return (
    <div className="container">
      <motion.h2 initial={initial} animate={inHeadingView ? animate : initial} transition={transition} ref={headingRef} className="text-blue-500 text-center text-3xl font-bold py-2 underline underline-offset-4 decoration-orange-600">
        {children}
      </motion.h2>
    </div>
  );
}
