import { useRouter } from 'next/router';
import Head from 'next/head';
import ProjectCarousel from '../../components/projects/ProjectCarousel';
import ProjectDetails from '../../components/projects/ProjectDetails';
import Footer from '../../components/Footer';

export default function ProjectPage() {
  const router = useRouter();
  const { id } = router.query;
  
  // Sample projects data - in a real app, you'd fetch this from an API or database
  const projects = [
    {
      id: 1,
      title: 'AUB Irani Oxy Engineering Building',
      location: 'American University of Beirut, Lebanon',
      description: 'A contemporary educational facility designed to foster innovation and collaboration through modern architectural elements and thoughtful space utilization.',
      images: [
        'https://res.cloudinary.com/frontend-co/image/upload/v1746062179/projects/bitar-design/aub_16x5_0.jpg',
        'https://res.cloudinary.com/frontend-co/image/upload/v1746062182/projects/bitar-design/aub_16x5_4.jpg',
        'https://res.cloudinary.com/frontend-co/image/upload/v1746062183/projects/bitar-design/aub_16x5_5.jpg',
        'https://res.cloudinary.com/frontend-co/image/upload/v1746062183/projects/bitar-design/aub_16x5_6.jpg',
        'https://res.cloudinary.com/frontend-co/image/upload/v1746062181/projects/bitar-design/aub_16x5_3.jpg',
        'https://res.cloudinary.com/frontend-co/image/upload/v1746062180/projects/bitar-design/aub_16x5_2.jpg'
      ],
      longDescription: 'The AUB Irani Oxy Engineering Building stands as a landmark of innovation at the American University of Beirut campus. Conceived as a hub for engineering excellence, the building features state-of-the-art laboratories, flexible learning spaces, and collaborative zones that encourage interdisciplinary research and learning. The design embraces sustainable practices, incorporating natural lighting, energy-efficient systems, and locally-sourced materials wherever possible. The architectural approach balances contemporary aesthetics with contextual sensitivity, respecting the historical campus while introducing modern functionality. Inside, the interior spaces are thoughtfully arranged to maximize productivity and foster a spirit of academic community among students and faculty.',
      client: 'American University of Beirut',
      year: '2019',
      services: ['Architectural Design', 'Interior Design', 'Space Planning', 'Sustainability Consulting'],
      image: 'https://res.cloudinary.com/frontend-co/image/upload/v1746062179/projects/bitar-design/aub_16x5_0.jpg'
    },
    {
      id: 2,
      title: 'Net Jets Airport Terminal',
      location: 'Port Columbus International Airport, Columbus Ohio',
      description: 'Complete renovation of a private jet terminal featuring modern design elements, premium lounges, and efficient passenger flow optimization.',
      images: [
        'https://res.cloudinary.com/frontend-co/image/upload/v1746062393/projects/bitar-design/netjets_16x5_.jpg',
        'https://res.cloudinary.com/frontend-co/image/upload/v1746062394/projects/bitar-design/netjets_16x5_2.jpg',
        'https://res.cloudinary.com/frontend-co/image/upload/v1746062395/projects/bitar-design/netjets_16x5_3.jpg',
        'https://res.cloudinary.com/frontend-co/image/upload/v1746062396/projects/bitar-design/netjets_16x5_4.jpg'
      ],
      longDescription: 'The NetJets Airport Terminal project involved a complete renovation of an existing facility to create a premium private aviation experience. The design emphasizes luxury, efficiency, and brand identity throughout the space. The terminal includes comfortable waiting lounges, private meeting rooms, concierge services, and streamlined processing areas for passengers and crew. Material selections feature a sophisticated palette of natural stone, wood veneers, and metal accents that convey a sense of timeless elegance while incorporating NetJets\'s corporate aesthetic. Special attention was paid to lighting design, with a combination of natural daylight and carefully placed artificial lighting creating a warm, welcoming atmosphere. The terminal layout optimizes operational flow while providing discrete, exclusive spaces for high-profile clients.',
      client: 'NetJets Inc.',
      year: '2018',
      services: ['Interior Architecture', 'Renovation Design', 'Furniture Selection', 'Lighting Design'],
      image: 'https://res.cloudinary.com/frontend-co/image/upload/v1746062393/projects/bitar-design/netjets_16x5_.jpg'
    }
    // Additional projects would be listed here
  ];
  
  // Find the project based on the id parameter
  const projectId = parseInt(id);
  const project = projects.find(p => p.id === projectId) || projects[0]; // Default to first project if not found
  
  if (router.isFallback) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  
  return (
    <>
      <Head>
        <title>{project.title} | Bitar Design</title>
        <meta name="description" content={project.description} />
      </Head>
      <div className="min-h-screen bg-white">
        {/* Logo - top left */}
        <div className="absolute top-8 left-8 z-10">
          <a href="/" className="flex items-center">
            <img 
              src="https://res.cloudinary.com/frontend-co/image/upload/v1746033297/projects/bitar-design/logo.jpg" 
              alt="Bitar Design Logo" 
              className="h-[175px] w-[175px] object-contain"
            />
          </a>
        </div>
        
        {/* Navigation */}
        <div className="absolute top-8 right-8 z-10">
          <a 
            href="/" 
            className="flex items-center text-black hover:text-gray-700 transition-colors"
          >
            <i className="ri-arrow-left-line mr-2"></i>
            Back to Home
          </a>
        </div>
        
        <div className="pt-36 pb-24">
          {/* Project Carousel */}
          <div className="mb-12">
            <ProjectCarousel images={project.images} />
          </div>
          
          {/* Project Details */}
          <div className="container mx-auto px-8">
            <ProjectDetails project={project} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}