import { Link } from "react-router-dom";
import logo from "../assets/scholargo-logo.png";

// ✅ Solid Icons - ab install ho chuke hain
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faBriefcase, faCog, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-pro flex justify-between items-center py-3">
        {/* Logo + Brand + Tagline */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="ScholarGo Logo" className="h-8 w-auto" />
          <div>
            <span className="text-xl font-bold brand-gradient-text">ScholarGo</span>
            <p className="text-xs text-gray-500">Scholarship Ka Saathi</p>
          </div>
        </Link>

        {/* Navigation Links with Icons */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium">
            <FontAwesomeIcon icon={faHome} className="text-sm" />
            <span>Home</span>
          </Link>
          <Link to="/about" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium">
            <FontAwesomeIcon icon={faInfoCircle} className="text-sm" />
            <span>About</span>
          </Link>
          <Link to="/what-we-do" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium">
            <FontAwesomeIcon icon={faBriefcase} className="text-sm" />
            <span>What We Do</span>
          </Link>
          <Link to="/how-it-works" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium">
            <FontAwesomeIcon icon={faCog} className="text-sm" />
            <span>How It Works</span>
          </Link>
          <Link to="/contact">
            <button className="bg-[#0A2342] text-white px-4 py-2 rounded-lg hover:bg-[#1E5F5C] transition-colors flex items-center space-x-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
              <span>Contact</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;