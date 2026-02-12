import { Link } from "react-router-dom";
import logo from "../assets/scholargo-logo.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faHeadset } from '@fortawesome/free-solid-svg-icons'; // ✅ Added icons

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 py-10">
      <div className="container-pro">
        
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          
          
          <div className="flex items-start space-x-3 mb-4 md:mb-0">
            <img 
              src={logo} 
              alt="ScholarGo Logo" 
              className="h-10 sm:h-12 w-auto" 
            />
            <div>
              <h3 className="text-white text-lg sm:text-xl font-bold brand-gradient-text">
                ScholarGo
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">
                Scholarship Ka Saathi
              </p>
              <p className="text-xs text-gray-400 mt-1 max-w-xs">
                Your trusted partner for scholarship guidance.
              </p>
            </div>
          </div>

         
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

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 border-t border-b border-gray-700 py-6">
          
          {/* Official Email */}
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-[#1E5F5C]/20 rounded-full flex items-center justify-center flex-shrink-0">
              <FontAwesomeIcon icon={faEnvelope} className="text-[#FFB347] text-lg" />
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-1"> Official Email</h4>
              <a 
                href="mailto:scholergo@gmail.com" 
                className="text-gray-300 hover:text-[#FFB347] text-sm block transition-colors"
              >
                scholergo@gmail.com
              </a>
              <p className="text-xs text-gray-500 mt-0.5">Primary</p>
            </div>
          </div>
          
          {/* Support Email */}
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-[#1E5F5C]/20 rounded-full flex items-center justify-center flex-shrink-0">
              <FontAwesomeIcon icon={faHeadset} className="text-[#FFB347] text-lg" />
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-1"> Support Email</h4>
              <a 
                href="mailto:carescholergo@gmail.com" 
                className="text-gray-300 hover:text-[#FFB347] text-sm block transition-colors"
              >
                carescholergo@gmail.com
              </a>
              <p className="text-xs text-gray-500 mt-0.5">24/7 Assistance</p>
            </div>
          </div>
          
          {/* Contact Number */}
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-[#1E5F5C]/20 rounded-full flex items-center justify-center flex-shrink-0">
              <FontAwesomeIcon icon={faPhone} className="text-[#FFB347] text-lg" />
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-1"> Helpline</h4>
              <a 
                href="tel:+918652704563" 
                className="text-gray-300 hover:text-[#FFB347] text-sm block font-medium transition-colors"
              >
                +91 86527 04563
              </a>
              <p className="text-xs text-gray-500 mt-0.5">Mon-Sat, 10AM - 7PM</p>
            </div>
          </div>
          
        </div>

      
        <div className="flex flex-col md:flex-row items-center justify-between pt-2">
          
          {/* All Links - Single Line */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs mb-3 md:mb-0">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-600">•</span>
            
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-gray-600">•</span>
            
            <Link to="/contact" className="hover:text-white transition-colors">
              Get In Touch
            </Link>
            <span className="text-gray-600">•</span>
            
            <Link to="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} ScholarGo | All Rights Reserved
          </p>
        </div>
        
        {/*  Mobile View - Quick Contact Bar (Extra) */}
        <div className="md:hidden flex justify-around items-center mt-6 pt-4 border-t border-gray-700">
          <a href="tel:+918652704563" className="flex flex-col items-center">
            <div className="w-10 h-10 bg-[#0A2342] rounded-full flex items-center justify-center mb-1">
              <FontAwesomeIcon icon={faPhone} className="text-white text-sm" />
            </div>
            <span className="text-[10px] text-gray-400">Call</span>
          </a>
          <a href="mailto:scholergo@gmail.com" className="flex flex-col items-center">
            <div className="w-10 h-10 bg-[#0A2342] rounded-full flex items-center justify-center mb-1">
              <FontAwesomeIcon icon={faEnvelope} className="text-white text-sm" />
            </div>
            <span className="text-[10px] text-gray-400">Email</span>
          </a>
          <a href="mailto:carescholergo@gmail.com" className="flex flex-col items-center">
            <div className="w-10 h-10 bg-[#0A2342] rounded-full flex items-center justify-center mb-1">
              <FontAwesomeIcon icon={faHeadset} className="text-white text-sm" />
            </div>
            <span className="text-[10px] text-gray-400">Support</span>
          </a>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;