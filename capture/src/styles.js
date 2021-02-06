// Styled Component
import styled from 'styled-components';
import {motion} from 'framer-motion';

// Styling
export const STYLE_ABOUT = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;

export const STYLE_DESRIPTION = styled.div`
    flex: 1;
    padding-right: 5rem;
    z-index: 2;
    h2{
        font-weight: lighter;
    }
`;

export const STYLE_IMAGE = styled.div`
    flex: 1;
    overflow: hidden;
    z-index: 2;

    img{
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

export const STYLE_HIDE = styled.div`
    overflow: hidden;
`;