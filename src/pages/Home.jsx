import {Wrapper, Button, Avatar, LowerTitle} from './styles';
import Typewriter from 'typewriter-effect';
import avatar from '../assets/avatar.svg';
import { motion } from 'framer-motion';


const Home = () => {
    return(
        <Wrapper>
            <Avatar src={avatar} alt="avatar homepage" 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1,
                    delay: 0.3,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            />
            <motion.h1 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}>Hi! I'm George.
            </motion.h1>
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