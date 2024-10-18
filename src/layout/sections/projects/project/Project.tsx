import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Icon } from '../../../../components/icon/Icon';

type ProjectPropsType = {
    src: string
    title: string
    text: string
    stackText: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src} alt='' />
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <StackText>{props.stackText}</StackText>
            <FlexWrapper align={'center'} justify={'space-between'}>
                <div>
                    <Icon iconId={'akar'} />
                    <Link href={'#'}>Live Preview</Link>
                </div>
                <div>
                    <Icon iconId={'git'} />
                    <Link href={'#'}>View Code</Link>
                </div>
            </FlexWrapper>


        </StyledProject>

    );
};

const StyledProject = styled.div`
    max-width: 373px;
    width: 100%;
`
const Image = styled.img`
    width: 100%;
    height:260px;
    object-fit: cover;
`
const Title = styled.h3`
    color: white;
`
const Text = styled.p`
    color: white;
`
const Link = styled.a`
    color: white;
`
const StackText = styled.p`
color: white;
`