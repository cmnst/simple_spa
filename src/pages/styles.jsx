import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

// Reusable

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

// Navigation

export const Nav = styled.div`
    min-width: 10%;
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(27, 27, 37);
`;

export const LinkWrapper= styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const NavLink = styled(Link)`
    margin: 1rem 0;
    color:rgb(255, 255, 255);
    transition: all .4s ease;
    font-size: .8rem;
    text-decoration: none;
    text-transform: uppercase;
    &:hover {
        color: rgb(255, 204, 0);
    }
`

export const SocialLinkWrapper = styled.div`
    width: auto;
`

const iconStyle = css`
    color: rgb(255, 255, 255);
    height: 1.5rem;
    width: 1.5rem;
    transition: all .4s ease;
    margin: 1rem .5rem;
    &:hover {
        cursor: pointer;
        color: rgb(255, 204, 0);
    }
`

export const Github = styled(FaGithub)`
    ${iconStyle}

`
export const LinkedIn = styled(FaLinkedin)`
    ${iconStyle}

`

// Layout 

export const Layout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

// Home page

export const Avatar = styled.img`
    width: 5rem;
    height: 5rem;

`

export const LowerTitle = styled.div`
    font-size: 1.5rem;
    color: rgb(255, 204, 0);
`

export const Button = styled(Link)`
    position: relative;
    padding-top: .2rem;
    width: 8rem;
    height: 2rem;
    margin-top: 2rem;
    font-size: .8rem;
    cursor: pointer;
    color: rgb(255, 255, 255);
    background: transparent;
    font-family: 'Space Mono', monospace;
    text-decoration: none;
    transition: all .4s ease;
    &:hover {
        color: rgb(255, 204, 0);
    }

`

// About

export const AboutImg = styled.img`
    width: 10rem;
    height: 10rem;

`

export const TextWrapper = styled.div`
    width: 10rem;
    height: 10rem;

`

export const Name = styled.span`
    color: rgb(255, 205, 0);
`

// Skills

export const SkillsWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-top: 3rem;


`

export const Tech = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 3rem;
`

export const TechSkills = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const Skill = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    max-width: 8rem;
    min-width: 7rem;
    min-height: 2.5rem;
    max-height: 3rem;
    border: 2px solid rgb(27, 27, 37);
    border-radius: 5px;
    font-size: 1rem;
    margin: .2rem;
    transition: all .4s ease;
    &:hover {
        color: rgb(255, 205, 0);
        transform: translateY(-3px);

    }

`

export const Soft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const SoftSkills = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 4px;
    grid-row-gap: 4px;
`

export const SoftSkill = styled(Skill)`
    min-width: 15rem;
    font-size: .9rem;
    border: none;
    transition: none;
    &:hover {
        transform: none;
    }


`

// Portfolio

export const ProjectWrapper = styled(Wrapper)`
    flex-direction: row;
    margin-top: 3rem;
`

export const Project = styled.div`
    max-width: 25rem;
    min-width: 15rem;
    min-height: 7rem;
    max-height: 10rem;
    background-color: rgb(27, 27, 37);
    border-radius: 3px;
    margin: 0 1rem;
    transition: all .4s ease;
    &:hover {
        transform: scale(1.05)
    }

`

// Contact


