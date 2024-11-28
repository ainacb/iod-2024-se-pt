// 1. makeCounter below is a decorator function which creates and returns a function that increments a counter.
// a) Create a second counter counter2 using the makeCounter function and test to see if it remains independent to counter1
// -- it is independent
// b) Modify makeCounter so that it takes an argument startFrom specifying where the counter starts from (instead of always starting from 0)
// c) Modify makeCounter to take another argument incrementBy, which specifies how much each call to counter() should increase the counter value by.

// a
// function makeCounter() {
//   let currentCount = 0;

//   return function () {
//     currentCount++;
//     console.log(currentCount);
//     return currentCount;
//   };
// }

// let counter1 = makeCounter();

// counter1(); // 1
// counter1(); // 2
// counter1(); // 3
// counter1(); // 4
// counter1(); // 5

// let counter2 = makeCounter();

// counter2(); // 1
// counter2(); // 2
// counter2(); // 3
// counter2(); // 4
// counter2(); // 5

// b

// function makeCounter(startFrom) {
//   let currentCount = startFrom;

//   return function () {
//     currentCount++;
//     console.log(currentCount);
//     return currentCount;
//   };
// }

// let counter3 = makeCounter(5);

// counter3(); // 6
// counter3(); // 7
// counter3(); // 8
// counter3(); // 9
// counter3(); // 10

// let counter4 = makeCounter(20);

// counter4(); // 21
// counter4(); // 22
// counter4(); // 23
// counter4(); // 24
// counter4(); // 25

// c

function makeCounter(startFrom, incrementBy) {
  let currentCount = startFrom;

  return function () {
    currentCount += incrementBy;
    console.log(currentCount);
    return currentCount;
  };
}

let counter5 = makeCounter(10, 3);

counter5(); // 13
counter5(); // 16
counter5(); // 19
counter5(); // 22
counter5(); // 25

let counter6 = makeCounter(30, 5);

counter6(); // 35
counter6(); // 40
counter6(); // 45
counter6(); // 50
counter6(); // 55
