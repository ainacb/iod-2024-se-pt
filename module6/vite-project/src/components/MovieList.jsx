import { useState } from "react";
import { AddMovieForm } from "./AddMovieForm";

function Movie({ title, year, synopsis }) {
  return (
    <li>
      <h3>{title}</h3> <span>({year})</span>
      <div>{synopsis}</div>
    </li>
  );
}

export function MoviesList() {
  // collection of objects representing movies

  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      year: 1994,
      synopsis: "Two imprisoned men find redemption.",
    },
    {
      id: 2,
      title: "The Dark Knight",
      year: 2008,
      synopsis: "Batman fights the menace known as the Joker.",
    },
    {
      id: 3,
      title: "Interstellar",
      year: 2014,
      synopsis: "Explorers travel through a wormhole in space.",
    },
  ];

  const [currentMovies, setCurrentMovies] = useState(movies);

  const handleReverseMovies = () => {
    let newMovies = [...currentMovies]; //clone or swallow copy
    newMovies.reverse(); // reversed movies with array method
    setCurrentMovies(newMovies); // updating state with reversed movies
  };

  const movieItems = movies.map((movie, index) => (
    <Movie
      key={movie.id} // key prop is required for lists
      title={movie.title}
      year={movie.year}
      synopsis={movie.synopsis}
    />
  ));

  const handleAddMovie = (newMovie) => {
    newMovie.id = currentMovies.length + 1; // unreliable but succinct
    setCurrentMovies([...currentMovies, newMovie]);
  };

  return (
    <>
      {/* {JSON.stringify(currentMovies, null, 2)} */}
      <div className="MoviesList componentBox">
        <AddMovieForm onAddMovie={handleAddMovie} />
        <button onClick={handleReverseMovies}>Reverse Movies</button>
        <ul>
          {" "}
          {/* iterate over each movie, print the title in a list */}
          {/* {movieItems} */}
          {currentMovies.map((movie) => (
            <Movie
              key={movie.id} // key prop is required for lists
              title={movie.title}
              year={movie.year}
              synopsis={movie.synopsis}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
