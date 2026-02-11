import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container-pro">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 brand-gradient-bg rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">SG</span>
            </div>
            <div>
              <h2 className="text-xl font-bold brand-gradient-text">ScholarGO</h2>
              <p className="text-xs text-gray-500 -mt-1">Global Education</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className="px-4 py-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
            >
              About
            </Link>
            <Link 
              to="/what-we-do" 
              className="px-4 py-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
            >
              What We Do
            </Link>
            <Link 
              to="/how-it-works" 
              className="px-4 py-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
            >
              How It Works
            </Link>
            <Link 
              to="/achievements" 
              className="px-4 py-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
            >
              Achievements
            </Link>
            <Link 
              to="/contact" 
              className="px-4 py-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;