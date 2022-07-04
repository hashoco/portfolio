import React from 'react';
import styled from 'styled-components';
import FullScreen from '../../../static/component/FullScreen';
import bg from '../../../static/image/Homeintro.png';
import { landingData } from '../../../static/data';
import UseAnimations from "react-useanimations";
import arrowDown from 'react-useanimations/lib/arrowDown'

const StyledBox = styled.div`
    @keyframes FadeInText {
        0% { margin-top: 18rem; opacity: 0.3; }
        100% { margin-top: 10rem; opacity: 1; }
    }
    .main-text{
        animation: FadeInText 2s linear forwards;
        max-width: 1000px;
        margin-left: 35rem;
        margin-top: 10rem;
        p:nth-child(1){
            font-size: 45px;
            margin: 0;
        }
        p:nth-child(2){
            font-size: 25px;
            color: rgba(255,255,255,0.8);
        }
        p:nth-child(3){
            font-size: 25px;
            color: rgba(255,255,255,0.8);
        }
        p:nth-child(4){
            font-size: 25px;
            color: rgba(255,255,255,0.8);
        }
        p:nth-child(5){
            font-size: 25px;
            color: rgba(255,255,255,0.8);
        }
    }
    .motionDown {
        align-self: center;
        color: white;
        display: flex;
        justify-content: center;
        margin-top: 13rem;
        span{
            align-self: center;
            margin: 1rem;
        }
    }
`;

const Intro = () => {

    const WrapperStyle = {
        display: 'inline-flex',
        border: '1.5px solid',
        borderRadius: '30px',
        height: '50px'
    }
    
    return (
        <StyledBox>
            <FullScreen bg={bg} x='30%' y='20%' size={130}>
                <div className='main-text'>
                    {landingData.intro.map((p, i) => <p key={i}>{p}</p>)}
                </div>
                <div className='motionDown'>
                    <UseAnimations animation={arrowDown} size={24} strokeColor='white' wrapperStyle={WrapperStyle} />
                    <span>Scroll down</span>
                </div>

            </FullScreen>
        </StyledBox>
    );
}

export default React.memo(Intro);