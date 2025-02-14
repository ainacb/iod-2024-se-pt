// import { useState } from "react"; // can be removed once EmojiContext is okay
import { useEmojiContext } from "../context/EmojiContext";

function Emoji() {
  const { emoji, setNewEmoji } = useEmojiContext();

  // can be removed once EmojiContext is okay
  // const [emoji, setEmoji] = useState("😃 ");

  // const setNewEmoji = () => {
  //   let newEmoji = "🤣";
  //   if (emoji === "🤣") newEmoji = "🤦‍♀️";
  //   else if (emoji === "🤦‍♀️") newEmoji = "😒";
  //   else if (emoji === "😒") newEmoji = "🏳️";

  //   setEmoji(newEmoji);
  // };

  return (
    <div className="Emoji componentBox">
      Current Emoji: {emoji}
      <br />
      <button onClick={setNewEmoji}>Change Emoji</button>
    </div>
  );
}

export { Emoji };
