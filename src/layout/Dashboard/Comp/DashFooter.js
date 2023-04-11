import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

function DashFooter() {
  return (
    <footer className="text-white dash_footer_container py-1">
      <div className="container-fluid ">
        <div className="d-flex justify-content-center align-items-center h-full">
          <div className="text-center">
            <Link to="/" className="px-4 py-2 text-decoration-none btn btn-outline-dark">
              <FontAwesomeIcon icon={faHome} className="me-2" />
              Home
            </Link>
          </div>
          <div className="text-center">
            <Link to="/dashboard" className="px-4 py-2 text-decoration-none btn btn-outline-dark">
              <FontAwesomeIcon icon={faUser} className="me-2" />
              Dashboard
            </Link>
          </div>
          <div className="text-center">
            <Link to="/logout" className="px-4 py-2 text-decoration-none btn btn-outline-dark">
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
