import { motion } from "motion/react";
import { useState } from "react";
import CowboyAnny from "./components/CowboyAnny";
import CowboyMom from "./components/CowboyMom";
import CowboyTanya from "./components/CowboyTanya";
import CowboyYanis from "./components/CowboyYanis";

const startDate = new Date("2025-03-01");
const endDate = new Date("2025-08-31");
const today = new Date();

const totalNumberOfDays =
  (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);

const daysPassed =
  Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) +
  1;

const data = {
  anny: {
    start: 75_000,
    target: 70_000,
    current: 75_000,
  },
  vt: {
    start: 78_000,
    target: 72_000,
    current: 77_900,
  },
  tanya: {
    start: 77_500,
    target: 73_000,
    current: 77_500,
  },
  yanis: {
    start: 67_500,
    target: 63_000,
    current: 67_500,
  },
};

const anny = data.anny;

// calculate current progress in %
const annyValue = Math.floor(
  ((anny.current - anny.start) / (anny.target - anny.start)) * 100
);

const vt = data.vt;
const momValue = Math.floor(
  ((vt.current - vt.start) / (vt.target - vt.start)) * 100
);

const tan = data.tanya;
const tanyaValue = Math.floor(
  ((tan.current - tan.start) / (tan.target - tan.start)) * 100
);

const yanis = data.yanis;
const yanisValue = Math.floor(
  ((yanis.current - yanis.start) / (yanis.target - yanis.start)) * 100
);

const corners = {
  topLeft: { top: 0, left: 0 },
  topRight: { top: 0, left: "calc(100% - 50px)" },
  bottomLeft: { top: "calc(100% - 50px)", left: 0 },
  bottomRight: { top: "calc(100% - 50px)", left: "calc(100% - 50px)" },
};

function App() {
  const [startPressed, setStartPressed] = useState(false);
  const [chrisVisible, setChrisVisible] = useState(false);

  const [position, setPosition] = useState(corners.topLeft);

  // Returns a random corner key
  const getRandomCorner = (corners) => {
    const keys = Object.keys(corners);
    return corners[keys[Math.floor(Math.random() * keys.length)]];
  };

  const startAnimation = () => {
    // Set the initial position
    const fromCorner = getRandomCorner(corners);
    // Set the target position
    let toCorner = getRandomCorner(corners);

    while (fromCorner === toCorner) {
      toCorner = getRandomCorner(corners);
    }

    // Show cowboy at a random corner
    setPosition(fromCorner);
    setChrisVisible(true);

    // Move to the next random corner after a short delay
    setTimeout(() => {
      setPosition(toCorner);

      // Hide cowboy after moving
      setTimeout(() => setChrisVisible(false), 2000); // Adjust duration based on your needs
    }, 2000);
  };

  return (
    <div className="track">
      <audio src="song.mp3" autoPlay loop>
        Your browser does not support the audio element.
      </audio>
      <div className="topInfo">
        День <b>{daysPassed}</b> из <b>{totalNumberOfDays}</b>
      </div>

      <div className="inner-track">
        <CowboyAnny value={annyValue} />
        <CowboyMom value={momValue} />
        {/* <CowboyChris value={50} />*/}
        <CowboyTanya value={tanyaValue} />
        <CowboyYanis value={yanisValue} />

        <div className="dline dline-1"></div>
        <div className="dline dline-2"></div>
        <div className="dline dline-3"></div>
        <div className="dline dline-4"></div>
        <div className="dline dline-5"></div>

        {chrisVisible && (
          <motion.div
            className="cowboy cowboy-chris"
            initial={position}
            animate={position}
            transition={{ duration: 2 }} // Adjust duration for smoother animations
          >
            <img src="/chris.png" className="head" />
            <img src="/c3.png" className="main" />
          </motion.div>
        )}
      </div>

      <div
        className="eiffel"
        onClick={() => {
          startAnimation();
        }}
      >
        <img src="/eifel.png" />
      </div>
      <div className="rainbow-div"></div>

      <div className="bottomInfo"></div>
    </div>
  );
}

export default App;
