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
                    <Logo idLogo='footerLogo'/>
                    <FlexWrapper justify='space-between' >
                        <Phone>+1 555 505 5050</Phone>
                        <Mail>vitalikdoiniak@gmail.com</Mail>
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

const Phone = styled.div`
font-family: DM Sans;
font-size: 18px;
font-weight: 400;
color:${theme.colors.secondaryFont};
padding-right: 30px;
`
const Mail = styled.div`
font-family: DM Sans;
font-size: 18px;
font-weight: 400;
color:${theme.colors.secondaryFont};
padding-right: 48px;
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
    margin-top: 70px;

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
    margin-bottom: 60px;

    p {
    color:${theme.colors.secondaryFont}
}
`
