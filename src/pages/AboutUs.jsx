const AboutUs = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-12 sm:py-16 md:py-20 px-4 sm:px-5 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight">About Us</h1>
          <p className="text-lg sm:text-xl md:text-xl text-primary-100 leading-relaxed">
            Building Excellence in Civil Construction & Infrastructure
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-5 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8 md:p-12 mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-5 md:mb-6 leading-tight">Who We Are</h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
                Rajat R Enterprises is a Haryana-based proprietorship civil construction and infrastructure firm led by <strong>Mr. Anil Kumar</strong>. The company has proven experience in CSR/CER school renovation projects, group-housing infrastructure works (STP, WTP, UGT, ESS), roads and building works, and high-end banquet hall interiors.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                The firm is known for <strong>statutory compliance</strong>, <strong>disciplined site management</strong>, <strong>quality execution</strong>, and <strong>timely completion</strong> of projects.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-6 sm:mb-8">
              <div className="bg-primary-50 border-l-4 border-primary-600 p-5 sm:p-6 rounded-lg">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3 leading-tight">Our Location</h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Based in <strong>Rohtak, Haryana, India</strong>, we serve clients across the region with our expertise in civil construction and infrastructure development.
                </p>
              </div>

              <div className="bg-primary-50 border-l-4 border-primary-600 p-5 sm:p-6 rounded-lg">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3 leading-tight">Leadership</h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Led by <strong>Mr. Anil Kumar</strong>, our team brings together extensive experience and commitment to excellence in every project.
                </p>
              </div>
            </div>

            {/* Our Strengths */}
            <div className="mt-8 sm:mt-10 md:mt-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center leading-tight">Our Strengths</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-2.5 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 leading-tight">Statutory Compliance</h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        Fully compliant with all regulatory requirements, ensuring smooth project execution and client satisfaction.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-2.5 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 leading-tight">Timely Completion</h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        Committed to delivering projects on schedule without compromising on quality standards.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-2.5 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 leading-tight">Quality Execution</h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        Superior quality standards in every aspect of construction, from planning to final execution.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-2.5 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 leading-tight">Disciplined Site Management</h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        Professional and disciplined approach to site management ensuring safety, efficiency, and organization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Target Clients */}
            <div className="mt-8 sm:mt-10 md:mt-12 bg-gray-50 rounded-lg p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center leading-tight">Our Target Clients</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 text-center">
                <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-primary-600 mx-auto mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 leading-tight">Government Departments</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Specialized experience in government projects and compliance requirements.</p>
                </div>

                <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-primary-600 mx-auto mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 leading-tight">CSR Corporates</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Proven track record in CSR/CER school renovation projects.</p>
                </div>

                <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-primary-600 mx-auto mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 leading-tight">Private Builders</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Expert services for group housing and commercial construction projects.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs

