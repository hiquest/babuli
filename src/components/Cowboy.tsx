import { motion } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";

type Props = {
  value: number;
  className: string;
  cowboyPath: string;
  facePath: string;
};

const Cowboy = ({ value, className, cowboyPath, facePath }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [elHeight, setElHeight] = useState(0);

  useLayoutEffect(() => {
    if (ref.current) {
      setElHeight(ref.current.getBoundingClientRect().height);
    }
  }, []);

  return (
    <motion.div
      ref={ref}
      className={`cowboy ${className}`}
      initial={{ top: "0%" }} // Start from top: 0%
      animate={{
        top: `calc(${value}% - ${elHeight / 2}px)`, // Move to top: 100%
        y: ["0%", "10%", "-10%", "0%"],
        rotate: ["-3deg", "3deg", "-3deg"],
      }}
      transition={{
        top: { duration: 2, ease: "easeInOut" }, // Transition for changing top
        default: {
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }, // Looping animation
      }}
    >
      <img src={facePath} className="head" />
      <img src={cowboyPath} className="main" />
    </motion.div>
  );
};

export default Cowboy;
