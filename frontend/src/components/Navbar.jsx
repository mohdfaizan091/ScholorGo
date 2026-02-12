import { Link } from "react-router-dom";
import logo from "../assets/scholargo-logo.png";
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, faInfoCircle, faBriefcase, faCog, 
  faEnvelope, faTrophy, faBars, faTimes
} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-pro flex justify-between items-center py-3 sm:py-3">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
          <img 
            src={logo} 
            alt="ScholarGo Logo" 
            className="h-10 sm:h-12 w-auto"
          />
          <div>
            <span className="text-lg sm:text-xl font-bold brand-gradient-text">ScholarGo</span>
            <p className="text-[10px] sm:text-xs text-gray-500">Scholarship Ka Saathi</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <Link to="/" className="flex items-center space-x-1 text-gray-700 hover:text-[#1E5F5C] font-medium text-sm lg:text-base">
            <FontAwesomeIcon icon={faHome} className="text-xs lg:text-sm" />
            <span>Home</span>
          </Link>
          <Link to="/about" className="flex items-center space-x-1 text-gray-700 hover:text-[#1E5F5C] font-medium text-sm lg:text-base">
            <FontAwesomeIcon icon={faInfoCircle} className="text-xs lg:text-sm" />
            <span>About</span>
          </Link>
          <Link to="/what-we-do" className="flex items-center space-x-1 text-gray-700 hover:text-[#1E5F5C] font-medium text-sm lg:text-base">
            <FontAwesomeIcon icon={faBriefcase} className="text-xs lg:text-sm" />
            <span>What We Do</span>
          </Link>
          <Link to="/how-it-works" className="flex items-center space-x-1 text-gray-700 hover:text-[#1E5F5C] font-medium text-sm lg:text-base">
            <FontAwesomeIcon icon={faCog} className="text-xs lg:text-sm" />
            <span>How It Works</span>
          </Link>
          <Link to="/achievements" className="flex items-center space-x-1 text-gray-700 hover:text-[#1E5F5C] font-medium text-sm lg:text-base">
            <FontAwesomeIcon icon={faTrophy} className="text-xs lg:text-sm" />
            <span>Achievements</span>
          </Link>
          <Link to="/contact">
            <button className="bg-[#0A2342] text-white px-4 py-2 rounded-lg hover:bg-[#1E5F5C] transition-colors flex items-center space-x-2 text-sm lg:text-base">
              <FontAwesomeIcon icon={faEnvelope} className="text-xs lg:text-sm" />
              <span>Contact</span>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon 
            icon={isMenuOpen ? faTimes : faBars} 
            className="text-xl text-[#0A2342]" 
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0 z-50">
          <div className="container-pro py-4 flex flex-col space-y-3">
            <Link 
              to="/" 
              className="flex items-center space-x-3 text-gray-700 hover:text-[#1E5F5C] font-medium py-2 px-3 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faHome} className="w-5 text-[#0A2342]" />
              <span>Home</span>
            </Link>
            <Link 
              to="/about" 
              className="flex items-center space-x-3 text-gray-700 hover:text-[#1E5F5C] font-medium py-2 px-3 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faInfoCircle} className="w-5 text-[#0A2342]" />
              <span>About</span>
            </Link>
            <Link 
              to="/what-we-do" 
              className="flex items-center space-x-3 text-gray-700 hover:text-[#1E5F5C] font-medium py-2 px-3 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faBriefcase} className="w-5 text-[#0A2342]" />
              <span>What We Do</span>
            </Link>
            <Link 
              to="/how-it-works" 
              className="flex items-center space-x-3 text-gray-700 hover:text-[#1E5F5C] font-medium py-2 px-3 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faCog} className="w-5 text-[#0A2342]" />
              <span>How It Works</span>
            </Link>
            <Link 
              to="/achievements" 
              className="flex items-center space-x-3 text-gray-700 hover:text-[#1E5F5C] font-medium py-2 px-3 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faTrophy} className="w-5 text-[#0A2342]" />
              <span>Achievements</span>
            </Link>
            <div className="pt-2 border-t border-gray-100">
              <Link 
                to="/contact" 
                className="flex items-center space-x-3 text-white font-medium py-2 px-3 bg-[#0A2342] hover:bg-[#1E5F5C] rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-5" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;