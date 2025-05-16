import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-8 mb-8">
          <Link href="/" className="hover:text-gray-300">Inicio</Link>
          <Link href="/confidence-interval" className="hover:text-gray-300">Calculadora IC</Link>
        </div>
        
        {/* Authors Section */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            Desarrollado por{' '}
            <a 
              href="https://github.com/XcarlosX20" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-semibold text-white hover:text-gray-300 transition-colors"
            >
              Carlos Sierra
            </a>{' '}
            y{' '}
            <span className="font-semibold text-white">Moises Coronado</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 