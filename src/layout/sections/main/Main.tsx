import React from 'react';
import photo from '../../../assets/images/photo.webp'
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
            <div>
                <h2>Hi👋,</h2>
                <h2>My name is</h2>
                <Name>Vitali Dainiak</Name>
                <MainTitle>I build things for web</MainTitle>
            </div >

            <StyledPhoto src={photo} alt='' />
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
min-height: 100vh;
background-color:#191919;
color:white;
`

const StyledPhoto = styled.img`
width: 349px;
height: 349px;
border-radius: 230px;
opacity: 0px;
object-fit: cover;
`
const MainTitle = styled.h1`
    
`
const Name = styled.span`
    
`

