import { Link } from 'react-router-dom'

const Compliance = () => {
  const registrations = [
    {
      title: 'GST Registered',
      description: 'Fully compliant with Goods and Services Tax regulations, ensuring transparent and legal business operations.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      certificateUrl: 'https://drive.google.com/file/d/1D6D7agcOcoIBuVB47kMZeM5kmM-IC3zq/view?usp=sharing',
    },
    {
      title: 'Udyam (MSME) Registered',
      description: 'Registered as a Micro, Small & Medium Enterprise, eligible for various government benefits and schemes.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      certificateUrl: 'https://drive.google.com/file/d/10lE3qqQ8Cz-Kc6rhDsk4Msp9WsebpXry/view?usp=sharing',
    },
    {
      title: 'ESIC Registered',
      description: 'Registered with Employee State Insurance Corporation and Employees Provident Fund Organisation, ensuring employee welfare and compliance.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      certificateUrl: 'https://drive.google.com/file/d/1TueltFk2Gqe270a2OaaNb6SkwaKxS2xa/view?usp=sharing',
    },
    {
      title: 'Haryana PWD Enlisted – Class III',
      description: 'Enlisted with Haryana Public Works Department as Class III contractor, authorized to undertake public works projects.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      certificateUrl: 'https://drive.google.com/file/d/1jOjFaI0c0U4oPFZyiqth6IWDSAba9Z5-/view?usp=sharing',
    },
    {
      title: 'PHED – Class V',
      description: 'Enlisted with Public Health Engineering Department, Jhajjar as Class V contractor for water supply and sewerage works.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      certificateUrl: 'https://drive.google.com/file/d/1pV4ghtUhclcypyQr0ni3iG29_O9bPAeZ/view?usp=sharing',
    },
    {
      title: 'EPFO Registered',
      description: 'Registered with Employee State Insurance Corporation and Employees Provident Fund Organisation, ensuring employee welfare and compliance.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      certificateUrl: 'https://drive.google.com/file/d/12Vq-RKaxVjdXw7CoQd1JQonlW7U1TyTy/view?usp=sharing',
    },
    {
      title: 'Shop & Establishment Registered',
      description: 'Registered under the Shop & Establishment Act, ensuring compliance with local labour laws, working conditions, wages, and statutory regulations applicable to commercial establishments.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      certificateUrl: 'https://drive.google.com/file/d/1-D5376lIkE4IpVG4KsU3ULgKhIDJmOg_/view?usp=sharing',
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-12 sm:py-16 md:py-20 px-4 sm:px-5 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight">Compliance & Registrations</h1>
          <p className="text-lg sm:text-xl md:text-xl text-primary-100 leading-relaxed">
            Fully Compliant with All Regulatory Requirements
          </p>
        </div>
      </section>

      {/* Compliance Cards */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-5 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Registrations & Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We maintain all necessary registrations and certifications to ensure statutory compliance and eligibility for various government and private sector projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {registrations.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-8 relative"
              >
                {item.certificateUrl && (
                  <a
                    href={item.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 opacity-40 hover:opacity-100 transition-opacity duration-200 group"
                    aria-label="View Certificate"
                    title="View Certificate"
                  >
                    <svg
                      className="w-5 h-5 text-gray-700 group-hover:text-primary-600 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
                <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Commitment */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-5 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-gray-800 leading-tight">
            Our Commitment to Compliance
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 border-l-4 border-primary-600 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Statutory Compliance
              </h3>
              <p className="text-gray-700">
                We ensure full compliance with all applicable laws, regulations, and statutory requirements. Our commitment to regulatory compliance ensures smooth project execution and builds trust with our clients.
              </p>
            </div>

            <div className="bg-gray-50 border-l-4 border-primary-600 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Transparent Operations
              </h3>
              <p className="text-gray-700">
                All our business operations are conducted with transparency and in accordance with legal requirements. Our registrations and certifications demonstrate our commitment to ethical business practices.
              </p>
            </div>

            <div className="bg-gray-50 border-l-4 border-primary-600 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Government Project Eligibility
              </h3>
              <p className="text-gray-700">
                Our registrations with Haryana PWD and PHED Jhajjar enable us to participate in government tenders and projects, bringing our expertise to public infrastructure development.
              </p>
            </div>

            <div className="bg-gray-50 border-l-4 border-primary-600 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Employee Welfare
              </h3>
              <p className="text-gray-700">
                Our ESIC and EPFO registrations ensure that all our employees are covered under statutory employee benefits, reflecting our commitment to employee welfare and responsible business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-5 md:px-6 bg-primary-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-gray-800 leading-tight">
            Benefits for Our Clients
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Risk-Free Partnership</h3>
                  <p className="text-gray-600 text-sm">
                    Our compliance ensures that all projects are executed within legal frameworks, minimizing risks for our clients.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Government Project Access</h3>
                  <p className="text-gray-600 text-sm">
                    Our PWD and PHED enlistments enable us to work on government projects, expanding opportunities for collaborative ventures.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Tax Compliance</h3>
                  <p className="text-gray-600 text-sm">
                    GST registration ensures proper tax handling and documentation, providing clarity and transparency in all financial transactions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Professional Standards</h3>
                  <p className="text-gray-600 text-sm">
                    Our certifications demonstrate adherence to professional standards and commitment to quality, reliability, and ethical practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-5 md:px-6 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight">
            Partner with a Compliant & Reliable Company
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-7 md:mb-8 text-primary-100 leading-relaxed">
            Contact us to learn more about our compliance and certifications
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

export default Compliance

