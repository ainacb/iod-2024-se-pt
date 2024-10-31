//LAB EXERCISE 6

const book = {
  title: "El Filibusterismo",
  description:
    "The Reign of Greed, is the second novel written by José Rizal. It is the sequel to Noli Me Tángere and, like the first book, was written in Spanish. It was first published in 1891 in Ghent.",
  author: "Jose Rizal",
  number_of_pages: "368", // should have no space in between, eg: number of page should be number_of_pages or numberOfPage
};

console.log(book.title);
console.log(book.description);
console.log(book.author);
console.log(book.number_of_pages);
console.log(book);

book.description = "The Subversive";
console.log(book.description);
