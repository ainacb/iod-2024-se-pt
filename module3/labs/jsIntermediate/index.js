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

console.log(truncate("This text will be truncated if it is too long", 25));
// This text will be truncat...

function truncate(text, maxLength) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  } else {
    return text;
  }
}

console.log(truncate("Short text", 20));
// Output: "Short text" (No truncation)

console.log(truncate("Another example of truncation happening here", 10));
// Output: "Another ex..."

function truncate(str, max) {
  // Check if the string's length exceeds the maximum allowed length
  if (str.length > max) {
    // Truncate the string to the maximum length and append an ellipsis
    return str.slice(0, max) + "…";
  } else {
    // Return the original string if it's within the allowed length
    return str;
  }
}

// Example usage:
console.log(truncate("This text will be truncated if it is too long", 25));
// Output: "This text will be truncat…"

console.log(truncate("Short text", 20));
// Output: "Short text"

console.log(truncate("An even shorter example", 10));
// Output: "An even s…"

function truncate(str, max) {
  return str.length > max ? str.slice(0, max) + "…" : str;
}

// Example usage:
console.log(truncate("This text will be truncated if it is too long", 25));
// Output: "This text will be truncat…"

console.log(truncate("Short text", 20));
// Output: "Short text"

console.log(truncate("An even shorter example", 10));
// Output: "An even s…"

// 3.
const animals = ["Tiger", "Giraffe"];

animals.push("Lion", "Elephant");

animals.unshift("Kangaroo", "Koala");

animals.sort();

console.log(animals);

function replaceMiddleAnimal(newValue) {
  const middleIndex = animals.length / 2;
  animals[middleIndex] = newValue;
}

replaceMiddleAnimal("Wombat");

console.log(animals);

function findMatchingAnimals(beginsWith) {
  return animals.filter((animal) =>
    animal.toLowerCase().startsWith(beginsWith.toLowerCase())
  );
}

console.log(findMatchingAnimals("e"));
console.log(findMatchingAnimals("K"));
console.log(findMatchingAnimals("t"));
console.log(findMatchingAnimals("L"));
console.log(findMatchingAnimals("g"));
