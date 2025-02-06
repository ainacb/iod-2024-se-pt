import { useState, useEffect } from "react";
// Renders a digital time that updates every second

export function Clock() {
  const [date, setDate] = useState(new Date());
  const [tickCount, setTickCount] = useState(0); // New state variable

  useEffect(() => {
    // first arg is usually an arrow function
    let clockInterval = setInterval(() => tick(), 1000);
    console.log("Clock component mounted");

    return () => {
      console.log("Clock component unmounted");
      clearInterval(clockInterval);
      setTickCount(0); // Reset tick count on unmount
    };
  }, []); // second arg is an array of dependencies

  const tick = () => {
    setDate(new Date());
    setTickCount((prevCount) => prevCount + 1); // Ensure correct state update
    console.log("tick", tickCount + 1); // track the effect frequency // Log the tick count
  };

  return (
    <div className="Clock">
      <h3>Digital Clock</h3>
      {date.toLocaleTimeString()}
      <p>Seconds since mount: </p>
      {tickCount}
    </div>
  );
}
