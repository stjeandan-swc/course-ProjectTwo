import React from 'react';
import home1 from '../img/home1.png';

// Animations
import {motion} from 'framer-motion';
import {titleAnim, fade, photoAnim} from '../animation'
import Wave from './Wave'

// Styled Component
import {STYLE_ABOUT, STYLE_DESRIPTION, STYLE_HIDE, STYLE_IMAGE} from '../styles';

const AboutSection = () => {

    return(
        <STYLE_ABOUT>
            <STYLE_DESRIPTION>
                <motion.div className="title">
                    <STYLE_HIDE>
                        <motion.h2 variants={titleAnim}>We work to make.</motion.h2>
                    </STYLE_HIDE>
                    <STYLE_HIDE>
                        <motion.h2 variants={titleAnim}>Your <span>dreams</span> come</motion.h2>
                    </STYLE_HIDE>
                    <STYLE_HIDE>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </STYLE_HIDE>
                </motion.div>
                <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. 
                    We have professionals with amazing skills.
                </motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </STYLE_DESRIPTION>
            <STYLE_IMAGE>
                <motion.img variants={photoAnim} src={home1} alt="A person with a camera"/>
            </STYLE_IMAGE>
            <Wave />
        </STYLE_ABOUT>
    );
};

export default AboutSection;
