import { Outlet } from "react-router-dom";
import {Nav, LinkWrapper, NavLink, SocialLinkWrapper, Github, LinkedIn} from './styles.jsx';

const Navigation = () => {
  return (
    <Nav>
      <LinkWrapper>
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/about">
          About me
        </NavLink>
        <NavLink to="/skills">
          Skills
        </NavLink>
        <NavLink to="/portfolio">
          Projects
        </NavLink>
        <Outlet />
      </LinkWrapper>
      <SocialLinkWrapper>
        <Github />
        <LinkedIn />
      </SocialLinkWrapper>
    </Nav>
  );
};

export default Navigation;