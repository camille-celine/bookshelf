import React, { useContext } from 'react';
import '../css/ResultCard.css';
import { GlobalContext } from "../context/GlobalState";
import {Link} from 'react-router-dom';
// movie object as a prop
export const ResultCard = ({movie}) => {
  const { addMovieToWatchlist, addMovieToWatched, watchlist, watched  } = useContext(GlobalContext);

  let storedMovie = watchlist.find(o => o.id === movie.id);
  let storedMovieWatched = watched.find(o => o.id === movie.id);

  const watchlistDisabled = storedMovie ? true : storedMovieWatched ? true : false;
  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img 
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
            alt={`${movie.title} Poster`} 
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title"><Link to={`/add/${movie.title}`} state={{ movie: movie }}>{movie.title}</Link></h3>
          <h4 className="release-date">
            {movie.release_date ? (movie.release_date.substring(0, 4)) : "~"}
          </h4>
        </div>

        <div className="controls">
          <button 
            className="btn"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
              + Watchlist
          </button>
          <button 
            className="btn"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
              + Watched
          </button>
        </div>
      </div>
    </div>
  )
}

