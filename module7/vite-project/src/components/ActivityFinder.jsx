import { useState, useEffect } from "react";
import { useData } from "../hooks/useData";

export function ActivityFinder() {
  // Fetches a random activity
  const [participants, setParticipants] = useState(1);
  // const [activity, setActivity] = useState("");

  const data = useData(
    "https://bored.api.lewagon.com/api/activity?" +
      "participants=" +
      participants
  );
  // get the activity from the json or show error message if failed
  const activity = data ? data.activity : "not found";

  // useEffect(() => {
  //   console.log("running effect");
  //   let ignore = false; // flag to allow ignoring of the fetch result

  //   fetch(
  //     "https://bored.api.lewagon.com/api/activity?" +
  //       "participants=" +
  //       participants
  //   )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       if (!ignore) setActivity(json.activity);
  //     });

  //   // cleanup function - runs when unmounted or dependencies change
  //   return () => {
  //     ignore = true; // ignore now invalid fetch results
  //     console.log("cleanup effect");
  //   };
  // }, [participants]);

  return (
    <div className="ActivityFinder componentBox">
      <h3>Activity Finder</h3>
      <label>
        Choose number of participants:
        <select
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </label>
      <div>
        <strong>Suggested Activity: </strong>
        {activity}
      </div>
    </div>
  );
}
