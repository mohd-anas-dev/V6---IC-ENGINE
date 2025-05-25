import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Gauge, Settings } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const scrollToTop = useCallback(() => {
    const currentScroll = window.scrollY;
    const duration = Math.min(1000, currentScroll * 0.5); // Adjust duration based on scroll distance, max 1s
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleNavClick = (path: string) => {
    if (location.pathname === path) {
      scrollToTop();
    }
    setIsOpen(false);
  };
  
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
          <Link to="/" className="flex items-center space-x-2" onClick={() => handleNavClick('/')}>
            <Settings className="h-8 w-8 text-racing-red" />
            <span className="text-xl font-bold font-orbitron text-chrome-silver">V6 ENGINE</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={() => handleNavClick('/')}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              onClick={() => handleNavClick('/about')}
            >
              About
            </Link>
            <Link 
              to="/team" 
              className={`nav-link ${location.pathname === '/team' ? 'active' : ''}`}
              onClick={() => handleNavClick('/team')}
            >
              Team
            </Link>
            <Link 
              to="/hardware" 
              className={`nav-link ${location.pathname === '/hardware' ? 'active' : ''}`}
              onClick={() => handleNavClick('/hardware')}
            >
              Hardware
            </Link>
            <Link 
              to="/demo" 
              className={`nav-link ${location.pathname === '/demo' ? 'active' : ''}`}
              onClick={() => handleNavClick('/demo')}
            >
              Demo
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
              onClick={() => handleNavClick('/contact')}
            >
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
                onClick={() => handleNavClick('/')}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                onClick={() => handleNavClick('/about')}
              >
                About
              </Link>
              <Link 
                to="/team" 
                className={`nav-link ${location.pathname === '/team' ? 'active' : ''}`}
                onClick={() => handleNavClick('/team')}
              >
                Team
              </Link>
              <Link 
                to="/hardware" 
                className={`nav-link ${location.pathname === '/hardware' ? 'active' : ''}`}
                onClick={() => handleNavClick('/hardware')}
              >
                Hardware
              </Link>
              <Link 
                to="/demo" 
                className={`nav-link ${location.pathname === '/demo' ? 'active' : ''}`}
                onClick={() => handleNavClick('/demo')}
              >
                Demo
              </Link>
              <Link 
                to="/contact" 
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                onClick={() => handleNavClick('/contact')}
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
