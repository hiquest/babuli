import CowboyAnny from "./components/CowboyAnny";
import CowboyChris from "./components/CowboyChris";
import CowboyMom from "./components/CowboyMom";
import CowboyTanya from "./components/CowboyTanya";

const startDate = new Date("2025-03-01");
const endDate = new Date("2025-08-31");
const today = new Date();

const totalNumberOfDays =
  (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);

const daysPassed = Math.floor(
  (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
);

const data = {
  anny: {
    start: 75_000,
    target: 70_000,
    current: 74_000,
  },
  vt: {
    start: 80_000,
    target: 74_000,
    current: 76_000,
  },
  tanya: {
    start: 80_000,
    target: 74_000,
    current: 76_000,
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

function App() {
  return (
    <div className="track">
      <audio src="song.mp3" autoPlay loop>
        Your browser does not support the audio element.
      </audio>
      <div className="topInfo">
        День <b>{daysPassed}</b> из <b>{totalNumberOfDays}</b>
      </div>

      <div className="inner-track">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="handDrawnPattern"
              width="40"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path className="hand-drawn-line" d="M5,0 Q6,10 5,20 T5,40" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#handDrawnPattern)" />
        </svg>
        <CowboyAnny value={annyValue} />
        <CowboyMom value={momValue} />
        <CowboyChris value={50} />
        <CowboyTanya value={tanyaValue} />
      </div>

      <div className="eiffel">
        <img src="/eifel.png" />
      </div>
      <div className="rainbow-div"></div>

      <div className="bottomInfo"></div>
    </div>
  );
}

export default App;
