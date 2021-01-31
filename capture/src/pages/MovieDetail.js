import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import {MovieState} from '../movieState';

const MovieDetail = () => {

    const history = useHistory();
    const url = history.location.pathname;

    // use States
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    // use Effects
    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
        setMovie(currentMovie[0]);
    }, [movies, url]);

    return(
        <>
            {movie && (
                <STYLE_DETAILS>
                    <STYLE_HEADLINE>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt="movie"/>
                    </STYLE_HEADLINE>
                    <STYLE_AWARDS>
                        {movie.awards.map((award) => (
                            <Award title={award.title}
                                description={award.description}
                                key={award.title}
                            />
                        ))}
                    </STYLE_AWARDS>
                    <STYLE_IMAGE_DISPLAY>
                        <img src={movie.secondaryImg} alt="a movie image"/>
                    </STYLE_IMAGE_DISPLAY>
                </STYLE_DETAILS>
            )};
        </>
    );
};

const Award = ({title, description}) => {
    return(
        <STYLE_AWARD>
            <h3>{title}</h3>
            <div className='line'></div>
            <p>{description}</p>
        </STYLE_AWARD>
    )
};

const STYLE_DETAILS = styled.div`
    color: white;
`;

const STYLE_HEADLINE = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;

    h2{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }

    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const STYLE_AWARDS = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
`;

const STYLE_AWARD = styled.div`
    padding: 5rem;

    h3{
        font-size: 2rem;
    }

    p{
        padding: 2rem 0rem;
    }

    .line{
        width: 100%;
        height: 0.5rem;
        background: #23d997;
        margin: 1rem 0rem;
    }
`;

const STYLE_IMAGE_DISPLAY = styled.div`
    min-height: 50vh;

    img{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`;

export default MovieDetail;