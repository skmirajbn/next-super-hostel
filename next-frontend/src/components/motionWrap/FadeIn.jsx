import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// eslint-disable-next-line react/prop-types
export default function FadeIn({ children }) {
  const [headingRef, inHeadingView] = useInView();
  const transition = { duration: 0.2 };
  const initial = { y: -20, opacity: 0 };
  const animate = { y: 0, opacity: 1 };

  return (
    <motion.div initial={initial} animate={inHeadingView ? animate : initial} transition={transition} ref={headingRef}>
      {children}
    </motion.div>
  );
}
