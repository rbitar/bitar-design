import Head from 'next/head';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import Footer from '../components/Footer';

export default function Projects() {
  // Sample projects data
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
      image: 'https://res.cloudinary.com/frontend-co/image/upload/v1746062393/projects/bitar-design/netjets_16x5_.jpg'
    },
    {
      id: 3,
      title: 'Royal Jordanian Airlines Headquarters',
      location: 'Amman, Jordan',
      description: 'Luxury penthouse featuring an open concept living space with custom millwork and a wraparound terrace with cityscape views.',
      images: [
        'https://res.cloudinary.com/frontend-co/image/upload/v1746062941/projects/bitar-design/rja_16x5_1.jpg',
        'https://res.cloudinary.com/frontend-co/image/upload/v1746062942/projects/bitar-design/rja_16x5_2.jpg',
        'https://res.cloudinary.com/frontend-co/image/upload/v1746062942/projects/bitar-design/rja_16x5_3.jpg',
        'https://res.cloudinary.com/frontend-co/image/upload/v1746062943/projects/bitar-design/rja_16x5_4.jpg',
        'https://res.cloudinary.com/frontend-co/image/upload/v1746062944/projects/bitar-design/rja_16x5_5.jpg'
      ],
      image: 'https://res.cloudinary.com/frontend-co/image/upload/v1746062941/projects/bitar-design/rja_16x5_1.jpg'
    },
    {
      id: 4,
      title: 'Sandhill Research and Education Center',
      location: 'Columbia, South Carolina',
      description: 'A state-of-the-art research facility designed to promote agricultural innovation through sustainable architecture and advanced learning environments.',
      images: [
        'https://res.cloudinary.com/frontend-co/image/upload/v1746064571/projects/bitar-design/sandhill_16x5_0.jpg',
        'https://res.cloudinary.com/frontend-co/image/upload/v1746064572/projects/bitar-design/sandhill_16x5_2.jpg',
        'https://res.cloudinary.com/frontend-co/image/upload/v1746064573/projects/bitar-design/sandhill_16x5_3.jpg',
        'https://res.cloudinary.com/frontend-co/image/upload/v1746064574/projects/bitar-design/sandhill_16x5_4.jpg'
      ],
      image: 'https://res.cloudinary.com/frontend-co/image/upload/v1746064571/projects/bitar-design/sandhill_16x5_0.jpg'
    },
    {
      id: 5,
      title: 'PNC Place Office Building',
      location: '800 17th Street NW, Washington DC',
      description: 'Elegant corporate headquarters with a stunning glass façade, featuring sustainable design principles and state-of-the-art workplace environments.',
      images: [
        'https://res.cloudinary.com/frontend-co/image/upload/v1746065293/projects/bitar-design/800_16x5_.jpg',
        'https://res.cloudinary.com/frontend-co/image/upload/v1746065294/projects/bitar-design/800_16x5_1.jpg'
      ],
      image: 'https://res.cloudinary.com/frontend-co/image/upload/v1746065293/projects/bitar-design/800_16x5_.jpg'
    },
    {
      id: 6,
      title: 'Rockville Pike Hilton Redevelopment',
      location: '1750 Rockville Pike, Rockville, Maryland',
      description: 'Mixed-use development project featuring a modern hotel complex with retail spaces and amenities, designed with sustainable architectural principles.',
      images: [
        'https://res.cloudinary.com/frontend-co/image/upload/v1746065510/projects/bitar-design/rockville_pike_16x5_.jpg',
        'https://res.cloudinary.com/frontend-co/image/upload/v1746065511/projects/bitar-design/rockville_pike_16x5_3.jpg',
        'https://res.cloudinary.com/frontend-co/image/upload/v1746065512/projects/bitar-design/rockville_pike_16x5_4.jpg',
        'https://res.cloudinary.com/frontend-co/image/upload/v1746065510/projects/bitar-design/rockville_pike_16x5_2.jpg',
        'https://res.cloudinary.com/frontend-co/image/upload/v1746065513/projects/bitar-design/rockville_pike_16x5_5.jpg',
        'https://res.cloudinary.com/frontend-co/image/upload/v1746065514/projects/bitar-design/rockville_pike_16x5_6.jpg'
      ],
      image: 'https://res.cloudinary.com/frontend-co/image/upload/v1746065510/projects/bitar-design/rockville_pike_16x5_.jpg'
    }
  ];

  return (
    <>
      <Head>
        <title>Projects | Bitar Design</title>
        <meta name="description" content="Explore our portfolio of architectural and interior design projects" />
      </Head>
      <div className="min-h-screen bg-white overflow-y-auto">
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
        
        <div className="pl-8 pr-8 py-16 pt-60 pb-32">
          <ProjectsGrid projects={projects} />
        </div>
        <Footer />
      </div>
    </>
  );
}