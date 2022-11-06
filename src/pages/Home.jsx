import {Wrapper, Button, Avatar, LowerTitle} from './styles';
import Typewriter from 'typewriter-effect';
import avatar from '../assets/avatar.svg';


const Home = () => {
    return(
        <Wrapper>
            <Avatar src={avatar} alt="avatar homepage" />
            <h1>Hi! I'm George.</h1>
            <LowerTitle>
                <Typewriter
                    options={{
                        strings: ['Programmer', 'Front-end developer'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </LowerTitle>
            <Button to='/about'>Let's start</Button>
        </Wrapper>
    )
}

export default Home;