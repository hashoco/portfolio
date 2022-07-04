import React from 'react';
import styled from 'styled-components';
import ArrowRightSharpIcon from '@material-ui/icons/ArrowRightSharp';

const StyledBox = styled.div`
    color: #444;
    height: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    .name{
        color: #00338d;
        font-size: 54px;
        text-transform: capitalize;
        margin: 2rem 0 1rem 3rem;
        text-shadow: 1px 1px 3px #bdbdbd;
    }
    .title{
        font-size: 24px;
        text-transform: capitalize;
        padding-bottom: .2rem;
        margin-bottom: .8rem;
        border-bottom: .3px solid #eee;
    }
    .desc{
        padding: 1rem 3rem;
        .TitleContent{
            margin-bottom: 2rem;
        }
        .descContent{
            opacity: 0.8;  
        } 
        .tech{
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: .5rem;
        }
    }
    .arch{
        padding: 0 3rem; 
    }
    .demo{
        align-self: center;
        width: 90%;
        margin: 2rem;
    }
    
`;

const Desc = ({ desc }) => {
    return (
        <div className='desc'>
            {desc.map((d, i) =>
                <div key={i} className='TitleContent'>
                    <div className='title'>{d.title}</div>
                    
                    {d.title === "Project"
                        ? <div>{d.content.split(',').map((line, i) => <div key={i} className='tech'><ArrowRightSharpIcon />{line}</div>)}</div>
                        : <div className=''>{d.content}</div>
                    }
                    {d.image && <img src={`/architecture/${d.image}`} alt='desc' width='100%' />}
                </div>
            )}

        </div>
    );
}




const ItemDetail = ({ item }) => {
    const { name, desc } = item;
    return (
        <StyledBox>
                <div className='name'>{name}</div>
                <Desc desc={desc} />

        </StyledBox>
    );
}

export default React.memo(ItemDetail);