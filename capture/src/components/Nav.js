import React from 'react';

// Styles
import styled from 'styled-components';

const Nav = () => {
    return(
        <STYLE_NAV>
            <h1><a id='logo' href="#">Capture</a></h1>
            <ul>
                <li>
                    <a href="#">1. About Us</a>
                </li>
                <li>
                    <a href="#">2. Our Work</a>
                </li>
                <li>
                    <a href="#">3. Contact Us</a>
                </li>
            </ul>
        </STYLE_NAV>
    );
};

const STYLE_NAV = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background-color: #282828;

    a{
        color: white;
        text-decoration: none;
    }

    ul{
        display: flex;
        list-style: none;
    }

    li{
        padding-left: 10rem;
        position: relative;
    }

    #logo{
        font-size: 1.8rem;
        font-family: 'Lobster', cursive;
        font-weight: lighter;
    }
`;

export default Nav;