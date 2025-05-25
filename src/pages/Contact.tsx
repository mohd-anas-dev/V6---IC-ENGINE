
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram,
  Send
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit the form data
    console.log('Form submitted:', formState);
    // Reset form
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Show success message (would be implemented with state in a real app)
    alert('Thank you for your message! We will get back to you soon.');
  };
  
  return (
    <div className="page-container">
      {/* Page Header */}
      <motion.div 
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold font-orbitron text-chrome-silver mb-4">Contact Us</h1>
        <div className="h-1 w-24 bg-racing-red mx-auto mb-6"></div>
        <p className="text-metallic-grey max-w-2xl mx-auto">
          Have questions about the V6 Engine Project? Want to learn more about our work? Reach out to us directly.
        </p>
      </motion.div>
      
      {/* Contact Information */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div 
            className="bento-card flex flex-col items-center text-center p-6 hover:shadow-neon transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 rounded-full bg-racing-red bg-opacity-20 flex items-center justify-center mb-4">
              <Mail className="text-racing-red w-6 h-6" />
            </div>
            <h3 className="text-lg font-orbitron text-chrome-silver mb-2">Email</h3>
            <p className="text-metallic-grey">info@v6engineproject.com</p>
            <p className="text-metallic-grey">support@v6engineproject.com</p>
          </motion.div>
          
          <motion.div 
            className="bento-card flex flex-col items-center text-center p-6 hover:shadow-neon transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 rounded-full bg-neon-blue bg-opacity-20 flex items-center justify-center mb-4">
              <MapPin className="text-neon-blue w-6 h-6" />
            </div>
            <h3 className="text-lg font-orbitron text-chrome-silver mb-2">Location</h3>
            <p className="text-metallic-grey">123 Engineering Drive</p>
            <p className="text-metallic-grey">Detroit, MI 48226</p>
          </motion.div>
          
          <motion.div 
            className="bento-card flex flex-col items-center text-center p-6 hover:shadow-neon transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 rounded-full bg-performance-yellow bg-opacity-20 flex items-center justify-center mb-4">
              <Phone className="text-performance-yellow w-6 h-6" />
            </div>
            <h3 className="text-lg font-orbitron text-chrome-silver mb-2">Phone</h3>
            <p className="text-metallic-grey">+1 (555) 123-4567</p>
            <p className="text-metallic-grey">Mon-Fri, 9am-5pm EST</p>
          </motion.div>
          
          <motion.div 
            className="bento-card flex flex-col items-center text-center p-6 hover:shadow-neon transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 rounded-full bg-chrome-silver bg-opacity-20 flex items-center justify-center mb-4">
              <Clock className="text-chrome-silver w-6 h-6" />
            </div>
            <h3 className="text-lg font-orbitron text-chrome-silver mb-2">Hours</h3>
            <p className="text-metallic-grey">Monday - Friday</p>
            <p className="text-metallic-grey">9:00 AM - 5:00 PM EST</p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Form and Map */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Send Us a Message</h2>
          
          <form onSubmit={handleSubmit} className="metal-panel p-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-orbitron text-metallic-grey mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full bg-engine-black border border-metallic-grey rounded-md p-3 text-chrome-silver focus:border-racing-red focus:outline-none transition-colors"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-orbitron text-metallic-grey mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full bg-engine-black border border-metallic-grey rounded-md p-3 text-chrome-silver focus:border-racing-red focus:outline-none transition-colors"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-orbitron text-metallic-grey mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                required
                className="w-full bg-engine-black border border-metallic-grey rounded-md p-3 text-chrome-silver focus:border-racing-red focus:outline-none transition-colors"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-orbitron text-metallic-grey mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-engine-black border border-metallic-grey rounded-md p-3 text-chrome-silver focus:border-racing-red focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="dashboard-button w-full flex items-center justify-center hover:shadow-red-glow transition-all duration-300"
            >
              Send Message <Send className="ml-2 h-4 w-4" />
            </button>
          </form>
        </motion.div>
        
        {/* Map and Social Media */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Find Us</h2>
          
          {/* Map Placeholder - styled like a car GPS system */}
          <div className="metal-panel p-2 mb-8">
            <div className="bg-dark-asphalt h-80 rounded-lg relative overflow-hidden">
              {/* This would be replaced with an actual map in a real implementation */}
              <div className="absolute inset-0 bg-dark-asphalt">
                <div className="h-full w-full flex items-center justify-center">
                  <img 
                    src="https://images.pexels.com/photos/8936026/pexels-photo-8936026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Map Location" 
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute top-4 left-4 bg-engine-black bg-opacity-70 rounded-md p-2">
                    <p className="text-chrome-silver font-orbitron text-sm">V6 Engine Project</p>
                    <p className="text-metallic-grey text-xs">123 Engineering Drive, Detroit</p>
                  </div>
                  
                  {/* GPS Pin */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-6 h-6 bg-racing-red rounded-full flex items-center justify-center animate-pulse">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="w-4 h-4 bg-racing-red opacity-30 rounded-full absolute top-1 left-1 animate-ping"></div>
                  </div>
                </div>
              </div>
              
              {/* GPS-style overlay elements */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-engine-black flex items-center justify-between px-4">
                <span className="text-xs text-neon-blue font-orbitron">Detroit, MI</span>
                <span className="text-xs text-chrome-silver font-orbitron">2.5 mi</span>
              </div>
            </div>
          </div>
          
          {/* Social Media */}
          <h2 className="section-title">Connect With Us</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <a href="#" className="bento-card p-4 flex items-center hover:shadow-neon transition-all duration-300">
              <Github className="h-6 w-6 text-metallic-grey mr-3" />
              <span className="text-chrome-silver font-orbitron">GitHub</span>
            </a>
            
            <a href="#" className="bento-card p-4 flex items-center hover:shadow-neon transition-all duration-300">
              <Linkedin className="h-6 w-6 text-metallic-grey mr-3" />
              <span className="text-chrome-silver font-orbitron">LinkedIn</span>
            </a>
            
            <a href="#" className="bento-card p-4 flex items-center hover:shadow-neon transition-all duration-300">
              <Twitter className="h-6 w-6 text-metallic-grey mr-3" />
              <span className="text-chrome-silver font-orbitron">Twitter</span>
            </a>
            
            <a href="#" className="bento-card p-4 flex items-center hover:shadow-neon transition-all duration-300">
              <Instagram className="h-6 w-6 text-metallic-grey mr-3" />
              <span className="text-chrome-silver font-orbitron">Instagram</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactPage;
