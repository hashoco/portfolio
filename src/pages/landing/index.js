import React from 'react';
import styled from 'styled-components';
import Intro from './component/Intro';
import About from './component/About';
import Ability from './component/Ability';
import Solutions from './component/Solutions';
import Footer from '../../static/component/Footer';


const StyledBox = styled.div`
    .container{ 
        scroll-behavior: smooth;
        height: 100vh;
        scroll-snap-type: y mandatory;
        overflow-y: scroll;
    }
    .container::-webkit-scrollbar { width: 0; background: transparent;}
    .container > div { scroll-snap-align: start;}
`;

const Landing = () => {

    return (
        <StyledBox className='landing'>
            <div className='container' id='landing-container'>
                <div><Intro /></div>
                <div><About /></div>
                <div><Ability /></div>
                <div><Solutions /></div>
                <Footer />
            </div>
        </StyledBox>
    );
}

export default React.memo(Landing);