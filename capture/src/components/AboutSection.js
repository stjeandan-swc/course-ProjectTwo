import React from 'react';
import home1 from '../img/home1.png';

// Styled Component
import {STYLE_ABOUT, STYLE_DESRIPTION, STYLE_HIDE, STYLE_IMAGE} from '../styles';

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

export default AboutSection;
