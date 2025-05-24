
import { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black font-['Orbitron'] text-chrome mb-6">
            GET IN
            <span className="block text-transparent bg-gradient-to-r from-red-500 to-red-600 bg-clip-text">
              TOUCH
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss automotive engineering, collaboration opportunities, or have questions about our V6 project? 
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="dashboard-card">
              <h2 className="text-2xl font-bold text-chrome mb-6 font-['Orbitron']">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 border-gray-600 text-white focus:border-red-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 border-gray-600 text-white focus:border-red-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-gray-800 border-gray-600 text-white focus:border-red-500 resize-none"
                    placeholder="Tell us about your project or ask any questions..."
                  />
                </div>

                {/* Ignition Switch Style Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 group"
                >
                  <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  <span>IGNITE MESSAGE</span>
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* GPS Style Map */}
              <div className="dashboard-card">
                <h3 className="text-xl font-bold text-chrome mb-4 font-['Orbitron']">
                  Navigation Center
                </h3>
                <div className="bg-gray-800 rounded-lg p-6 border border-gray-600">
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="w-6 h-6 text-red-400" />
                    <span className="text-white font-semibold">Primary Location</span>
                  </div>
                  <div className="text-gray-300 space-y-1">
                    <p>V6 Engineering Labs</p>
                    <p>1234 Performance Drive</p>
                    <p>Motor City, MI 48201</p>
                    <p>United States</p>
                  </div>
                  
                  {/* GPS Style Interface */}
                  <div className="mt-4 p-3 bg-gray-900 rounded border border-gray-700">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-green-400">● GPS ACTIVE</span>
                      <span className="text-gray-400 font-mono">42.3314° N, 83.0458° W</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="dashboard-card">
                <h3 className="text-xl font-bold text-chrome mb-4 font-['Orbitron']">
                  Communication Hub
                </h3>
                
                <div className="space-y-4">
                  {[
                    {
                      icon: Phone,
                      label: 'Phone',
                      value: '+1 (555) 123-4567',
                      description: 'Business Hours Only'
                    },
                    {
                      icon: Mail,
                      label: 'Email',
                      value: 'info@v6engine.com',
                      description: '24/7 Support'
                    },
                    {
                      icon: Clock,
                      label: 'Hours',
                      value: 'Mon-Fri 9AM-6PM EST',
                      description: 'Weekend Support Available'
                    }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                      <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                        <contact.icon className="w-5 h-5 text-red-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-400 uppercase tracking-wide">{contact.label}</div>
                        <div className="text-white font-semibold font-['Orbitron']">{contact.value}</div>
                        <div className="text-sm text-gray-400">{contact.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="dashboard-card">
                <h3 className="text-xl font-bold text-chrome mb-4 font-['Orbitron']">
                  Social Networks
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'GitHub', icon: '⚙️', link: '#' },
                    { name: 'LinkedIn', icon: '🔗', link: '#' },
                    { name: 'YouTube', icon: '📺', link: '#' },
                    { name: 'Instagram', icon: '📷', link: '#' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-red-500 transition-colors group"
                    >
                      <span className="text-2xl">{social.icon}</span>
                      <span className="text-white group-hover:text-red-400 transition-colors">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
