import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const Menu = () => {
    return (

        <StyledMenu>
            <MobileMenuWrapper>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Tech Stack</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            </MobileMenuWrapper>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`




a{
    color: ${theme.colors.secondaryFont};
    font-family: 'DM Sans';
}

`
const MobileMenuWrapper = styled.div`
position: fixed;
top:0;
left:0;
right: 0;
bottom:0;
z-index: 99999;
background-color: rgba(31,31,32,0.9);

    ul{
    list-style-type: none;
    display:flex;
    gap:30px;
    align-items: center;
    flex-direction: column;
    }
`
