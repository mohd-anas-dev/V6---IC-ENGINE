
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Gauge, Settings } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-dark-asphalt shadow-md py-2' : 'bg-transparent py-4'
  }`;
  
  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Settings className="h-8 w-8 text-racing-red" />
            <span className="text-xl font-bold font-orbitron text-chrome-silver">V6 ENGINE</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
              About
            </Link>
            <Link to="/team" className={`nav-link ${location.pathname === '/team' ? 'active' : ''}`}>
              Team
            </Link>
            <Link to="/hardware" className={`nav-link ${location.pathname === '/hardware' ? 'active' : ''}`}>
              Hardware
            </Link>
            <Link to="/demo" className={`nav-link ${location.pathname === '/demo' ? 'active' : ''}`}>
              Demo
            </Link>
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
              Contact
            </Link>
            
            {/* RPM Gauge - decorative element */}
            <div className="ml-4 flex items-center">
              <Gauge className="h-6 w-6 text-neon-blue animate-pulse" />
              <span className="font-orbitron text-xs text-neon-blue ml-1">RPM</span>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-chrome-silver hover:text-racing-red transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden carbon-fiber-bg mt-4 rounded-lg border border-metallic-grey">
            <div className="flex flex-col space-y-2 p-4">
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/team" 
                className={`nav-link ${location.pathname === '/team' ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link>
              <Link 
                to="/hardware" 
                className={`nav-link ${location.pathname === '/hardware' ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Hardware
              </Link>
              <Link 
                to="/demo" 
                className={`nav-link ${location.pathname === '/demo' ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Demo
              </Link>
              <Link 
                to="/contact" 
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
