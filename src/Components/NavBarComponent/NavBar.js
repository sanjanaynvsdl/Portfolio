// import "./NavBar.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHouse, faUser, faTools, faProjectDiagram, faFile } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
// function NavBar() {
//     return (
//             <nav class="navbar">
//                 <h1 class="logo-name">SY</h1>
//                 <ul>
//                     <li class="nav-item"><a  href="link"><FontAwesomeIcon icon={faHouse} className="fa-icon"/>Home</a></li>
//                     <li class="nav-item"><Link to='/about'><FontAwesomeIcon icon={faUser} className="fa-icon" />About</Link></li>
//                     {/* <li class="nav-item"><a  href="link"><FontAwesomeIcon icon={faTools} className="fa-icon" />Education</a></li> */}
//                     <li class="nav-item"><Link to='/skills'><FontAwesomeIcon icon={faTools} className="fa-icon" />Skills</Link></li>
//                     <li class="nav-item"><a  href="link"><FontAwesomeIcon icon={faProjectDiagram} className="fa-icon" />Projects</a></li>
//                     <li class="nav-item"><a href="link"><FontAwesomeIcon icon={faFile} className="fa-icon" />Resume</a></li>
//                 </ul>
//             </nav>
        
//     )
// }
// export default NavBar;
import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faTools, faProjectDiagram, faFile } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="logo-name">SY</h1>
      <ul>
        <li className="nav-item">
          <Link to="/"><FontAwesomeIcon icon={faHouse} className="fa-icon"/>Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/about'><FontAwesomeIcon icon={faUser} className="fa-icon" />About</Link>
        </li>
        <li className="nav-item">
          <Link to='/skills'><FontAwesomeIcon icon={faTools} className="fa-icon" />Skills</Link>
        </li>
        <li className="nav-item">
          <Link to='/projects'><FontAwesomeIcon icon={faProjectDiagram} className="fa-icon" />Projects</Link>
        </li>
        <li className="nav-item">
           <a href="https://drive.google.com/file/d/13kaPsdMNDsM4LV9g7m5-E5PTildp-yYf/view" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFile} className="fa-icon" />Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
