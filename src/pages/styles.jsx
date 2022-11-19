import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

// Reusable

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 65em) {
        width: 100%;
        font-size: .8em;
    }

`

export const Paragraph = styled.div`
    ${props => props.aboutPage && css`
        font-size: 1.2em;
    `}

    ${props => props.projectTitle && css`
        font-size: 1.1em;
        font-weight: 700;
    `}

    ${props => props.description && css`
        margin-top: .5rem;
        font-size: .8em;
    `}

    ${props => props.skill && css`
        margin-left: .4rem;
    `}

`



// Navigation

export const StyledBurger = styled.div`
  width: 2em;
  height: 2em;
  cursor: pointer;
  display: none;
  margin-left: 1.5em;
  z-index: 2;

  @media (max-width: 30em) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  div {
    width: 2em;
    height: 0.2em;
    margin: 0;
    background-color: white;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const StyledFullMenu = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: -100vh;
  left: 0;
  z-index: 1;
  background-color: rgb(27, 27, 37);
  transition: all 0.3s linear;
  transform: ${({ open }) => (open ? "translateY(100%)" : "translateX(0)")};
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  ul > li {
    margin: 1em;
  }

` 


export const Nav = styled.div`
    min-width: 10%;
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(27, 27, 37);

    @media (min-width: 41em) {
        min-width: 12%;
        height: 100%;
    }

    @media (max-width: 40em) {
        min-width: 12%;
        width: 100%;
        height: auto;
        flex-direction: row;
        justify-content: space-between;
    }
`

export const NavLinks= styled.ul`
    list-style-type: none;
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;

    @media (max-width: 40em) {
        width: 100%;
        height: auto;
        flex-direction: row;
        justify-content: space-evenly;
    }
    @media (max-width: 30em) {
        display: none;
    }
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
    @media (max-width: 40em) {
        margin: 0 1rem;
    }
`

export const SocialLinkWrapper = styled.div`
    width: auto;
    @media (max-width: 40em) {
        display: flex;
        flex-direction: row;
        margin-right: 1.5em;
    }
`

const iconStyle = css`
    color: rgb(255, 255, 255);
    height: 1.5em;
    width: 1.5em;
    transition: all .4s ease;
    margin: 1em .5em;
    &:hover {
        cursor: pointer;
        color: rgb(255, 204, 0);
    }
    @media (max-width: 30em) {
        height: 1.4em;
        width: 1.4em;
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

    @media (max-width: 30em) {
        min-height: 100%; 
        flex-grow: 1;
    }

`

// PAGES

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

// About page

export const AboutWrapper = styled(Wrapper)`
    @media (max-width: 58em) {
        width: 80%;
        min-height: 100%;
        height: auto;
        font-size: .7rem;
    }

`

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
    font-size: 1.2em;
`

// Skills page

export const SkillsWrapper = styled(Wrapper)`
    @media (max-width: 600px) {
        width: 100%;
        height: auto;
        font-size: .7rem;
    }

`

export const SubWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    @media (max-width: 600px) {
        font-size: .7rem;
        height: 100%;
    }

`

export const Tech = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 3rem;
`

export const TechSkills = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 600px) {
        max-width: 60%;
    }

    @media (max-width: 850px) {
        max-width: 80%;
    }
`

export const Skill = styled.div`
    display: block;
    align-items: center;
    justify-content: space-evenly;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    border: 2px solid rgb(27, 27, 37);
    border-radius: 5px;
    font-size: 1.3rem;
    margin: .2rem;
    padding: .5rem;
    transition: all .4s ease;
    &:hover {
        color: rgb(255, 205, 0);
        transform: translateY(-3px);

    }
    @media (max-width: 600px) {
        width: auto;
        height: auto;
        font-size: 1rem;
    }

`

export const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    margin: 0;
    @media (max-width: 600px) {
        font-size: 1rem;
    }


`

// Portfolio page

export const ProjectsWrapper = styled(Wrapper)`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2em;
    align-items: flex-start;
    margin-top: 2rem;

    @media (max-width: 58em) {
        grid-template-columns: repeat(2, 1fr);
        font-size: .7rem;
        width: 70%;
    }

    @media (max-width: 40em) {
        grid-template-columns: repeat(2, 1fr);
        font-size: .7rem;
    }

    @media (max-width: 30em) {
        min-height: 100%;
        grid-template-columns: repeat(1, 1fr);
        gap: 1em;
        font-size: .7rem;
    }
`

export const Project = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: baseline;
    flex: 1;
    border: 2px solid rgb(27, 27, 37);
    border-radius: 5px;
    font-size: 1rem;
    // height: 100%;
    // width: 100%;
    min-width: 15em;
    min-height: 8em;
    padding: .5rem;
    transition: all .4s ease;
    &:hover {
        color: rgb(255, 205, 0);
        transform: translateY(-3px);

    }

    @media (max-width: 30em) {
        min-width: 10em;
    }

    @media (max-width: 40em) {
        font-size: .7rem;
    }

    @media (max-width: 65em) {
        grid-template-columns: repeat(2, 1fr);
        max-width: 100%;
        width: auto;
        height: auto;
        font-size: .8rem;
    }

`


