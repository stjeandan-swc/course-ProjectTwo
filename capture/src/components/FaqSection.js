import React from 'react';

// Style imports
import styled from 'styled-components';
import {STYLE_ABOUT} from '../styles';

// animation
import {AnimateSharedLayout} from 'framer-motion';
import {useScroll} from './useScroll';
import {fade} from '../animation';

// components
import Toggle from './Toggle';

const FaqSection = () => {

    const [element, controls] = useScroll();

    return(
        <STYLE_FAQ variants={fade} ref={element} initial='hidden' animate={controls}>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title='How Do I Start?'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. Voluptatibus, nam.
                        </p>
                    </div>
                </Toggle>
                <Toggle title='Daily Schedule'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. Voluptatibus, nam.
                        </p>
                    </div>
                </Toggle>
                <Toggle title='Methods of Payment'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. Voluptatibus, nam.
                        </p>
                    </div>
                </Toggle>
                <Toggle title='What Products do you Offer?'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. Voluptatibus, nam.
                        </p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </STYLE_FAQ>
    );
};

const STYLE_FAQ = styled(STYLE_ABOUT)`
    display: block;

    span{
        display: block;
    }

    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    .faq-line{
        background: #ccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }

    .question{
        padding: 1rem 0rem;
        cursor: pointer;
    }

    .answer{
        padding: 2rem 0rem;

        p{
            padding: 1rem 0rem;
        }
    }
`;

export default FaqSection;
