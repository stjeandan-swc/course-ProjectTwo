import React from 'react';

// Style imports
import styled from 'styled-components';
import {STYLE_ABOUT} from '../styles'

const FaqSection = () => {
    return(
        <STYLE_FAQ>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h4>how Do I Start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Voluptatibus, nam.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Daily Schedule.</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Voluptatibus, nam.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Methods of payment.</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Voluptatibus, nam.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What Products do you offer?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Voluptatibus, nam.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
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
        padding: 3rem 0rem;
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
