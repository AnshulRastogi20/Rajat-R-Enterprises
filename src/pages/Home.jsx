import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-5 md:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight">
            Rajat R Enterprises
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-5 md:mb-6 text-primary-100 leading-relaxed">
            Leading Civil Construction & Infrastructure Company
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-9 md:mb-10 text-primary-200 max-w-3xl mx-auto leading-relaxed px-2">
            Excellence in Civil Construction, Roads & Buildings, Infrastructure Development,
            CSR/CER School Renovation, and High-End Interiors
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
            <Link
              to="/contact"
              className="bg-white text-primary-700 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold hover:bg-primary-50 active:bg-primary-100 transition-colors shadow-lg text-sm sm:text-base"
            >
              Contact Us
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold hover:bg-white hover:text-primary-700 active:bg-primary-50 transition-colors text-sm sm:text-base"
            >
              Request Site Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-5 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-gray-800 leading-tight">
              Execution Capability & Manpower Strength
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              We maintain a well-organized team of skilled professionals and specialized execution teams 
              capable of handling complex civil construction and infrastructure projects with precision and excellence.
            </p>
          </div>

          {/* Capability Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8 mb-10 sm:mb-12">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 sm:p-7 md:p-8">
              <div className="bg-primary-100 text-primary-600 w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-4 sm:mb-5">
                <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">
                Core Execution Teams
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Specialized teams for Civil & Building, MEP Services, and Finishing works
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 sm:p-7 md:p-8">
              <div className="bg-primary-100 text-primary-600 w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-4 sm:mb-5">
                <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">
                Quality Control
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Dedicated QC teams, supervisors, and coordinators ensuring excellence
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 sm:p-7 md:p-8">
              <div className="bg-primary-100 text-primary-600 w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-4 sm:mb-5">
                <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">
                Back-Office Support
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Procurement, documentation, and marketing teams for seamless operations
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 sm:p-7 md:p-8">
              <div className="bg-primary-100 text-primary-600 w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-4 sm:mb-5">
                <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">
                Documented Roster
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Well-organized skilled and unskilled labour pool ready for deployment
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              to="/services"
              className="inline-block px-8 sm:px-10 py-3 sm:py-3.5 md:py-4 rounded-lg font-bold text-base sm:text-lg text-white bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 shadow-xl hover:shadow-2xl hover:from-primary-500 hover:via-primary-700 hover:to-primary-900 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-primary-300 animate-pulse"
            >
              View Core Services & Manpower
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-5 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-gray-800 leading-tight">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
            <div className="text-center">
              <div className="bg-primary-600 text-white w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5">
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800 leading-tight">
                Statutory Compliance
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed px-2">
                Fully compliant with all regulatory requirements and standards.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-600 text-white w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5">
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800 leading-tight">
                Timely Completion
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed px-2">
                Projects delivered on schedule with commitment to deadlines.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-600 text-white w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5">
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800 leading-tight">
                Quality Execution
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed px-2">
                Superior quality standards in every project we undertake.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-600 text-white w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5">
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800 leading-tight">
                Disciplined Site Management
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed px-2">
                Professional site management ensuring safety and efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-5 md:px-6 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-7 md:mb-8 text-primary-100 leading-relaxed px-2">
            Contact us today for a consultation or site visit
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
            <Link
              to="/contact"
              className="bg-white text-primary-700 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold hover:bg-primary-50 active:bg-primary-100 transition-colors shadow-lg text-sm sm:text-base"
            >
              Contact Us
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold hover:bg-white hover:text-primary-700 active:bg-primary-50 transition-colors text-sm sm:text-base"
            >
              Request Site Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
