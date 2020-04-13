import React from 'react';
import movieApi from '../api/movieApi';
import './MovieDetail.css';
import Header from './Header';


const mapData = ({ cast = [], crew = [] }) => {
    const castArray = [];
    let director = '';
    cast.forEach(member => {
        castArray.push(member.name);
    });
    director = crew.find(member => member.job === 'Director').name;
    return {
        cast: castArray.join(', '),
        director
    }
}

class MovieDetail extends React.Component {
    state = {
        movie: {},
        cast: {}
    };
    componentDidMount() {
        this.getMovieAndCredits();
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.getMovieAndCredits();
        }
    }
    getMovieAndCredits() {
        const { id } = this.props.match.params;
        movieApi.getMovie(id).then(res =>
            this.setState({ movie: res.data }));
        movieApi.getMovieCredits(id)
            .then((response) => {
                this.setState({ cast: mapData(response.data) });
            })
            .catch((err) => {
                throw Error(err.message);
            });
    }

    render() {

        const { original_title, release_date, overview, poster_path, vote_average } = this.state.movie;
        const { cast, director } = this.state.cast;
        return (
            <div>

                <Header page='details'/>
   
                <div className={Object.entries(this.state.movie).length ? "ui items segment" : "ui loading segment"}>
                    <div className="item">
                        <div className="ui small image">
                            <img src={`http://image.tmdb.org/t/p/w185${poster_path}`} alt="image1" />
                        </div>
                        <div className="content Details">
                            <span className="heading">{original_title}</span>
                            <span className="light" >({vote_average}) </span>
                            <div className="meta">{new Date(release_date).getFullYear()} | {director}</div>
                            <div className="description">
                                <label className="label">Cast:</label>
                                <p className="desc">  {cast} </p><br />
                                <label className="label"> Description:</label>
                                <p className="desc">{overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default MovieDetail;
