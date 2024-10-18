import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionText } from '../../../components/SectionText';
import { Project } from './project/Project';
import { FlexWrapper } from '../../../components/FlexWrapper';
import project1 from '../../../assets/images/proj-1_1.webp';
import project2 from '../../../assets/images/proj-2.webp';
import project3 from '../../../assets/images/proj-3.webp';
import project4 from '../../../assets/images/proj-4.webp';
import project5 from '../../../assets/images/proj-5_1.webp';
import project6 from '../../../assets/images/proj-6_1.webp';

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <SectionText>Things I’ve built so far</SectionText>
            <FlexWrapper justify={'space-around'}>
                <Project src={project1}
                    title={'Project Tile goes here'}
                    text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                    stackText={'Tech stack : HTML , JavaScript, SASS, React'} />
                <Project src={project2}
                    title={'Project Tile goes here'}
                    text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} 
                    stackText={'Tech stack : HTML , JavaScript, SASS, React'}/>
                <Project src={project3}
                    title={'Project Tile goes here'}
                    text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} 
                    stackText={'Tech stack : HTML , JavaScript, SASS, React'}/>
                <Project src={project4}
                    title={'Project Tile goes here'}
                    text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} 
                    stackText={'Tech stack : HTML , JavaScript, SASS, React'}/>
                <Project src={project5}
                    title={'Project Tile goes here'}
                    text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} 
                    stackText={'Tech stack : HTML , JavaScript, SASS, React'}/>
                <Project src={project6}
                    title={'Project Tile goes here'}
                    text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} 
                    stackText={'Tech stack : HTML , JavaScript, SASS, React'}/>
            </FlexWrapper>
        </StyledProjects>

    );
};

const StyledProjects = styled.section`
    min-height:100vh;
    background-color: #191919;
    
`