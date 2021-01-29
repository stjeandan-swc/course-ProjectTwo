import React from 'react';
import home1 from '../img/home1.png';

// Styled Component
import styled from 'styled-components';

const AboutSection = () => {

    return(
        <STYLE_ABOUT>
            <STYLE_DESRIPTION>
                <div className="title">
                    <STYLE_HIDE>
                        <h2>We work to make.</h2>
                    </STYLE_HIDE>
                    <STYLE_HIDE>
                        <h2>Your <span>dreams</span> come</h2>
                    </STYLE_HIDE>
                    <STYLE_HIDE>
                        <h2>true.</h2>
                    </STYLE_HIDE>
                </div>
                <p>Contact us for any photography or videography ideas that you have. 
                    We have professionals with amazing skills.
                </p>
                <button>Contact Us</button>
            </STYLE_DESRIPTION>
            <STYLE_IMAGE>
                <img src={home1} alt="A person with a camera"/>
            </STYLE_IMAGE>
        </STYLE_ABOUT>
    );
};

// Styling
const STYLE_ABOUT = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;

const STYLE_DESRIPTION = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2{
        font-weight: lighter;
    }
`;

const STYLE_IMAGE = styled.div`
    flex: 1;
    overflow: hidden;

    img{
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

const STYLE_HIDE = styled.div`
    overflow: hidden;
`;

export default AboutSection;
