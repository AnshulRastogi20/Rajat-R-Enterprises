import { Link } from 'react-router-dom'
import companyLogo from '../assets/company_logo.png'

const Footer = () => {
  const handleEmailClick = () => {
    const to = 'rajatrenterprises2025@gmail.com'
    const subject = encodeURIComponent('Inquiry from Website')
    const body = encodeURIComponent('Hello Rajat R Enterprises,')
    
    // Open Gmail compose in new tab
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${subject}&body=${body}`
    window.open(gmailUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-3 md:mb-4">
              <img 
                src={companyLogo} 
                alt="Rajat R Enterprises Logo" 
                className="h-10 w-auto sm:h-12 object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <h3 className="text-lg sm:text-xl font-bold mb-4 md:mb-5">Rajat R Enterprises</h3>
            <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
              Leading Civil Construction & Infrastructure Company
            </p>
            <p className="text-gray-400 text-sm sm:text-base">
              Rohtak, Haryana, India
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 md:mb-5">Quick Links</h3>
            <ul className="space-y-2.5 sm:space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1">
                  Core Services & Manpower
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1">
                  Projects & Experience
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1">
                  Compliance
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 md:mb-5">Contact</h3>
            <div className="space-y-2.5 sm:space-y-3 text-gray-300 text-sm sm:text-base">
              <p className="leading-relaxed">
                <span className="font-semibold">Proprietor:</span> Mr. Anil Kumar
              </p>
              <p className="leading-relaxed">
                <span className="font-semibold">Phone:</span>{' '}
                <a href="tel:+918396008500" className="hover:text-white transition-colors break-all">
                  +918396008500
                </a>
              </p>
              <p className="leading-relaxed">
                <span className="font-semibold">Email:</span>{' '}
                <button
                  onClick={handleEmailClick}
                  className="hover:text-white transition-colors break-all text-left cursor-pointer"
                >
                  rajatrenterprises2025@gmail.com
                </button>
              </p>
              <p className="text-sm sm:text-base mt-4 text-gray-400 leading-relaxed">
                Location: Rohtak, Haryana, India
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Rajat R Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

