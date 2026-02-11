import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Scholarship Guidance Made Simple
      </h1>

      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        ScholarGO supports students in navigating scholarship opportunities
        with clarity and structured assistance.
      </p>

      <Link to="/contact">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default Home;
