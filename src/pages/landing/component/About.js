import React from 'react';
import styled from 'styled-components';
import FullScreen from '../../../static/component/FullScreen';
import bg from '../../../static/image/vision.png';
import { landingData } from '../../../static/data';

const StyledBox = styled.div`
    @keyframes FadeInText {
        0% { opacity: 0.2; }
        100% { opacity: 1; }
    }
    .vision{
        animation: FadeInText linear 3s forwards;
        font-size: 50px;
        text-align: center;
        div:nth-child(1){
            font-size: larger;
        }
        div:nth-child(2){
            font-size: smaller;
            opacity: 0.8;
        }
    }
    .content{
        font-size: 20px;
        animation: FadeInText linear 3s forwards;
        margin: 3rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .col{
            display: flex;
            flex-direction: column;
        }
        .item{
            width: 300px;
            height: 150px;
            padding: 3rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            text-align: center;
            font-size: 20px;
        }
        .left{
            
        }
        .top {
            
        }
    }
`;

const Vision = () => {

    return (
        <StyledBox>
            <FullScreen bg={bg} x={20} size={200} overlay='rgba(0,0,0,0.6)' justify='center' align='center'>

                <div className='vision'>
                    {landingData.vision.map((p, i) => i === 0  && <div key={i}>{p}</div>)}
                </div>
                <div className='content'>
                    <div className='col left'>
                    {landingData.vision.map((p, i) => i === 1  && <div key={i}>{p}</div>)}
                    <br></br>
                    {landingData.vision.map((p, i) => i === 2  && <div key={i}>{p}</div>)}
                    <br></br>
                    {landingData.vision.map((p, i) => i === 3  && <div key={i}>{p}</div>)}
                    <br></br>                    
                    {landingData.vision.map((p, i) => i === 4  && <div key={i}>{p}</div>)}
                    <br></br>                    
                    {landingData.vision.map((p, i) => i === 5  && <div key={i}>{p}</div>)}
                    
                    </div>
                   
                </div>
            </FullScreen>
        </StyledBox>
    );
}

export default React.memo(Vision);