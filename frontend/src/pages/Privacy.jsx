function Privacy() {
  return (
    <div className="section-padding bg-gray-50">
      <div className="container-pro">
        <div className="pro-card pro-card-hover">
          <h2 className="trust-heading">Privacy Policy</h2>
          
          <div className="space-y-4 text-gray-700">
            <p>
              At ScholarGO, we respect your privacy and are committed to protecting your personal information.
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h3 className="font-semibold text-blue-800 mb-2">🔒 Our Commitment</h3>
              <p>
                All submitted information is used strictly for scholarship guidance purposes and is not shared
                with third parties without your explicit consent.
              </p>
            </div>
            
            <div className="pro-list">
              <div className="pro-list-item">
                <div className="pro-list-bullet">✓</div>
                <p>Secure data encryption for all personal information</p>
              </div>
              <div className="pro-list-item">
                <div className="pro-list-bullet">✓</div>
                <p>No spam emails or marketing calls</p>
              </div>
              <div className="pro-list-item">
                <div className="pro-list-bullet">✓</div>
                <p>Right to access and delete your data anytime</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;