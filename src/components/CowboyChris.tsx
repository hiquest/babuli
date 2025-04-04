import { motion } from "motion/react";
import { getRandomPair } from "./corners";

type Props = {
  visible: boolean;
  onStop: () => void;
};
const CowboyChris = ({ visible, onStop }: Props) => {
  if (!visible) {
    return null;
  }

  const [c1, c2] = getRandomPair();

  return (
    <motion.div
      className="cowboy cowboy-chris"
      initial={c1}
      animate={c2}
      transition={{
        duration: 4,
        ease: "easeInOut",
      }}
      onAnimationComplete={onStop}
    >
      <img src="/chris.png" className="head" />
      <img src="/dino.png" className="main" />
    </motion.div>
  );
};

export default CowboyChris;
