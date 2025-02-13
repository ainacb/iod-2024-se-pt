import { useState } from "react";

function Emoji() {
  const [mood, setMood] = useState("happy ");

  const handleChangeMood = () => {
    let newMood = "🤣";
    if (mood === "🤣") newMood = "🤦‍♀️";
    else if (mood === "🤦‍♀️") newMood = "😒";
    else if (mood === "😒") newMood = "🏳️";

    setMood(newMood);
  };

  return (
    <div className="Emoji componentBox">
      Current Mood: {mood}
      <br />
      <button onClick={handleChangeMood}>Change Mood</button>
    </div>
  );
}

export default Emoji;
