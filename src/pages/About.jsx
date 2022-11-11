import { AboutImg, Name, AboutWrapper, Paragraph } from './styles';
import {BsCodeSlash} from 'react-icons/bs';
import about from '../assets/skills.svg';

const About = () => {
    return(
        <AboutWrapper>
            <h1>About me</h1>
            <AboutImg src={about} alt="about" />
            <Paragraph aboutPage><BsCodeSlash /> Hello! I'm <Name>George Benson</Name>.</Paragraph>
            <Paragraph aboutPage><BsCodeSlash /> I'm a self-taught front-end web developer with 2 years of working experience.</Paragraph>
            <Paragraph aboutPage><BsCodeSlash /> Constantly challenging myself to improve my skills</Paragraph>
            <Paragraph aboutPage><BsCodeSlash /> Learning new technologies through projects</Paragraph>
        </AboutWrapper>
    )
}

export default About;