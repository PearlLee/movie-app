import React, { useState, useEffect } from 'react';
import { IMovie } from '../components/IMovie';
import { Link } from 'react-router-dom';
import Movie from '../components/Movie';
import axios from 'axios';
import '../assets/scss/Movie.scss';

const MovieList: IMovie[] = [];

function PageMovie() {
    const [loading, isLoading] = useState(false);
    const [movie, setMovie] = useState(MovieList);

    async function getMovies() {
        const {
            data: {
                data: { movies },
            },
        } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");

        setMovie(movies as IMovie[]);

        isLoading(true);
    }

    useEffect(() => {
        getMovies();
    }, []);

    const movieItems = movie.map((i: IMovie, index) =>
        (
        <li key={index}>
            <Link to={{
                pathname: '/movie-detail',
                state: i
            }}>
            <Movie 
                title_english={i.title_english}
                year={i.year}
                large_cover_image={i.large_cover_image}
                description_full={i.description_full}
                genres={i.genres}
                rating={i.rating}
            />
            </Link>
        </li>
        )
    );

    return (
        <section className="page movie">
            {loading ? (
                <ul className="movieList">
                    {movieItems}
                </ul>) : (<div className="loader">loading</div>)}
        </section>
    );
}

export default PageMovie;