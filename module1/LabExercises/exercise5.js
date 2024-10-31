//LAB EXERCISE 5

//5 element array

let weather = ["Sunny", "Cloudy", "Windy", "Rainy", "Snowy"];

console.log(weather[0]);
console.log(weather[1]);
console.log(weather[2]);
console.log(weather[3]);
console.log(weather[4]);

//replace value

weather[1] = "Foggy";
console.log(weather[1]);

weather[4] = "Stormy";
console.log(weather[4]);

//new element at beginning of array

weather.unshift("Blizzard");
console.log(weather);

//remove element at end

weather.pop();
console.log(weather);
