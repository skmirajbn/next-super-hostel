import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// eslint-disable-next-line react/prop-types
export default function MotionWrapScale({ children }) {
  const [headingRef, inHeadingView] = useInView();
  const transition = { type: "spring", stiffness: 200, damping: 15 };
  const initial = { scale: 0.5, opacity: 0 };
  const animate = { scale: 1, opacity: 1 };

  return (
    <motion.div initial={initial} animate={inHeadingView ? animate : initial} transition={transition} ref={headingRef}>
      {children}
    </motion.div>
  );
}
