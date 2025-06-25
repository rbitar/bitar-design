export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-black text-white py-4 w-full z-10">
      <div className="w-full px-6">
        <div className="flex justify-between items-center">
          {/* Left - Address */}
          <div className="w-1/3 text-left">
            <p className="text-gray-300 text-xs flex items-center">
              <i className="ri-map-pin-line mr-1"></i>
              1328 U St NW #2E Washington, DC 20009
            </p>
          </div>
          
          {/* Center - Social Icons */}
          <div className="w-1/3 flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/samerbitar/" className="hover:text-gray-300" aria-label="LinkedIn">
              <i className="ri-linkedin-fill text-xl"></i>
            </a>
            <a 
              href="mailto:samer@bitardesign.com" 
              className="hover:text-gray-300" 
              aria-label="Email Samer"
            >
              <i className="ri-mail-line text-xl"></i>
            </a>
          </div>
          
          {/* Right - Empty space with equal width */}
          <div className="w-1/3"></div>
        </div>
      </div>
    </footer>
  );
}