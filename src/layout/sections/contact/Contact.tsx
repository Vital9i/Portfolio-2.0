import React from 'react';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import { Container } from '../../../components/Container';

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <SectionTitle>For any questions please mail me:</SectionTitle>
                    <LinkWrapper>
                    <Link href="mailto:vitalikdoiniak@gmail.com">vitalikdoiniak@gmail.com</Link>
                    </LinkWrapper>
                </FlexWrapper>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
      
`
const Link = styled.a`
    background: ${theme.colors.accent};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-decoration: none;
` 
const LinkWrapper = styled.div`
margin-top: -30px;
margin-bottom: 200px;
font-family: DM Sans;
font-size: 58px;
font-weight: 700;
letter-spacing: -1px;
text-align: center;
`