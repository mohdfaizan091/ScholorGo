function HowItWorks() {
  return (
    <div className="section-padding bg-white">
      <div className="container-pro">
        <div className="pro-card pro-card-hover">
          <h2 className="trust-heading">How It Works</h2>
          
          <div className="space-y-8 mt-8">
            {/* Step 1 - Students reach out to ScholarGo */}
            <div className="flex items-start space-x-4">
              <div className="achievement-badge text-2xl">📝</div>
              <div>
                <h3 className="font-semibold text-gray-900">1. Reach Out</h3>
                <p className="text-gray-600 mt-1">Students reach out to ScholarGo</p>
              </div>
            </div>
            
            {/* Step 2 - We understand their academic profile */}
            <div className="flex items-start space-x-4">
              <div className="achievement-badge text-2xl">📊</div>
              <div>
                <h3 className="font-semibold text-gray-900">2. Profile Review</h3>
                <p className="text-gray-600 mt-1">We understand their academic profile</p>
              </div>
            </div>
            
            {/* Step 3 - We guide them toward suitable scholarship opportunities */}
            <div className="flex items-start space-x-4">
              <div className="achievement-badge text-2xl">🎯</div>
              <div>
                <h3 className="font-semibold text-gray-900">3. Opportunity Match</h3>
                <p className="text-gray-600 mt-1">We guide them toward suitable scholarship opportunities</p>
              </div>
            </div>
            
            {/* Step 4 - We support them throughout the application journey */}
            <div className="flex items-start space-x-4">
              <div className="achievement-badge text-2xl">🤝</div>
              <div>
                <h3 className="font-semibold text-gray-900">4. Application Support</h3>
                <p className="text-gray-600 mt-1">We support them throughout the application journey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;