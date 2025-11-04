import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function InputArea({ addMovie }) {
  const [title, setTitle] = React.useState("");
  const [rating, setRating] = React.useState("");
  const [review, setReview] = React.useState("");

  const handleAdd = () => {
    if (!title || !rating || !review) return;
    addMovie({ title, rating, review });
    setTitle("");
    setRating("");
    setReview("");
  };

  return (
    <div className="input-area">
      <label>Title:</label>
      <input
        id="title"
        placeholder="Enter movie title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Rating:</label>
      <input
        id="rating"
        placeholder="Enter rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />

      <label>Review:</label>
      <input
        id="review"
        placeholder="Write a short review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <p>Rating: {movie.rating}</p>
      <p>{movie.review}</p>
    </div>
  );
}

function AddMovieCard({ movies }) {
  return (
    <div className="movies-list">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
}

function App() {
  const [movies, setMovies] = React.useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div className="App">
      <h1>🎬 Movie Reviews</h1>
      <InputArea addMovie={addMovie} />
      <AddMovieCard movies={movies} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
