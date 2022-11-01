import { Link, Outlet } from "react-router-dom";
import '../styles.css';

const Navigation = () => {
  return (
    <div className="mainNav">
    <Link smooth className="mainNav-link" to="/">
      Home
    </Link>
    <Link smooth className="mainNav-link" to="/portfolio">
      Portfolio
    </Link>
    <Link smooth className="mainNav-link" to="/about">
      About me
    </Link>
    <Link smooth className="mainNav-link" to="/contact">
      Contact
    </Link>
      <Outlet />
    </div>
  );
};

export default Navigation;