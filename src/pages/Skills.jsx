import { SkillsWrapper, SubWrapper, Tech, TechSkills, Skill, Box, Paragraph} from "./styles";
import {SiJavascript, SiHtml5, SiCss3, SiReact, SiGithub} from 'react-icons/si';
import {FaNpm, FaGitAlt} from 'react-icons/fa';


const Skills = () => {
    return(
        <SkillsWrapper>
            <h1>My skills</h1>
            <SubWrapper>
                <Tech>
                    <TechSkills>
                        <Skill>
                            <Box>
                                <SiHtml5 /> 
                                <Paragraph skill>HTML</Paragraph>
                            </Box>
                        </Skill>
                        <Skill>
                            <Box>
                                <SiCss3 /> 
                                <Paragraph skill>CSS</Paragraph>
                            </Box>
                        </Skill>
                        <Skill>
                            <Box>
                                <SiJavascript /> 
                                <Paragraph skill>Js</Paragraph>
                            </Box>
                        </Skill>
                        <Skill>
                            <Box>
                                <SiReact /> 
                                <Paragraph skill>React</Paragraph>
                            </Box>
                        </Skill>
                        <Skill>
                            <Box>
                                <FaNpm />
                                <Paragraph skill>NPM</Paragraph>
                            </Box>
                        
                        </Skill>
                        <Skill>
                            <Box>
                                <FaGitAlt />
                                <Paragraph skill>GIT</Paragraph>
                            </Box>
                        </Skill>
                        <Skill>
                            <Box>
                                <SiGithub />
                                <Paragraph skill>Github</Paragraph>
                            </Box>
                        </Skill>
                    </TechSkills>
                </Tech>          
            </SubWrapper>

        </SkillsWrapper>
    )
}

export default Skills;