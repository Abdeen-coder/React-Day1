import "./App.css";
import { useState } from "react";
import Search from "./Search";
import Moviecard from "./moviecard";

// Import images
import herculesImg from "./assets/hercules.jpg";
import lionKingImg from "./assets/lionKing.jpg";
import bigHeroImg from "./assets/bighero6.jpg";
import klausImg from "./assets/klaus.jfif";
import tarzanImg from "./assets/Tarazan.webp"
import ironGiantImg from "./assets/IronGiant.jfif"
import aladdinImg from "./assets/Aladdin.jfif"
import BeautyAndTheBeastImg from "./assets/BeautyAndTheBeast.jpg"


function App() {

  const [movies, setMovies] = useState([
    { id: 1, title: "Hercules", releaseYear: 1997, price: 100, image: herculesImg },
    { id: 2, title: "Big Hero 6", releaseYear: 2014, price: 150, image: bigHeroImg },
    { id: 3, title: "Klaus", releaseYear: 2019, price: 202, image: klausImg },
    { id: 4, title: "The Lion King", releaseYear: 1994, price: 500, image: lionKingImg },
    { id: 5, title: "Tarzan", releaseYear: 1999, price: 500, image: tarzanImg },
    { id: 6, title: "The Iron Giant", releaseYear: 1999, price: 600, image: ironGiantImg},
    { id: 7, title: "Aladdin", releaseYear: 1992, price: 550, image: aladdinImg },
    { id: 8, title: "Beauty and the Beast", releaseYear: 1991, price: 350, image: BeautyAndTheBeastImg },
  ]);

// Update the price of a movie
const updatePrice = (id) => {
  // Copy the state
  const updatedMovies = structuredClone(movies);

  // Find the movie by ID
  const movie = updatedMovies.find((movie) => movie.id === id);
  
  // Update 
  if (movie) {
    movie.price += 100;
  }
  // Set the updated state
  setMovies(updatedMovies);
};

// Delete a movie
const deleteMovie = (id) => {
  const updatedMovies = structuredClone(movies);
  const filteredMovies = updatedMovies.filter((movie) => movie.id !== id);
  setMovies(filteredMovies);
};

const [search, setSearch] = useState(""); // Store user input


// Filter movies based on search term
const filteredMovies = movies.filter((movie) =>
  movie.title.toLowerCase().includes(search.toLowerCase())
);

// Handle user search input
const handleSearch = (x) => {
  setSearch(x);
};


return (
  <>
    <Search search={handleSearch} />

    <div className="container">
      <h1>Great Movies</h1>
      <hr />
      <div className="row my-5">
        {/* If there are no matches */}
        {search.length > 0 && filteredMovies.length === 0 ? (
          <div className="text-center mt-4">
            <h4>No movies found.</h4>
            <p>Try searching for something else.</p>
          </div>
        ) : (
          // If there are matching movies, display them
          filteredMovies.map((movie) => (
            <div key={movie.id} className="col-md-3 col-sm-6 mb-4">
              <Moviecard
                movie={movie}
                updatePrice={updatePrice}
                deleteMovie={deleteMovie}
              />
            </div>
          ))
        )}
      </div>
    </div>
  </>
);
}

export default App;
