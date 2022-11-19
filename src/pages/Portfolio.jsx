import { ProjectsWrapper, Wrapper} from "./styles";
import ProjectCard from '../components/ProjectCard.jsx';

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