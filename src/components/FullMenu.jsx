import { StyledFullMenu } from "../pages/styles";
import {NavLinks, NavLink} from '../pages/styles';
import { Outlet } from "react-router-dom";

const FullMenu = ({open}) => {
    return(
        <StyledFullMenu open={open} >
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About me</NavLink></li>
                <li><NavLink to="/skills">Skills</NavLink></li>
                <li><NavLink to="/portfolio">Projects</NavLink></li>
                <Outlet />
            </ul>
        </StyledFullMenu>
    )
}

export default FullMenu;