import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const Menu = () => {
    return (

        <StyledMenu>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Tech Stack</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
ul{
    list-style-type: none;
    display:flex;
    gap:30px;
    
}

a{
    color: ${theme.colors.secondaryFont};
    font-family: 'DM Sans';
}

`
