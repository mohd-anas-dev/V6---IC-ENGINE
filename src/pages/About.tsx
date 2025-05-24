
import { CheckCircle } from 'lucide-react';

const About = () => {
  const timelineSteps = [
    {
      title: 'Project Inspiration',
      description: 'Born from a passion for automotive engineering and mechanical precision, our V6 engine project began as a quest to understand the intricate dance of pistons, valves, and combustion.',
      icon: '💡',
      status: 'completed'
    },
    {
      title: 'Design & Research',
      description: 'Months of CAD modeling, thermodynamic calculations, and material selection. Every component was designed with performance and reliability in mind.',
      icon: '📐',
      status: 'completed'
    },
    {
      title: 'Hardware Assembly',
      description: 'Precision machining and careful assembly of over 200 individual components. Each part crafted to exact specifications for optimal performance.',
      icon: '🔧',
      status: 'completed'
    },
    {
      title: 'Testing & Completion',
      description: 'Rigorous testing phases including compression tests, timing validation, and performance optimization. The result: a fully functional V6 masterpiece.',
      icon: '✅',
      status: 'completed'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black font-['Orbitron'] text-chrome mb-6">
            PROJECT
            <span className="block text-transparent bg-gradient-to-r from-red-500 to-red-600 bg-clip-text">
              JOURNEY
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From concept to reality, witness the engineering journey that brought our V6 engine to life. 
            Every bolt, every calculation, every test was a step towards automotive excellence.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 via-blue-500 to-green-500 rounded-full"></div>
            
            {timelineSteps.map((step, index) => (
              <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 border-4 border-red-500 flex items-center justify-center text-2xl engine-glow">
                    {step.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
                  <div className="dashboard-card group hover:shadow-2xl">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                      <span className="text-sm uppercase tracking-wide text-green-400 font-semibold">
                        {step.status}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-chrome mb-4 font-['Orbitron']">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Blueprint Lines */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                          <pattern id={`blueprint-${index}`} x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10,0 L 0,0 0,10" fill="none" stroke="#3b82f6" strokeWidth="0.5"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#blueprint-${index})`}/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-['Orbitron'] text-chrome">
            Technical Specifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Displacement', value: '3.5L', unit: 'Liters' },
              { label: 'Power Output', value: '300', unit: 'HP' },
              { label: 'Torque', value: '350', unit: 'lb-ft' },
              { label: 'Redline', value: '6000', unit: 'RPM' },
              { label: 'Compression', value: '10.5', unit: ':1' },
              { label: 'Valves', value: '24', unit: 'Total' },
              { label: 'Bore', value: '89', unit: 'mm' },
              { label: 'Stroke', value: '93', unit: 'mm' }
            ].map((spec, index) => (
              <div key={index} className="dashboard-card text-center group hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-red-400 font-['Orbitron'] mb-2">
                  {spec.value}
                  <span className="text-lg text-gray-400 ml-1">{spec.unit}</span>
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">{spec.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
