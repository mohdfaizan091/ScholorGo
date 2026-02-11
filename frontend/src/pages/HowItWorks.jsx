function HowItWorks() {
  return (
    <div className="section-padding bg-white">
      <div className="container-pro">
        <div className="pro-card pro-card-hover">
          <h2 className="trust-heading">How It Works</h2>
          
          <div className="space-y-8 mt-8">
            <div className="flex items-start space-x-4">
              <div className="achievement-badge">Step 1</div>
              <div>
                <h3 className="font-semibold text-gray-900">Submit Your Inquiry</h3>
                <p className="text-gray-600 mt-1">Complete our simple contact form with your details</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="achievement-badge">Step 2</div>
              <div>
                <h3 className="font-semibold text-gray-900">Team Review</h3>
                <p className="text-gray-600 mt-1">Our experts analyze your profile and requirements</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="achievement-badge">Step 3</div>
              <div>
                <h3 className="font-semibold text-gray-900">Guided Process</h3>
                <p className="text-gray-600 mt-1">We guide you through the complete scholarship process</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;