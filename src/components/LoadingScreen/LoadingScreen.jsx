import CountUp from "../CountUp/CountUp";
import "./LoadingScreen.css";

export default function LoadingScreen() {
  return (
    <div className="loading-container">
      <h1 className="loading-title">Loading</h1>

      <CountUp
        from={0}
        to={100}
        duration={2}
        className="loading-number"
        onEnd={() => console.log("Loading complete")}
      />

      <span className="loading-percent">%</span>
    </div>
  );
}
