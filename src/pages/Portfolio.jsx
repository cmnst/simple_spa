import { Project, ProjectsWrapper, Wrapper, Paragraph } from "./styles";
import {SiGithub} from 'react-icons/si';

const ProjectCard = ({name, description}) => {
    return(
        <Project>
            <Paragraph projectTitle>{name}</Paragraph>
            <Paragraph description>{description}</Paragraph>
            <SiGithub style={{marginTop: 20}}/>
        </Project>
    )
}

const Portfolio = () => {
    return(
        <Wrapper>
            <h1>What I've built</h1>
            <ProjectsWrapper>
                <ProjectCard name="weather-app" description="CRA + MUI weather app"/>
                <ProjectCard name="easy-search" description="Multi purpose search engine"/>
                <ProjectCard name="photo-fetch-api" description="Fetch Unsplash photos"/>
                <ProjectCard name="city-tour" description="My hometown interactive map"/>
            </ProjectsWrapper>
            
        </Wrapper>
        
    )
}

export default Portfolio;