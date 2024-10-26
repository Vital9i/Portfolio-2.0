import React from 'react';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Icon } from '../../../components/icon/Icon';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionText } from '../../../components/SectionText';
import { Container } from '../../../components/Container';

export const Stack = () => {
    return (
        <StyledStack>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionText> Technologies I’ve been working with recently</SectionText>
                <FlexWrapper align={'center'} justify={'space-between'} wrap={'wrap'}>
                    <IconWrapper>
                        <Icon iconId={'html'} width={120} height={120} viewBox='0 0 120 120' />
                    </IconWrapper>
                    <IconWrapper>
                    <Icon iconId={'css'} width={120} height={120} viewBox='0 0 120 120' />
                    </IconWrapper>
                    <IconWrapper>
                    <Icon iconId={'js'} width={120} height={120} viewBox='0 0 120 120' />
                    </IconWrapper>
                    <IconWrapper>
                    <Icon iconId={'react'} width={113} height={100} viewBox='0 0 120 120' />
                    </IconWrapper>
                    <IconWrapper>
                    <Icon iconId={'redux'} width={105} height={100} viewBox='0 0 120 120' />
                    </IconWrapper>
                    <IconWrapper>
                    <Icon iconId={'bootstrap'} width={88} height={87} viewBox='0 0 120 120' />
                    </IconWrapper>
                    <IconWrapper>
                    <Icon iconId={'tailwind'} width={131} height={131} viewBox='0 0 120 120' />
                    </IconWrapper>
                    <IconWrapper>
                    <Icon iconId={'sass'} width={117} height={87} viewBox='0 0 120 120' />
                    </IconWrapper>
                    <IconWrapper>
                    <Icon iconId={'gitHub'} width={115} height={115} viewBox='0 0 120 120' />
                    </IconWrapper>
                    <IconWrapper>
                    <Icon iconId={'greensock'} width={120} height={120} viewBox='0 0 120 120' />
                    </IconWrapper>
                    <IconWrapper>
                    <Icon iconId={'vscode'} width={112} height={112} viewBox='0 0 120 120' />
                    </IconWrapper>
                    <IconWrapper>
                    <Icon iconId={'gitHubFull'} width={88} height={88} viewBox='0 0 120 120' />
                    </IconWrapper>
                </FlexWrapper>
            </Container>
        </StyledStack>

    );
};

const StyledStack = styled.section`
 
  
`
const IconWrapper = styled.div`
    margin: 40px 30px;
`
