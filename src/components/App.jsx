import React, { useState } from "react";

function App() {
  let [time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", { hour12: false })
  );

  function getTime() {
    setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
  }

  setInterval(getTime, 60 * 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
