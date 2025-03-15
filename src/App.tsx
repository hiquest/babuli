import { useState } from "react";
import CowboyAnny from "./components/CowboyAnny";
import CowboyChris from "./components/CowboyChris";
import CowboyMom from "./components/CowboyMom";
import CowboyTanya from "./components/CowboyTanya";
import CowboyYanis from "./components/CowboyYanis";
import Sof from "./components/Sof";

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

function App() {
  const [chrisVisible, setChrisVisible] = useState(false);
  const [sofVisible, setSofVisible] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

  function runKid() {
    playMusic();

    if (chrisVisible || sofVisible) {
      return;
    }

    const rand = Math.random();
    if (rand > 0.5) {
      setChrisVisible(true);
    } else {
      setSofVisible(true);
    }
  }

  function playMusic() {
    if (musicPlaying) {
      return;
    }
    setMusicPlaying(true);

    const audio = new Audio("song.mp3");
    audio.play();
  }

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
        <CowboyTanya value={tanyaValue} />
        <CowboyYanis value={yanisValue} />

        <div className="dline dline-1"></div>
        <div className="dline dline-2"></div>
        <div className="dline dline-3"></div>
        <div className="dline dline-4"></div>
        <div className="dline dline-5"></div>

        <CowboyChris
          visible={chrisVisible}
          onStop={() => setChrisVisible(false)}
        />

        <Sof visible={sofVisible} onStop={() => setSofVisible(false)} />
      </div>

      <div className="eiffel" onClick={runKid}>
        <img src="/eifel.png" />
      </div>
      <div className="rainbow-div"></div>

      <div className="bottomInfo"></div>
    </div>
  );
}

export default App;
