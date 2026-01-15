import { Link } from 'react-router-dom'

const CoreServices = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-12 sm:py-16 md:py-20 px-4 sm:px-5 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight">
            Core Services & Manpower
          </h1>
          <p className="text-lg sm:text-xl md:text-xl text-primary-100 leading-relaxed">
            Skilled Teams & Comprehensive Execution Capabilities
          </p>
        </div>
      </section>

      {/* Manpower & Team Capacity Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-5 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <div className="mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-5 leading-tight">
               MANPOWER & TEAM CAPACITY
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl">
              We maintain a documented roster of skilled and unskilled labour organized into specialized teams.
            </p>
          </div>

          {/* Core Execution Teams */}
          <div className="mb-12 sm:mb-14 md:mb-16">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 leading-tight">
               Core Execution Teams
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
              {/* Civil & Building */}
              <div className="bg-primary-50 rounded-lg p-6 sm:p-7 md:p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-5 leading-tight">
                  Civil & Building
                </h4>
                <ul className="space-y-2 sm:space-y-2.5 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Masons</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Brickworkers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Carpenters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Bar-benders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Helpers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Road Construction & Surfacing</span>
                  </li>
                </ul>
              </div>

              {/* MEP Services */}
              <div className="bg-primary-50 rounded-lg p-6 sm:p-7 md:p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-5 leading-tight">
                  MEP Services
                </h4>
                <ul className="space-y-2 sm:space-y-2.5 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Plumber Team</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Electrician Team</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Store & Inventory Manager</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>HT/LT Panels & Power distribution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>HVAC (Heating, Ventilation & Air Conditioning)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Cabling & earthing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Low Voltage (ELV) System: CCTV, Fire alarm</span>
                  </li>
                </ul>
              </div>

              {/* Specialised Finishing */}
              <div className="bg-primary-50 rounded-lg p-6 sm:p-7 md:p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-5 leading-tight">
                  Specialised Finishing
                </h4>
                <ul className="space-y-2 sm:space-y-2.5 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Tiles Masons</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Stone & Granite Masons</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Waterproofing Specialists</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Welders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Painters</span>
                  </li>
                   <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Interior design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span> Grc and falseceiling</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quality Control & Management */}
          <div className="mb-12 sm:mb-14 md:mb-16">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 leading-tight">
               Quality Control & Management
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
              <div className="bg-primary-50 rounded-lg p-6 sm:p-7 md:p-8 border-l-4 border-primary-600">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 leading-tight">
                  QC Team
                </h4>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Workmanship inspection and material verification
                </p>
              </div>

              <div className="bg-primary-50 rounded-lg p-6 sm:p-7 md:p-8 border-l-4 border-primary-600">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 leading-tight">
                  Site Supervisors
                </h4>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Safety management and schedule monitoring
                </p>
              </div>

              <div className="bg-primary-50 rounded-lg p-6 sm:p-7 md:p-8 border-l-4 border-primary-600">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 leading-tight">
                  Site Coordinators
                </h4>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Daily operations and labour management
                </p>
              </div>
            </div>
          </div>

          {/* Support & Back-Office */}
          <div className="mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 leading-tight">
               Support & Back-Office
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
              
              <div className="bg-primary-50 rounded-lg p-6 sm:p-7 md:p-8 border-l-4 border-primary-600">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-5 leading-tight">
                  Procurement
                </h4>
                <ul className="space-y-2 sm:space-y-2.5 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Purchase Team</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Research & Analysis</span>
                  </li>
                </ul>
              </div>
              

              <div className="bg-primary-50 rounded-lg p-6 sm:p-7 md:p-8 border-l-4 border-primary-600">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-5 leading-tight">
                  Documentation
                </h4>
                <ul className="space-y-2 sm:space-y-2.5 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Compliance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Billing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>GST</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>HR (Labour records, ESIC/EPFO)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary-50 rounded-lg p-6 sm:p-7 md:p-8 border-l-4 border-primary-600">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-5 leading-tight">
                  Marketing
                </h4>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Business development and client relations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-5 md:px-6 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight">
            Need Our Services?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-7 md:mb-8 text-primary-100 leading-relaxed">
            Contact us to discuss your project requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors shadow-lg inline-block text-center"
            >
              Contact Us
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-colors inline-block text-center"
            >
              Request Site Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CoreServices
