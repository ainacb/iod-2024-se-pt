// 1.

console.log(ucFirstLetters("los angeles")); //Los Angeles

function ucFirstLetters(string) {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(ucFirstLetters("los angeles"));
console.log(ucFirstLetters("new york city"));

// 2.
