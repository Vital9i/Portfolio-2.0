import React from 'react';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Icon } from '../../../components/icon/Icon';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionText } from '../../../components/SectionText';

export const Stack = () => {
    return (
        <StyledStack>
            <SectionTitle>My Tech Stack</SectionTitle>
            <SectionText> Technologies I’ve been working with recently</SectionText>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <Icon iconId={'html'} width={120} height={120} viewBox='0 0 120 120' />
                <Icon iconId={'css'}width={120} height={120} viewBox='0 0 120 120' />
                <Icon iconId={'js'} width={120} height={120} viewBox='0 0 120 120'/>
                <Icon iconId={'react'} width={113} height={100} viewBox='0 0 120 120'/>
                <Icon iconId={'redux'} width={105} height={100} viewBox='0 0 120 120'/>
                <Icon iconId={'bootstrap'} width={88} height={87} viewBox='0 0 120 120'/>
                <Icon iconId={'tailwind'} width={131} height={131} viewBox='0 0 120 120'/>
                <Icon iconId={'sass'} width={117} height={87} viewBox='0 0 120 120'/>
                <Icon iconId={'gitHub'} width={115} height={115} viewBox='0 0 120 120'/>
                <Icon iconId={'greensock'} width={120} height={120} viewBox='0 0 120 120'/>
                <Icon iconId={'vscode'} width={112} height={112} viewBox='0 0 120 120'/>
                <Icon iconId={'gitHubFull'} width={88} height={88} viewBox='0 0 120 120'/>
                </FlexWrapper>
        </StyledStack>

    );                                    
};

const StyledStack = styled.section`
    min-height: 100vh;
    background-color:#191919;
`

