import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Empresa */}
          <div>
            <h3 className="text-lg font-bold mb-4">Empresa</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="hover:text-gray-300">Sobre Nosotros</Link>
              <Link href="/careers" className="hover:text-gray-300">Carreras</Link>
              <Link href="/contact" className="hover:text-gray-300">Contacto</Link>
            </nav>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-bold mb-4">Servicios</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/services" className="hover:text-gray-300">Nuestros Servicios</Link>
              <Link href="/pricing" className="hover:text-gray-300">Precios</Link>
              <Link href="/projects" className="hover:text-gray-300">Proyectos</Link>
            </nav>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Recursos</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/blog" className="hover:text-gray-300">Blog</Link>
              <Link href="/guides" className="hover:text-gray-300">Guías</Link>
              <Link href="/faq" className="hover:text-gray-300">FAQ</Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/privacy" className="hover:text-gray-300">Privacidad</Link>
              <Link href="/terms" className="hover:text-gray-300">Términos</Link>
              <Link href="/cookies" className="hover:text-gray-300">Cookies</Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-bold mb-4">Social</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="https://twitter.com" className="hover:text-gray-300">Twitter</Link>
              <Link href="https://linkedin.com" className="hover:text-gray-300">LinkedIn</Link>
              <Link href="https://instagram.com" className="hover:text-gray-300">Instagram</Link>
            </nav>
          </div>
        </div>
        
        {/* Authors Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
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