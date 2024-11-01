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
                <Logo idLogo='logo'/>
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


