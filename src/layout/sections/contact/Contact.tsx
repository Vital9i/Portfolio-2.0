import React from 'react';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import styled from 'styled-components';

export  const Contact = () => {
    return (
        <StyledContact>
        <FlexWrapper>
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
{
    color: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);

}` 
