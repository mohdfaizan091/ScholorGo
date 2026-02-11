function About() {
  return (
    <div className="section-padding bg-white">
      <div className="container-pro">
        <div className="pro-card pro-card-hover">
          {/* ✅ Updated heading - brand name consistent */}
          <h2 className="trust-heading">About ScholarGo</h2>
          
          {/* ✅ Updated description - exact wording from instruction */}
          <p className="text-gray-700 leading-relaxed mb-6">
            ScholarGo is a scholarship assistance and guidance platform built to help students navigate 
            scholarship opportunities with clarity and confidence.
          </p>
          
          {/* ✅ Added second paragraph - exact wording from instruction */}
          <p className="text-gray-700 leading-relaxed mb-8">
            We aim to bridge the gap between deserving students and the opportunities available to 
            them through proper guidance and structured support.
          </p>
          
          <div className="pro-list">
            <div className="pro-list-item">
              <div className="pro-list-bullet">✓</div>
              <div>
                <h3 className="font-semibold text-gray-900">Mission Driven</h3>
                <p className="text-gray-600">Making education accessible through structured guidance</p>
              </div>
            </div>
            
            <div className="pro-list-item">
              <div className="pro-list-bullet">✓</div>
              <div>
                <h3 className="font-semibold text-gray-900">Expert Team</h3>
                <p className="text-gray-600">Industry professionals with 10+ years experience</p>
              </div>
            </div>
            
            <div className="pro-list-item">
              <div className="pro-list-bullet">✓</div>
              <div>
                <h3 className="font-semibold text-gray-900">Confidential Process</h3>
                <p className="text-gray-600">Your information is secure and private</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;