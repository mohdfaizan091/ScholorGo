import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="section-padding bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="container-pro text-center">
        <h1 className="trust-heading brand-gradient-text">
          Scholarship Guidance Made Simple
        </h1>

        <p className="trust-subheading max-w-2xl mx-auto">
          ScholarGO supports students in navigating scholarship opportunities
          with clarity and structured assistance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link to="/contact">
            <button className="pro-btn-primary">
              Get Started
            </button>
          </Link>
          <Link to="/how-it-works">
            <button className="pro-btn-secondary">
              Learn More
            </button>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="pro-card text-center">
            <div className="text-3xl font-bold brand-gradient-text">500+</div>
            <p className="text-gray-600 mt-2">Students Helped</p>
          </div>
          <div className="pro-card text-center">
            <div className="text-3xl font-bold brand-gradient-text">95%</div>
            <p className="text-gray-600 mt-2">Success Rate</p>
          </div>
          <div className="pro-card text-center">
            <div className="text-3xl font-bold brand-gradient-text">50+</div>
            <p className="text-gray-600 mt-2">Universities</p>
          </div>
          <div className="pro-card text-center trust-indicator">
            <div className="text-3xl">🔒</div>
            <p className="text-gray-600 mt-2">Secure & Confidential</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;