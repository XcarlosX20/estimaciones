import Link from 'next/link';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const Navigation = ({ isOpen, onClose }: NavigationProps) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-900 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="flex flex-col h-full p-6">
        <button
          onClick={onClose}
          className="self-end text-white mb-8"
          aria-label="Close menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        
        <nav className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-white text-xl hover:text-gray-300"
            onClick={onClose}
          >
            Inicio
          </Link>
          <Link
            href="/confidence-interval"
            className="text-white text-xl hover:text-gray-300"
            onClick={onClose}
          >
            Calculadora IC
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navigation; 