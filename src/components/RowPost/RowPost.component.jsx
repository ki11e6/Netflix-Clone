import './RowPost.styles.css';
import { useEffect, useState } from 'react';
import axios from '../../axios';
import { imageUrl, API_KEY } from '../../constants/constants';
import YouTube from 'react-youtube';

const RowPost = (probs) => {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');

  useEffect(() => {
    axios
      .get(probs.url)
      .then((response) => {
        setMovies(response.data.results);
        console.log(movies);
      })
      .catch((error) => alert('Api error!'));
  }, []);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log(id);
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log('Array Empty');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="row">
      <h2>{probs.title}</h2>
      <div className="posters">
        {movies.map((movie, index) => (
          <img
            onClick={() => handleMovie(movie.id)}
            className={probs.isSmall ? 'smallPoster' : 'poster'}
            src={`${imageUrl + movie.backdrop_path}`}
            alt="poster"
          />
        ))}
      </div>
      {urlId && <YouTube opts={opts} videoId={urlId.key} />}
    </div>
  );
};
export default RowPost;
