import CowboyAnny from "./components/CowboyAnny";

function App() {
  return (
    <div className="track">
      <audio src="/song.mp3" autoPlay loop>
        Your browser does not support the audio element.
      </audio>

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
      <CowboyAnny />
    </div>
  );
}

export default App;
