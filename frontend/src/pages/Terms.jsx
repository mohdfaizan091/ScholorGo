function Terms() {
  return (
    <div className="section-padding bg-white">
      <div className="container-pro">
        <div className="pro-card pro-card-hover">
          <h2 className="trust-heading">Terms & Conditions</h2>
          
          <div className="space-y-4 text-gray-700">
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
              <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Important Notice</h3>
              <p>
                ScholarGO provides guidance services only and does not guarantee
                scholarship approval.
              </p>
            </div>
            
            <div className="pro-list">
              <div className="pro-list-item">
                <div className="pro-list-bullet">1</div>
                <p>Users agree to provide accurate and truthful information</p>
              </div>
              <div className="pro-list-item">
                <div className="pro-list-bullet">2</div>
                <p>Our services are advisory and non-binding</p>
              </div>
              <div className="pro-list-item">
                <div className="pro-list-bullet">3</div>
                <p>Final scholarship decisions rest with the institutions</p>
              </div>
              <div className="pro-list-item">
                <div className="pro-list-bullet">4</div>
                <p>We maintain confidentiality of all client information</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;