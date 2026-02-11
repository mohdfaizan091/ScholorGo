function Achievements() {
  return (
    <div className="section-padding bg-gray-50">
      <div className="container-pro">
        <div className="pro-card pro-card-hover">
          <h2 className="trust-heading">Our Achievements</h2>
          
          <p className="text-gray-700 mb-8">
            ScholarGO has successfully guided multiple students
            through structured scholarship application processes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <div className="text-2xl font-bold brand-gradient-text mb-2">$2M+</div>
              <p className="text-gray-600">In scholarship funds secured for students</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <div className="text-2xl font-bold text-green-700 mb-2">98%</div>
              <p className="text-gray-600">Student satisfaction rate</p>
            </div>
          </div>
          
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