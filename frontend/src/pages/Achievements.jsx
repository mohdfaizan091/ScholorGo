function Achievements() {
  return (
    <div className="section-padding bg-gray-50">
      <div className="container-pro">
        <div className="pro-card pro-card-hover">
          <h2 className="trust-heading">Our Achievements</h2>
          
          {/* Round 1 – 2026 Successfully Closed */}
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold text-sm mb-6">
            🎉 Round 1 – 2026 Successfully Closed
          </span>
          
          {/* Key achievements - simple bullet points */}
          <div className="space-y-4 mt-4">
            <div className="flex items-start space-x-3">
              <span className="text-green-600 text-xl">✓</span>
              <p className="text-gray-700 text-lg">Students guided toward successful scholarship outcomes</p>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-green-600 text-xl">✓</span>
              <p className="text-gray-700 text-lg">Growing ScholarGo scholar community</p>
            </div>
          </div>
          
          {/* Optional mission line */}
          <div className="mt-8 p-5 bg-amber-50 border border-amber-100 rounded-lg">
            <p className="text-amber-800 italic">
              "Every round strengthens our mission to simplify access to education."
            </p>
          </div>
          
          {/* Award badge */}
          <div className="mt-8">
            <span className="achievement-badge animate-float">
              🏆 Award Winning Service
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;