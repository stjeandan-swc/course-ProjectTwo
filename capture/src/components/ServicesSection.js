import React from 'react';

// Styled Component
import styled from 'styled-components';
import {STYLE_ABOUT, STYLE_DESRIPTION, STYLE_IMAGE} from '../styles';

//Import Icons and images
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

const ServicesSection = () => {
    return(
        <STYLE_SERVICES>
            <STYLE_DESRIPTION>
                <h2>High <span>quality</span> services</h2>
                <STYLE_CARDS>
                    <STYLE_CARD>
                        <div className="icon">
                            <img src={clock} alt="clock"/>
                            <h3>Effecient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </STYLE_CARD>
                    <STYLE_CARD>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork"/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </STYLE_CARD>
                    <STYLE_CARD>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm"/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </STYLE_CARD>
                    <STYLE_CARD>
                        <div className="icon">
                            <img src={money} alt="affordable"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </STYLE_CARD>
                </STYLE_CARDS>
            </STYLE_DESRIPTION>
            <STYLE_IMAGE>
                <img src={home2} alt="high end camera."/>
            </STYLE_IMAGE>
        </STYLE_SERVICES>
    );
};

const STYLE_SERVICES = styled(STYLE_ABOUT)`
    h2{
        padding-bottom: 5rem;
    }

    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const STYLE_CARDS = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const STYLE_CARD = styled.div`
    flex-basis: 20rem;

    .icon{
        display: flex;
        align-items: center;

        h3{
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`;

export default ServicesSection;