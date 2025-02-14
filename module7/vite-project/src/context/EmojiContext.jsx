import React, { useState, useContext } from "react";

// create context
const EmojiContext = React.createContext();

// create custom provider to keep track of emoji state
export const EmojiProvider = (props) => {
  const [emoji, setEmoji] = useState("😃");

  // set emoji in state and share via context //redundant part, can be commented out and remove hadleUpdateEmoji in return
  const handleUpdateEmoji = (emoji) => {
    setEmoji(emoji);
  };

  // switch emoji in current state
  const setNewEmoji = () => {
    let newEmoji = "🤣";
    if (emoji === "🤣") newEmoji = "🤦‍♀️";
    else if (emoji === "🤦‍♀️") newEmoji = "😒";
    else if (emoji === "😒") newEmoji = "🏳️";
    setEmoji(newEmoji);
  };

  // provide the context. sends data via the value prop to all children component at every
  return (
    <EmojiContext.Provider value={{ emoji, handleUpdateEmoji, setNewEmoji }}>
      {props.children}
    </EmojiContext.Provider>
  );
};

export const useEmojiContext = () => {
  return useContext(EmojiContext);
};
