import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-white text-lg font-semibold mb-4">
          ScholarGO
        </h3>

        <p className="text-sm mb-6">
          Helping students navigate scholarship opportunities with structured guidance.
        </p>

        <div className="flex space-x-6 text-sm">
          <Link to="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-white">
            Terms & Conditions
          </Link>
        </div>

        <p className="text-xs mt-6">
          © 2024 ScholarGO. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
