import { Project, ProjectWrapper, Wrapper } from "./styles"

const Portfolio = () => {
    return(
        <Wrapper>
            <h1>What I've built</h1>
            <ProjectWrapper>
                <Project />
                <Project />
                <Project />
            </ProjectWrapper>
            
        </Wrapper>
        
    )
}

export default Portfolio;