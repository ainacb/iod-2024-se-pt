// separate component for displaying each movie
function Movie({title, year, synopsis}) {
    return (
    <li>
        <h3>{title}</h3> <span>({year})</span>
            <div>{synopsis}</div>
    </li>
    );
    }

function MoviesList() {
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

    const movieItems = movies.map((movie, index) => (
        <Movie 
        key={movie.id} // key prop is required for lists
        title={movie.title}
        year={movie.year}
        synopsis={movie.synopsis}
        />
    ));
    

    return (
    <div className="MoviesList componentBox">
        <ul> 
        {" "}
        {/* iterate over each movie, print the title in a list */}
        {movieItems}
        </ul>
    </div>
    );
}

    export { MoviesList };