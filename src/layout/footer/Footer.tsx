import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { FlexWrapper } from '../../components/FlexWrapper';
import { SocialMedia } from '../../components/socialMedia/SocialMedia';
import { Menu } from '../../components/menu/Menu';
import { theme } from '../../styles/Theme';
import { Container } from '../../components/Container';

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
            <FlexWrapper direction='column'>
                <FirstBlock>
                    <FlexWrapper justify='space-between' >
                    <Logo />
                    <FlexWrapper justify='flex-end'>
                        <span>+1 555 505 5050</span>
                        <span>vitalikdoiniak@gmail.com</span>
                        <SocialMedia />
                    </FlexWrapper>
                    </FlexWrapper>
                </FirstBlock>

                <SecondBlock>
                    <FlexWrapper justify='space-between'>
                    <Menu />
                    <p>Designed and built by <StyledSpan>Vitali Doiniak</StyledSpan> with <StyledSpan>Love</StyledSpan> & <StyledSpan>Coffee</StyledSpan></p>
                    </FlexWrapper>
                </SecondBlock>
            </FlexWrapper>
            </Container>
        </StyledFooter>

    );
};

const StyledFooter = styled.footer`

`

const StyledSpan = styled.span`
    background: ${theme.colors.accent};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;

`
const FirstBlock = styled.div`
    position: relative;
    margin-bottom: 110px;

    &::before {
        content: '';
        display: inline-block;
        width: 1170px;
        height: 6px;
        background-color: #42446E;

        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        /* border: 2px solid #42446E; */
        bottom:-30px;
        opacity: 30%;
    }
`
const SecondBlock = styled.div`
    
`