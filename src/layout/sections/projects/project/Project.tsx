import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Icon } from '../../../../components/icon/Icon';
import { theme } from '../../../../styles/Theme';

type ProjectPropsType = {
    src: string
    title: string
    text: string
    stackText: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <FlexWrapper direction='column'>
            <Image src={props.src} alt='' />
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <StackText>{props.stackText}</StackText>
            {/* <FlexWrapper align={'center'} justify={'space-between'}> */}
                <StyledPreview>
                    <Icon iconId={'akar'} />
                    <Link href={'#'}>Live Preview</Link>
                </StyledPreview>
                <StyledCode>
                    <Icon iconId={'git'} />
                    <Link href={'#'}>View Code</Link>
                </StyledCode>
            {/* </FlexWrapper> */}

            </FlexWrapper>
        </StyledProject>

    );
};

const StyledProject = styled.div`
    max-width: 373px;
    max-height: 567px;
    width: 100%;
    border-radius: 20px;
    border: 1px solid green;
    margin: 2px;
    
`
const Image = styled.img`
    width: 100%;
    height:260px;
    object-fit: cover;
    
`
const Title = styled.h3`
    color: white;
    background-color: ${theme.colors.BgProject};
`
const Text = styled.p`
    color: white;
    background-color: ${theme.colors.BgProject};
`
const Link = styled.a`
    color: white;
    background-color: ${theme.colors.BgProject};
`
const StackText = styled.p`
color: white;
background-color: ${theme.colors.BgProject};
`

const StyledPreview = styled.div`
   background-color: ${theme.colors.BgProject};
`
const StyledCode= styled.div`
   background-color: ${theme.colors.BgProject};
`