import { Wrapper, AboutImg, Name } from './styles';
import {BsCodeSlash} from 'react-icons/bs';
import about from '../assets/skills.svg';

const About = () => {
    return(
        <Wrapper>
            <h1>About me</h1>
            <p><BsCodeSlash /> Hello! I'm <Name>George Benson</Name>.</p>
            <p><BsCodeSlash /> I'm a self-taught front-end web developer with 2 years of working experience.</p>
            <p><BsCodeSlash /> Constantly challenging myself to improve my skills</p>
            <p><BsCodeSlash /> Learning new technologies through projects</p>
            <AboutImg src={about} alt="about" />
        </Wrapper>
    )
}

export default About;