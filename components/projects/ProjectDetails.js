export default function ProjectDetails({ project }) {
  const { title, location, longDescription, client, year, services } = project;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {/* Left column - Project info */}
      <div className="md:col-span-2">
        <h1 className="text-3xl font-bold mb-3">{title}</h1>
        <div className="flex items-center text-gray-600 mb-6">
          <i className="ri-map-pin-line mr-2"></i>
          <span>{location}</span>
        </div>
        
        <div className="prose max-w-none">
          <p className="text-gray-800 mb-8 leading-relaxed">
            {longDescription}
          </p>
        </div>
      </div>
      
      {/* Right column - Project details */}
      <div className="bg-gray-50 p-8">
        <h2 className="text-xl font-semibold mb-6 border-b pb-2">Project Details</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-sm uppercase text-gray-500 mb-1">Client</h3>
            <p className="font-medium">{client}</p>
          </div>
          
          <div>
            <h3 className="text-sm uppercase text-gray-500 mb-1">Year</h3>
            <p className="font-medium">{year}</p>
          </div>
          
          <div>
            <h3 className="text-sm uppercase text-gray-500 mb-1">Services</h3>
            <ul className="space-y-1">
              {services && services.map((service, index) => (
                <li key={index} className="flex items-start">
                  <i className="ri-checkbox-circle-line text-black mr-2 mt-1"></i>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="pt-4">
            <a 
              href="mailto:samer@bitardesign.com" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent bg-black text-white hover:bg-gray-800 transition-colors rounded w-full text-center"
            >
              Contact About This Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}