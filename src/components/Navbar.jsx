import logo from "../assets/DianaPercatkinaLogo.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-14" src={logo} alt="logo"/>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/diana-percatkina-91b937217/"><FaLinkedin href="https://www.linkedin.com/in/diana-percatkina-91b937217/"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/cov393"><FaGithub /></a>
            </div>
        </nav>
    );
};

export default Navbar;