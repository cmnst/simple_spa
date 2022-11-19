import {Project, Paragraph} from '../pages/styles.jsx';
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

export default ProjectCard;