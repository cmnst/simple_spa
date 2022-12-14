import { Outlet, useLocation } from "react-router-dom";
import {Nav, NavLinks, NavLink, SocialLinkWrapper, Github, LinkedIn} from '../pages/styles.jsx';
import Burger from './Burger.jsx';
import FullMenu from "./FullMenu.jsx";
import { useState, useEffect } from "react";


const Navigation = () => {

  const [open, setOpen] = useState(false);
  const pathname = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname])

  return (
    <Nav>
      <Burger open={open} setOpen={setOpen} />
      <FullMenu open={open} setOpen={setOpen}/>
      <NavLinks>
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
      </NavLinks>
      <SocialLinkWrapper>
        <Github />
        <LinkedIn />
      </SocialLinkWrapper>
    </Nav>
  );
};

export default Navigation;