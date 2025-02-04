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
// ++ Try removing the dependency array from useEffect
// and notice the difference in ‘tick’ log messages
// ++ Why do the console messages appear double?

// ++ Watch the console when the Clock is removed
// does the ticking still continue now?

// ++ Try to add another state variable tickCount, to keep
// track of (and display) the number of seconds the clock
// has ticked since mounting. Reset it to 0 on unmount.
// Hint: see here if the counter has issues incrementing
