function ucFirstLetters(str) {
  // Initialize empty result string
  let newString = "";

  // Split input string into array of words
  let words = str.split(" ");
  console.log(`Input "${str}" split into words:`, words);

  // Process each word
  for (let word of words) {
    // Add space between words, except before the first word
    if (newString.length != 0) {
      newString += " ";
      console.log("Adding space before new word");
    }

    // Capitalize first letter and append rest of word
    let firstLetter = word.charAt(0).toUpperCase();
    let restOfWord = word.substring(1);
    newString += firstLetter + restOfWord;

    console.log(`Processing word "${word}":`, {
      originalWord: word,
      capitalizedFirst: firstLetter,
      remainingLetters: restOfWord,
      currentResult: newString,
    });
  }

  console.log(`Final result: "${newString}"`);
  return newString;
}

// Test cases
console.log("Test 1:", ucFirstLetters("los angeles")); // Los Angeles
// console.log("Test 2:", ucFirstLetters("nutbush city limits")); // Nutbush City Limits
// console.log("Test 3:", ucFirstLetters("auckland")); // Auckland

function truncate(str, max) {
  if (str.length > max) {
    return str.substring(0, max) + "...";
  } else {
    return str;
  }
}

function truncate(str, max) {
  return str.length > max ? str.substring(0, max) + "..." : str;
}

console.log(truncate("This text will be truncated if it is too long", 25));
