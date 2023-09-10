import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Button({ className, children }) {
  const [refButton, inView] = useInView();
  const hidden = { opacity: 0, y: -20 };
  const visible = { opacity: 1, y: 0 };
  const transition = { delay: ".2", type: "spring", stiffness: 60, damping: 7 };
  return (
    <motion.button ref={refButton} animate={inView ? visible : hidden} initial={hidden} transition={transition} className={className}>
      {children}
    </motion.button>
  );
}
