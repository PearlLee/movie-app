import React from 'react';
import { IMovie } from './IMovie';
import { svgURI } from './svgURI';
import { ReactComponent as Star } from '../assets/svg/star.svg';
import { ReactComponent as StarBorder } from '../assets/svg/star_border.svg';

function Movie({ title_english, year, description_full, genres, large_cover_image, rating }: IMovie) {
    const ratingStyle = rating * 10 + '%';

    const styles = {
        rating_background: {
            backgroundImage: svgURI(<StarBorder fill={"rgba(255,255,255, .2)"} />),
        },
        rating: {
            width: ratingStyle,
            backgroundImage: svgURI(<Star fill={"#cfd8dc"} />),
        }
    }

    return <span>
        <dl>
        <dt className="blind">title</dt>
        <dd>{title_english}</dd>
        </dl>
        <dl>
        <dt className="blind">year</dt>
        <dd>{year}</dd>
        </dl>
        <dl>
        <dt>description</dt>
        <dd>{description_full}</dd>
        </dl>
        <dl className="keywords">
        <dt>keywords</dt>
        {
            genres.map((keyword, index) => {
                return <dd key={index}>{keyword}</dd>
            })
        }
        </dl>
        <dl className="rating">
        <dt>rating</dt>
        <dd style={styles.rating_background}><i className="icon" style={styles.rating} /><span className="blind">{rating}</span></dd>
        </dl>
        <dl className="poster">
        <dt className="blind">poster</dt>
        <dd><img src={large_cover_image} alt={title_english} /></dd>
        </dl>
    </span>
}

export default Movie;