import { motion } from "motion/react";
import { getRandomPair } from "./corners";

type Props = {
  visible: boolean;
  onStop: () => void;
};

const Sof = ({ visible, onStop }: Props) => {
  if (!visible) {
    return null;
  }

  const [c1, c2] = getRandomPair();

  if (!visible) {
    return null;
  }

  return (
    <motion.div
      className="cowboy cowboy-sof"
      initial={c1}
      animate={c2}
      transition={{
        duration: 4,
        ease: "easeInOut",
      }}
      onAnimationComplete={onStop}
      key={Math.random()}
    >
      <img src="/sof.png" className="head" />
      <img src="/cat.png" className="main" />
    </motion.div>
  );
};

export default Sof;
