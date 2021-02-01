import React from 'react';
import home1 from '../img/home1.png';

// framer motion
import {motion} from 'framer-motion';

// Styled Component
import {STYLE_ABOUT, STYLE_DESRIPTION, STYLE_HIDE, STYLE_IMAGE} from '../styles';

const AboutSection = () => {

    return(
        <STYLE_ABOUT>
            <STYLE_DESRIPTION>
                <motion.div className="title">
                    <STYLE_HIDE>
                        <motion.h2>We work to make.</motion.h2>
                    </STYLE_HIDE>
                    <STYLE_HIDE>
                        <motion.h2>Your <span>dreams</span> come</motion.h2>
                    </STYLE_HIDE>
                    <STYLE_HIDE>
                        <motion.h2>true.</motion.h2>
                    </STYLE_HIDE>
                </motion.div>
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
