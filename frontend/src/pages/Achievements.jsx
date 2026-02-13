function Achievements() {
  // ✅ 3 Students who got scholarship
 const scholars = [
  {
    name: "Mahek Khan",
    quote: "ScholarGo helped me find and apply for this scholarship. The money is supporting my entire first year of college.",
    image: "/src/assets/images/testimonials/student1.jpg",
    year: "2026"
  },
  {
    name: "Akshay",
    quote: "I didn't know I was eligible for this scholarship. ScholarGo's guidance helped me to secure.",
    image: "/src/assets/images/testimonials/student2.jpg",
    year: "2026"
  },
  {
    name: "Arman Shaikh",
    quote: "This scholarship covers my entire tuition fee. Grateful to ScholarGo for making it happen!",
    image: "/src/assets/images/testimonials/student3.jpg",
    year: "2026"
  }
];

  return (
    <div className="section-padding bg-gray-50">
      <div className="container-pro">
        
        {/* ✅ Main Achievements Card */}
        <div className="pro-card pro-card-hover mb-12">
          <h2 className="trust-heading">Our Achievements</h2>
          
          {/* Round 1 – 2026 Successfully Closed */}
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold text-sm mb-6">
            🎉 Round 1 – 2026 Successfully Closed
          </span>
          
          {/* Key achievements - simple bullet points */}
          <div className="space-y-4 mt-4">
            <div className="flex items-start space-x-3">
              <span className="text-green-600 text-xl">✓</span>
              <p className="text-gray-700 text-lg">3 students awarded prestigious international scholarships</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-green-600 text-xl">✓</span>
              <p className="text-gray-700 text-lg">Students guided toward successful scholarship outcomes</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-green-600 text-xl">✓</span>
              <p className="text-gray-700 text-lg">Growing ScholarGo scholar community</p>
            </div>
          </div>
          
          {/* Mission line */}
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

        {/* ✅ TESTIMONIALS SECTION - 3 Students Photos */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0A2342] mb-3">
              🎓 Round 1 Scholars
            </h3>
            <p className="text-gray-600">
              Meet our first batch of scholarship recipients
            </p>
          </div>

          {/* 3 Photos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scholars.map((student, index) => (
              <div key={index} className="pro-card text-center">
                {/* Student Photo - Circle */}
                <div className="w-28 h-28 mx-auto rounded-full border-4 border-[#1E5F5C]/20 overflow-hidden mb-4">
                  <img 
                    src={student.image} 
                    alt={student.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=0A2342&color=fff&size=128`;
                    }}
                  />
                </div>
                
                {/* Student Info */}
                <h4 className="text-lg font-bold text-[#0A2342]">{student.name}</h4>
                <p className="text-[#1E5F5C] font-medium text-sm mt-1">{student.achievement}</p>
                <p className="text-xs text-gray-500 mt-0.5">{student.university}</p>
                
                {/* Quote */}
                <p className="text-sm text-gray-600 mt-4 italic">"{student.quote}"</p>
                
                {/* Year Badge */}
                <span className="inline-block mt-4 text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  🎉 ScholarGo Round 1, 2026
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;