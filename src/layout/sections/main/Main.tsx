import React from 'react';
import photo from '../../../assets/images/photo.webp'
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
            <FlexWrapper align={'center'} justify={'space-between'}>
            <div>
                <Text>Hi👋,</Text>
                <Text>My name is</Text>
                <Name>Vitali Dainiak</Name>
                <MainTitle>I build things for web</MainTitle>
            </div >

            <StyledPhoto src={photo} alt='' />
            </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
min-height: 100vh;
color: ${theme.colors.accent};
display: flex;
`

const StyledPhoto = styled.img`
width: 349px;
height: 349px;
border-radius: 230px;
opacity: 0px;
object-fit: cover;
`
const MainTitle = styled.h1`
font-size: 58px;
font-weight: 700;
line-height: 70px;
letter-spacing: -1px;
text-align: left;

`
const Name = styled.h2`
font-size: 58px;
font-weight: 700;
line-height: 70px;
letter-spacing: -1px;
text-align: left;
color: ${theme.colors.accent};

`
const Text = styled.p`
font-size: 58px;
font-weight: 700;
line-height: 70px;
letter-spacing: -1px;
text-align: left;
color: ${theme.colors.accent};
`
