import { useState } from "react";

function Emoji() {
const [mood, setMood] = useState('happy ');

const lol = () => {
    setMood('🤣 ')
}
 
const facePalm = () => {
    setMood('🤦‍♀️ ')
}

return (
<div className="Emoji componentBox">
Current Mood: {mood}


<button onClick={lol}>lol</button>
<button onClick={facePalm}>facepalm</button>
</div>
)
}

export default Emoji;