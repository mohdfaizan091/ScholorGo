import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-blue-600">
          ScholarGO
        </h2>

        <div className="flex space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/what-we-do" className="hover:text-blue-600">What We Do</Link>
          <Link to="/how-it-works" className="hover:text-blue-600">How It Works</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          <Link to="/achievements" className="hover:text-blue-600">Achievements</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
