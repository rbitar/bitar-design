import ImageCarousel from './ImageCarousel';

export default function Hero() {
  // Using the provided Cloudinary images
  const images = [
    'https://res.cloudinary.com/frontend-co/image/upload/v1746033291/projects/bitar-design/bg1.jpg',
    'https://res.cloudinary.com/frontend-co/image/upload/v1746033293/projects/bitar-design/bg2.jpg',
    'https://res.cloudinary.com/frontend-co/image/upload/v1746033295/projects/bitar-design/bg4.jpg',
    'https://res.cloudinary.com/frontend-co/image/upload/v1746033294/projects/bitar-design/bg3.jpg',
    'https://res.cloudinary.com/frontend-co/image/upload/v1746033296/projects/bitar-design/bg5.jpg'
  ];

  return (
    <section className="h-screen flex items-center justify-center overflow-hidden relative">
      <div className="absolute top-8 left-8 z-10">
        <div className="flex items-center">
          <img 
            src="https://res.cloudinary.com/frontend-co/image/upload/v1746033297/projects/bitar-design/logo.jpg" 
            alt="Bitar Design Logo" 
            className="h-[175px] w-[175px] object-contain"
          />
        </div>
      </div>
      <ImageCarousel images={images} />
    </section>
  );
}