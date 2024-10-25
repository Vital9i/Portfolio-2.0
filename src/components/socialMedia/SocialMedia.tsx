import React from 'react';
import { Icon } from '../icon/Icon';
import styled from 'styled-components';

export const SocialMedia = () => {
    return (

        <StyledSocialMedia>
            <li>
                <a href="#">
                <Icon iconId='git' />
                </a>
            </li>
            <li>
                <a href="#">
                <Icon iconId='twitter' />
                </a>
            </li>
            <li>
                <a href="#">
                <Icon iconId='linkidin' />
                </a>
            </li>
        </StyledSocialMedia>
    );
};

const StyledSocialMedia = styled.ul`
    list-style-type: none;
    display: flex;
    margin-top: 35px;

`

