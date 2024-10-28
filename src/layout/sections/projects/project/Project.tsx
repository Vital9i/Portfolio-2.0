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

                <Description>
                    <Title>{props.title}</Title>
                    <Text>{props.text}</Text>
                    <StackText>{props.stackText}</StackText>

                    <FlexWrapper justify='space-between'>
                        <StyledPreview>
                            <FlexWrapper direction='row' >
                                <Icon iconId={'akar'} />
                                <Link href={'#'}>Live Preview</Link>
                            </FlexWrapper>
                        </StyledPreview>

                        <StyledCode>
                            <FlexWrapper direction='row'>
                                <IconWrapper><Icon iconId={'git'} /></IconWrapper>
                                <Link href={'#'}>View Code</Link>
                            </FlexWrapper>
                        </StyledCode>
                    </FlexWrapper>
                </Description>

            </FlexWrapper>
        </StyledProject>

    );
};



const StyledProject = styled.div`
position: relative;
    max-width: 373px;
    width: 100%;
    border-radius: 20px !important;
    border: 1px solid green;
    margin: 2px;
    overflow: hidden;
    color:${theme.colors.primaryFont};
`
const Image = styled.img`
    width: 100%;
    height:260px;
    object-fit: cover;
        `
const Description = styled.div`
    padding: 25px 30px 0;
    background-color: ${theme.colors.BgProject};
`

const Title = styled.h3`
/* font-family: Poppins;
font-size: 28px;
font-weight: 500px;
text-align: center; */
font-family: Poppins;
font-size: 28px;
font-weight: 500;
line-height: 26px;
text-align: left;


`
const Text = styled.p`
font-size: 18px;
font-weight: 300;
line-height: 26px;
text-align: left;
padding-top: 17px;
padding-bottom: 12px;

`
const Link = styled.a`
color: #FFFFFF;
text-decoration: underline;
margin-left: 0px;
`
const StackText = styled.p`
font-size: 16px;
font-weight: 400;
text-align: left;

`
const StyledPreview = styled.div`
padding-top: 21px;
`
const StyledCode = styled.div`
padding-top: 21px;

`
const IconWrapper = styled.div`
margin-top: -10px;
`