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
console.log(findMatchingAnimals("A"));
console.log(findMatchingAnimals("w"));
console.log(findMatchingAnimals("z"));
console.log(findMatchingAnimals("B"));

// 4.

function camelCase(ccsprop) {
  return ccsprop
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}

console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display

// for loop
function camelCase(cssProp) {
  const words = cssProp.split("-");
  let result = words[0];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    result += word.charAt(0).toUpperCase() + word.slice(1);
  }

  return result;
}

console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display

// for...of loop

function camelCase(cssProp) {
  const words = cssProp.split("-");
  let result = "";

  for (const [index, word] of words.entries()) {
    result += index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
  }

  return result;
}

console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display

// with conditional operator

function camelCase(cssProp) {
  return cssProp
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}

console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display

// without contional operator

function camelCase(cssProp) {
  const words = cssProp.split("-");
  let result = words[0]; // Start with the first word

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    result += word.charAt(0).toUpperCase() + word.slice(1);
  }

  return result;
}

console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display

// 5
// a) Explain why the above code returns the wrong answer
// `toFixed` method converts numbers to strings. As a result, when `fixedTwenty` and `fixedTen` was added together, it performs string concatenation, not numerical addition.

// b) Create a function currencyAddition(float1, float2) which safely adds the two decimal numbers float1 and float2 and returns the correct float result.
function currencyAddition(float1, float2) {
  const factor = 100;
  return (Math.round(float1 * factor) + Math.round(float2 * factor)) / factor;
}

console.log(currencyAddition(0.1, 0.2)); // 0.3

// c) Create a function currencyOperation(float1, float2, operation) which safely performs the given operation (either +, -, / or *) on the two numbers and returns the correct float result. https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Statements/switch may be useful.

function currencyOperation(float1, float2, operation) {
  const factor = 100; // Assume 2 decimal places
  const num1 = Math.round(float1 * factor);
  const num2 = Math.round(float2 * factor);
  let result;

  switch (operation) {
    case "+":
      result = (num1 + num2) / factor;
      break;
    case "-":
      result = (num1 - num2) / factor;
      break;
    case "*":
      result = (num1 * num2) / (factor * factor);
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      throw new Error("Invalid operation");
  }

  return result;
}

console.log(currencyOperation(0.1, 0.2, "+")); // 0.3
console.log(currencyOperation(0.2, 0.1, "-")); // 0.1
console.log(currencyOperation(0.1, 0.2, "*")); // 0.02
console.log(currencyOperation(0.2, 0.1, "/")); // 2

// d) (Extension) Extend the above function to include a fourth argument numDecimals which allows the operation to support different amounts of decimal places from 1 to 10.

function currencyOperationExtended(float1, float2, operation, numDecimals = 2) {
  const factor = Math.pow(10, numDecimals);
  const num1 = Math.round(float1 * factor);
  const num2 = Math.round(float2 * factor);
  let result;

  switch (operation) {
    case "+":
      result = (num1 + num2) / factor;
      break;
    case "-":
      result = (num1 - num2) / factor;
      break;
    case "*":
      result = (num1 * num2) / (factor * factor);
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      throw new Error("Invalid operation");
  }

  return parseFloat(result.toFixed(numDecimals));
}

console.log(currencyOperationExtended(0.1, 0.2, "+", 2)); // print 0.3
console.log(currencyOperationExtended(0.12345, 0.6789, "+", 5)); // 0.80235
console.log(currencyOperationExtended(0.2, 0.1, "-", 3)); // 0.100
console.log(currencyOperationExtended(0.1, 0.2, "*", 4)); // 0.0200
console.log(currencyOperationExtended(0.2, 0.1, "/", 6)); // 2.000000

// 6. Create a function unique(duplicatesArray) which takes an array parameter that may include duplicates. Your function should return an array containing only the unique values from duplicatesArray.
// Test with the following arrays and create another one of your own.

const colours = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

console.log(unique(colours)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]

function unique(duplicatesArray) {
  return [...new Set(duplicatesArray)];
}

const fruits = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "grape",
  "orange",
  "banana",
  "grape",
];
console.log(unique(fruits)); // [ 'apple', 'banana', 'orange', 'grape' ]

// 7. Use the following array of book objects to practice the array functions for map, find and filter. Test each of your answers to the below tasks.
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];

// a) Write a function getBookTitle(bookId) that uses the find function to return the title of the book object with the matching id.

function getBookTitle(bookId) {
  const book = books.find((b) => b.id === bookId);
  return book ? book.title : "Book not found";
}
console.log(getBookTitle(3)); // '1984'

