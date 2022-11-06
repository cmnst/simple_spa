import { Wrapper, SkillsWrapper, Tech, TechSkills, Skill, Soft, SoftSkills, SoftSkill} from "./styles";
import {SiJavascript, SiHtml5, SiCss3, SiReact, SiGithub} from 'react-icons/si';
import {FaNpm, FaGitAlt, FaBeer, FaGamepad, FaBrain, FaPuzzlePiece, FaBoxes, FaBook} from 'react-icons/fa';
import { IconContext } from "react-icons";

const Skills = () => {
    return(
        <Wrapper>
            <h1>My skills</h1>
            <SkillsWrapper>
                <Tech>
                    <TechSkills>
                        <Skill><SiHtml5 /> HTML</Skill>
                        <Skill><SiCss3 /> CSS</Skill>
                        <Skill><SiJavascript /> Js</Skill>
                        <Skill><SiReact /> React</Skill>
                        <Skill><FaNpm /> NPM</Skill>
                        <Skill><FaGitAlt /> GIT</Skill>
                        <Skill><SiGithub /> Github</Skill>
                    </TechSkills>
                </Tech>          
                <Soft>
                    <SoftSkills>
                        <SoftSkill><FaBeer /> Friendly guy</SoftSkill>
                        <SoftSkill><FaGamepad /> Team player </SoftSkill>
                        <SoftSkill><FaBrain /> Creative mind</SoftSkill>
                        <SoftSkill><FaPuzzlePiece /> Problem solver</SoftSkill>
                        <SoftSkill><FaBoxes /> Well organised</SoftSkill>
                        <SoftSkill><FaBook /> Eager to learn</SoftSkill>
                    </SoftSkills>
                </Soft>
            </SkillsWrapper>

        </Wrapper>
    )
}

export default Skills;