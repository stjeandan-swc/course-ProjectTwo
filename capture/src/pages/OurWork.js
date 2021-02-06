import React from 'react';

import styled from 'styled-components';

import {Link} from 'react-router-dom';

// images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

// animation
import {motion} from 'framer-motion';
import {pageAnimation, fade, photoAnim, lineAnim} from '../animation';

const OurWork = () => {
    return(
        <STYLE_WORK variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            <STYLE_MOVIE>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to='/work/the-athlete'>
                    <STYLE_HIDE>
                        <motion.img variants={photoAnim} src={athlete} alt="athlete"/>
                    </STYLE_HIDE>
                </Link>
            </STYLE_MOVIE>
            <STYLE_MOVIE>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to='/work/the-racer'>
                    <img src={theracer} alt="theracer"/>
                </Link>
            </STYLE_MOVIE>
            <STYLE_MOVIE>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link to='/work/good-times'>
                    <img src={goodtimes} alt="goodtimes"/>
                </Link>
            </STYLE_MOVIE>
        </STYLE_WORK>
    );
};

const STYLE_WORK = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;

    h2{
        padding: 1rem 0rem;
    }
`;

const STYLE_MOVIE = styled.div`
    padding-bottom: 10rem;
    color: white;

    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }

    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const STYLE_HIDE = styled.div`
    overflow: hidden;
`;

export default OurWork;