function About() {
  return (
    <div className="section-padding bg-white">
      <div className="container-pro">
        <div className="pro-card pro-card-hover">
          <h2 className="trust-heading">About ScholarGO</h2>
          
          <p className="text-gray-700 leading-relaxed mb-8">
            ScholarGO is built to simplify scholarship applications by providing
            structured guidance and operational clarity to students.
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