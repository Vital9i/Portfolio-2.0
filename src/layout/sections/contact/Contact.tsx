import React from 'react';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

export const Contact = () => {
    return (
        <StyledContact>
            <FlexWrapper direction={'column'} align={'center'}>
                <SectionTitle>For any questions please mail me:</SectionTitle>
                <Link href="mailto:vitalikdoiniak@gmail.com">vitalikdoiniak@gmail.com</Link>
            </FlexWrapper>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    min-height:100vh;
    background-color: #191919;
    
`
const Link = styled.a`
    background: ${theme.colors.accent};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-decoration: none;
` 
