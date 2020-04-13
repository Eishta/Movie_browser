import axios from 'axios';

const API = {
    HOST: 'https://api.themoviedb.org/3',
    KEY: 'd943bbaf84c7c4a0f898e82204e8ca4c'
}
const PATH = {
    UPCOMING: 'movie/upcoming',
    SEARCH: 'search/movie',
    MOVIE: 'movie'
}

const handleErrors = (res) => {
    if (res.status !== 200) {
        throw Error(res.statusText);
    }
return res;
    
};
const get = ({ path, subpath = '', params = '' }) => {
    const req = `${API.HOST}/${path}${subpath}?api_key=${API.KEY}${params}`;
    return axios.get(req).then(response => handleErrors(response));
};
const movieApi = {
    getUpcomingMovies: () => {
      const config = {
        path: PATH.UPCOMING,
      };
  
      return get(config);
    },
  
    getMovieCredits: (id) => {
      const config = {
        path: PATH.MOVIE,
        subpath: `/${id}/credits`,
      };
  
      return get(config);
    },
  
    getMovie: (id) => {
      const config = {
        path: PATH.MOVIE,
        subpath: `/${id}`,
      };
  
      return get(config);
    },
    search: (query) => {
      const config = {
        path: PATH.SEARCH,
        params: `&query=${query}`,
      };
  
      return get(config);
    },
  };
  
  export default movieApi;