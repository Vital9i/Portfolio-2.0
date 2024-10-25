import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { FlexWrapper } from '../../components/FlexWrapper';
import { SocialMedia } from '../../components/socialMedia/SocialMedia';
import { Menu } from '../../components/menu/Menu';

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction='column'>
                <div>
                    <FlexWrapper justify='space-between' >
                    <Logo />
                    <FlexWrapper justify='flex-end'>
                        <span>+1 555 505 5050</span>
                        <span>vitalikdoiniak@gmail.com</span>
                        <SocialMedia />
                    </FlexWrapper>
                    </FlexWrapper>
                </div>
                <div>
                    <FlexWrapper justify='space-between'>
                    <Menu />
                    <p>Designed and built by <StyledSpan>Vitali Doiniak</StyledSpan> with <StyledSpan>Love</StyledSpan> & <StyledSpan>Coffee</StyledSpan></p>
                    </FlexWrapper>
                </div>
            </FlexWrapper>
        </StyledFooter>

    );
};

const StyledFooter = styled.footer`

`

const StyledSpan = styled.span`
    background: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;

`

