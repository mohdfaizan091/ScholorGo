import { Link } from "react-router-dom";
import logo from "../assets/scholargo-logo.png";

// ✅ Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 py-8">
      <div className="container-pro">
        {/* Top Row - Brand + Social */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          
          {/* Logo + Brand + Tagline + Reach text */}
          <div className="flex items-start space-x-3 mb-4 md:mb-0">
            <img 
              src={logo} 
              alt="ScholarGo Logo" 
              className="h-8 w-auto"
            />
            <div>
              <h3 className="text-white text-base font-bold">
                ScholarGo
              </h3>
              <p className="text-xs text-gray-400">
                Scholarship Ka Saathi
              </p>
              <p className="text-xs text-gray-400 mt-1 max-w-xs">
                Your trusted partner for scholarship guidance.
              </p>
            </div>
          </div>

          {/* ✅ Social Media Icons - Font Awesome Brands */}
          <div className="flex items-center space-x-3">
            <a 
              href="https://www.instagram.com/vaish_haha?igsh=MWVjcHQ2aGV6ZjlvMg==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-700 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-500 rounded-full flex items-center justify-center transition-all"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-white text-base" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mohd-vaish?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="text-white text-base" />
            </a>
          </div>
        </div>

        {/* Bottom Row - All Links in ONE LINE */}
        <div className="flex flex-wrap items-center justify-between border-t border-gray-700 pt-6">
          
          {/* All Links - Single Line */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-700">•</span>
            
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-gray-700">•</span>
            
            <Link to="/contact" className="hover:text-white transition-colors">
              Get In Touch
            </Link>
            <span className="text-gray-700">•</span>
            
            <Link to="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
          </div>

          {/* Copyright - Right Side */}
          <p className="text-xs text-gray-400">
            © ScholarGo | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;