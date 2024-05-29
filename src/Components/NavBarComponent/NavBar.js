import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faGraduationCap, faTools, faProjectDiagram, faFile } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
    return (
            <nav class="navbar">
                <h1 class="logo-name">SY</h1>
                <ul>
                    <li class="nav-item"><a  href="link"><FontAwesomeIcon icon={faHouse} className="fa-icon"/>Home</a></li>
                    <li class="nav-item"><a  href="link"><FontAwesomeIcon icon={faUser} className="fa-icon" />About</a></li>
                    <li class="nav-item"><a  href="link"><FontAwesomeIcon icon={faTools} className="fa-icon" />Education</a></li>
                    <li class="nav-item"><a href="link"><FontAwesomeIcon icon={faTools} className="fa-icon" />Skills</a></li>
                    <li class="nav-item"><a  href="link"><FontAwesomeIcon icon={faProjectDiagram} className="fa-icon" />Projects</a></li>
                    <li class="nav-item"><a href="link"><FontAwesomeIcon icon={faFile} className="fa-icon" />Resume</a></li>
                </ul>
            </nav>
        
    )
}
export default NavBar;