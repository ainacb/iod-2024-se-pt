import { useState } from "react";

export function AddMovieForm({ onAddMovie }) {
  //   const [title, setTitle] = useState("");
  //   const [year, setYear] = useState("");
  //   const [synopsis, setSynopsis] = useState("");

  // ++ add support for the synopsis field as well, here and below
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    console.log("Title: ", formData.get("title"));

    const movieData = {
      title: formData.get("title"),
      year: formData.get("year"),
      sypnosis: formData.get("synopsis"),
    };

    onAddMovie(movieData);

    e.target.reset();

    // onAddMovie({ title, year, synopsis });

    // setTitle("");
    // setYear("");
    // setSynopsis("");
  };
  return (
    <div className="AddMovieForm componentBox">
      <form onSubmit={handleSubmit}>
        <label>
          Movie Title:
          <input
            name="title"
            defaultValue=""
            // value={title}
            // onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Year Released:
          <input
            name="year"
            type="number"
            defaultValue=""
            // value={year}
            // onChange={(e) => setYear(e.target.value)}
          />
        </label>
        <label>
          Synopsis:
          <input
            name="synopsis"
            type="text"
            defaultValue=""
            // value={synopsis}
            // onChange={(e) => setSynopsis(e.target.value)}
          />
        </label>
        <button>Add Movie</button>
      </form>
    </div>
  );
}
