export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 flex justify-between items-center bg-black/80 backdrop-blur-sm">
      <a href="/" className="flex items-center">
        <img 
          src="https://res.cloudinary.com/frontend-co/image/upload/v1746033297/projects/bitar-design/logo.jpg" 
          alt="Bitar Design Logo" 
          className="h-14 w-auto"
        />
      </a>
      <nav>
        <ul className="flex space-x-8">
          <li>
            <a href="/" className="text-white hover:text-gray-300 transition-colors">Home</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}