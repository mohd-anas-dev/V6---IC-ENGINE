
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Mail, Linkedin, Instagram, Settings } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="carbon-fiber-bg border-t border-metallic-grey py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="flex items-center space-x-2">
              <Settings className="h-6 w-6 text-racing-red" />
              <span className="text-lg font-bold font-orbitron text-chrome-silver">V6 ENGINE PROJECT</span>
            </Link>
            <p className="text-sm text-metallic-grey mt-2">
              © {new Date().getFullYear()} V6 Engine Project. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="text-metallic-grey hover:text-racing-red transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="#" 
              className="text-metallic-grey hover:text-racing-red transition-colors"
              aria-label="Mail"
            >
              <Mail size={20} />
            </a>
            <a 
              href="#" 
              className="text-metallic-grey hover:text-racing-red transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#" 
              className="text-metallic-grey hover:text-racing-red transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-engine-black">
          <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-metallic-grey">
            <Link to="/" className="hover:text-racing-red transition-colors">Home</Link>
            <Link to="/about" className="hover:text-racing-red transition-colors">About</Link>
            <Link to="/team" className="hover:text-racing-red transition-colors">Team</Link>
            <Link to="/hardware" className="hover:text-racing-red transition-colors">Hardware</Link>
            <Link to="/demo" className="hover:text-racing-red transition-colors">Demo</Link>
            <Link to="/contact" className="hover:text-racing-red transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