// b) Write a function getOldBooks() that uses the filter function to return all book objects written before 1950.

function getOldBooks() {
  return books.filter((b) => b.year < 1950);
}
console.log(getOldBooks());

// [
//   { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
//   { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
//   { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 }
// ]

// c) Write a function addGenre() that uses the map function to add a new genre property to all of the above books, with the value ‘classic’.

function addGenre() {
  return books.map((b) => ({ ...b, genre: "classic" }));
}
console.log(addGenre());

// [
//   { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, genre: 'classic' },
//   ...
// ]

// d) (Extension) Write a function getTitles(authorInitial) that uses map and filter together to return an array of book titles for books written by authors whose names start with authorInitial.

function getTitles(authorInitial) {
  return books
    .filter((b) => b.author.startsWith(authorInitial))
    .map((b) => b.title);
}
console.log(getTitles("F")); // ['The Great Gatsby']

// e) (Extension) Write a function latestBook() that uses find and forEach to get the book with the most recent publication date.

function latestBook() {
  let latest = books[0];
  books.forEach((b) => {
    if (b.year > latest.year) {
      latest = b;
    }
  });
  return latest;
}
console.log(latestBook());
// { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }

// 8. The following code creates a new Map object for storing names beginning with A, B, or C with their phone numbers.

const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");

// a) Create a new phoneBookDEF Map to store names beginning with D, E or F

const phoneBookDEF = new Map();

// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values

phoneBookDEF.set("Dave", "0478123456");
phoneBookDEF.set("Elsa", "0423456789");
phoneBookDEF.set("Fe", "0487654321");

// c) Update the phone number for Caroline

phoneBookABC.set("Caroline", "0455000123");

// d) Write a function printPhoneBook(contacts) that prints the names and phone numbers in the given Map

function printPhoneBook(contacts) {
  contacts.forEach((name, phone) => {
    console.log(`${name}: ${phone}`);
  });
}

console.log("PhoneBook ABC:");
printPhoneBook(phoneBookABC);

console.log("PhoneBook DEF:");
printPhoneBook(phoneBookDEF);

// e) Combine the contents of the two individual Maps into a single phoneBook Map

const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

// f) Print out the full list of names in the combined phone book

console.log("Combined PhoneBook:");
phoneBook.forEach((phone, name) => {
  console.log(`${name}: ${phone}`);
});

//9. Given the below salaries object, perform the following tasks.

let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};

// a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries

function sumSalaries(salaries) {
  return Object.values(salaries).reduce((sum, salary) => sum + salary, 0);
}
console.log("Total Salaries:", sumSalaries(salaries)); // Total Salaries: 233000

// b) Write a function topEarner(salaries) that calculates and returns the name of the person earning the highest salary

function topEarner(salaries) {
  let highestSalary = 0;
  let topEarnerName = "";

  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > highestSalary) {
      highestSalary = salary;
      topEarnerName = name;
    }
  }
  return topEarnerName;
}
console.log("Top Earner:", topEarner(salaries)); // Top Earner: Christina

// 10. The following code uses the Date object to print the current time and the number of hours that have passed today so far. Extend the code to do the following:

const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");

// a) Print the total number of minutes that have passed so far today

const minutesPassedToday = today.getHours() * 60 + today.getMinutes();
console.log(minutesPassedToday + " minutes have passed so far today");

// b) Print the total number of seconds that have passed so far today

const secondsPassedToday = minutesPassedToday * 60 + today.getSeconds();
console.log(secondsPassedToday + " seconds have passed so far today");

// c) Calculate and print your age as: 'I am x years, y months and z days old'

function calculateAge(birthDate) {
  const now = new Date();
  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();

  if (days < 0) {
    months -= 1;
    const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += previousMonth.getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return `I am ${years} years, ${months} months, and ${days} days old`;
}

const myBirthDate = new Date(1993, 10, 20); // Replace with your actual birthdate (year, month-1, day)
console.log(calculateAge(myBirthDate));

// d) Write a function daysInBetween(date1, date2) which calculates and returns the amount of days in between the two given dates.

function daysInBetween(date1, date2) {
  const diffTime = Math.abs(date2 - date1);
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

const date1 = new Date(2020, 0, 15); // Example date
const date2 = new Date(); // Current date
console.log(
  `There are ${daysInBetween(
    date1,
    date2
  )} days between ${date1.toDateString()} and ${date2.toDateString()}`
);
