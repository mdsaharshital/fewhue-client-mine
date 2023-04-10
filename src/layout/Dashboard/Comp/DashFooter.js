import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

function DashFooter() {
  return (
    <footer className="bg-dark text-white dash_footer_container">
      <div className="container-fluid h-full">
        <div className="row justify-content-center align-items-center h-full">
          <div className="col-12 col-md-4 text-center mb-3 mb-md-0 h-full">
            <Link to="/" className="text-decoration-none text-white">
              <FontAwesomeIcon icon={faHome} className="me-2" />
              Home
            </Link>
          </div>
          <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
            <Link to="/dashboard" className="text-decoration-none text-white">
              <FontAwesomeIcon icon={faUser} className="me-2" />
              Dashboard
            </Link>
          </div>
          <div className="col-12 col-md-4 text-center">
            <Link to="/logout" className="text-decoration-none text-white">
              <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
              Logout
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default DashFooter;
