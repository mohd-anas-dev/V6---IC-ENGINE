
import { Link } from 'react-router-dom';
import { Play, Wrench, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          {/* Engine Animation Placeholder */}
          <div className="mb-12">
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-red-500 to-red-600 engine-glow flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 animate-spin" style={{ animationDuration: '2s' }}>
                  <div className="w-4 h-4 bg-red-500 rounded-full mt-6 ml-6"></div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-gray-600 animate-pulse"></div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="font-['Orbitron'] text-5xl md:text-7xl font-black text-chrome mb-6 leading-tight">
            FEEL THE
            <span className="block text-transparent bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text">
              POWER
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light tracking-wide">
            The V6 Engine Project
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/hardware">
              <Button className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-3">
                <Wrench className="w-6 h-6 group-hover:animate-spin" />
                <span>Explore Mechanism</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link to="/demo">
              <Button variant="outline" className="group border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3">
                <Play className="w-6 h-6 group-hover:animate-pulse" />
                <span>Watch Demo</span>
              </Button>
            </Link>
          </div>

          {/* Specs Grid */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: 'Cylinders', value: '6' },
              { label: 'Horsepower', value: '300+' },
              { label: 'RPM', value: '6000' },
              { label: 'Compression', value: '10:1' }
            ].map((spec, index) => (
              <div key={index} className="dashboard-card text-center">
                <div className="text-2xl font-bold text-red-400 font-['Orbitron']">{spec.value}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">{spec.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Smoke Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
      </section>

      {/* Quick Links Bento Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-['Orbitron'] text-chrome">
            Project Overview
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Project Story',
                description: 'Learn about our journey building this V6 engine',
                link: '/about',
                icon: '📖',
                color: 'from-yellow-500 to-orange-500'
              },
              {
                title: 'Meet the Team',
                description: 'The engineers behind this project',
                link: '/team',
                icon: '👥',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Engine Parts',
                description: 'Explore each component in detail',
                link: '/hardware',
                icon: '⚙️',
                color: 'from-red-500 to-pink-500'
              },
              {
                title: 'Live Demo',
                description: 'See the engine in action',
                link: '/demo',
                icon: '🎬',
                color: 'from-green-500 to-emerald-500'
              },
              {
                title: 'Get in Touch',
                description: 'Questions or collaboration?',
                link: '/contact',
                icon: '📧',
                color: 'from-purple-500 to-violet-500'
              },
            ].map((item, index) => (
              <Link key={index} to={item.link} className="group">
                <div className="dashboard-card h-full hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center text-2xl mb-4`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-['Orbitron']">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                  <ArrowRight className="w-5 h-5 text-gray-500 mt-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
