import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IMovie } from '../components/IMovie';
import Movie from '../components/Movie';
import '../assets/scss/detail.scss';

function Detail(props: RouteComponentProps<{}>) {
    useEffect(() => {
        const { location, history } = props;

        if (location.state === undefined) {
            history.push("/");
        }
    });

    const { location } = props;
    const i = location.state as IMovie;

    if(location.state) {
        return (
            <section className="page detail">
                <div className="movieCard">
                <Movie 
                    title_english={i.title_english}
                    year={i.year}
                    large_cover_image={i.large_cover_image}
                    description_full={i.description_full}
                    genres={i.genres}
                    rating={i.rating}
                />
                </div>
            </section>
        );
    }
    else {
        return null;
    }
};

export default Detail;