import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 py-12">
      <div className="container-pro">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 brand-gradient-bg rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">SG</span>
              </div>
              <div>
                <h3 className="text-white text-lg font-bold">
                  ScholarGO
                </h3>
                <p className="text-sm">Global Education Partners</p>
              </div>
            </div>
            <p className="text-sm max-w-md">
              Helping students navigate scholarship opportunities with structured, 
              confidential, and professional guidance.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                <Link to="/privacy-policy" className="block hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="block hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-2">
                <Link to="/contact" className="block hover:text-white transition-colors">
                  Get In Touch
                </Link>
                <Link to="/about" className="block hover:text-white transition-colors">
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm">
            © 2024 ScholarGO. All Rights Reserved. | 
            <span className="mx-2">🔒</span>
            Trusted & Confidential
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;