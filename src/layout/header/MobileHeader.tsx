import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { SocialMedia } from '../../components/socialMedia/SocialMedia';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Container } from '../../components/Container';
import { theme } from '../../styles/Theme';

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify='space-between' align='center'>
                    <Logo idLogo='logo' />
                    <Menu />
                    <SocialMedia />
                </FlexWrapper>
            </Container>
        </StyledHeader>

    );
};

const StyledHeader = styled.header`
    padding-top:20px;
    position: sticky;
    top:0;
    left:0;
    right: 0;
    z-index: 999999999;

    @media ${theme.media.tablet} {
    display: none;
}
`

const BurgerButton = styled.button`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;

    span {
        display: block;
        width: 36px;
        height: 2px;
        color: ${theme.colors.primaryFont};
        position: absolute;
        left: 40px;
        bottom: 50px;

        &::before {
          content: "";
          display: block;
          width: 36px;
          height: 2px;
          color: ${theme.colors.primaryFont};
          position: absolute;
          transform: translateY(-10px);
        }
        &::after {
            content: "";
          display: block;
          width: 24px;
          height: 2px;
          color: ${theme.colors.primaryFont};
          position: absolute;
          transform: translateY(10px);
        }
    }
`


