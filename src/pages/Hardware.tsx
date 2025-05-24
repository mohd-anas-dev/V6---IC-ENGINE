
import React, { useState } from 'react';
import { Cog, Zap, Settings, Activity } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Hardware = () => {
  const [activeComponent, setActiveComponent] = useState('pistons');

  const components = {
    pistons: {
      title: 'Pistons',
      icon: Cog,
      description: 'The heart of combustion power',
      details: 'Forged aluminum pistons with precisely engineered crown geometry for optimal compression and heat dissipation. Each piston weighs 280g and can withstand temperatures up to 300°C.',
      specs: [
        { label: 'Material', value: 'Forged Aluminum' },
        { label: 'Diameter', value: '89mm' },
        { label: 'Weight', value: '280g' },
        { label: 'Compression Height', value: '31.7mm' }
      ],
      animation: 'animate-bounce'
    },
    crankshaft: {
      title: 'Crankshaft',
      icon: Settings,
      description: 'Converting linear motion to rotational power',
      details: 'Precision-machined steel crankshaft with 60-degree throws, balanced to within 0.5 grams for smooth operation at high RPM. The forged steel construction ensures durability under extreme loads.',
      specs: [
        { label: 'Material', value: 'Forged Steel' },
        { label: 'Throw Angle', value: '60°' },
        { label: 'Journal Diameter', value: '60mm' },
        { label: 'Weight', value: '18.5kg' }
      ],
      animation: 'animate-spin'
    },
    combustion: {
      title: 'Combustion Chamber',
      icon: Zap,
      description: 'Where the magic of controlled explosions happens',
      details: 'Hemispherical combustion chambers designed for efficient fuel mixing and flame propagation. The chamber volume and shape are optimized for maximum power output while minimizing emissions.',
      specs: [
        { label: 'Volume', value: '58.5cc' },
        { label: 'Compression Ratio', value: '10.5:1' },
        { label: 'Shape', value: 'Hemispherical' },
        { label: 'Spark Plug', value: 'Iridium Tip' }
      ],
      animation: 'animate-pulse'
    },
    valvetrain: {
      title: 'Valve Timing System',
      icon: Activity,
      description: 'Precisely timed breathing for optimal performance',
      details: 'Dual overhead cam (DOHC) system with variable valve timing. Each cylinder has 4 valves (2 intake, 2 exhaust) operated by lightweight titanium springs for precise timing at all RPM ranges.',
      specs: [
        { label: 'Configuration', value: 'DOHC' },
        { label: 'Valves per Cylinder', value: '4' },
        { label: 'Valve Material', value: 'Stainless Steel' },
        { label: 'Spring Material', value: 'Titanium' }
      ],
      animation: 'animate-pulse'
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M0%200h40v40H0z%22/%3E%3Cpath%20d%3D%22M40%2040h40v40H40z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black font-['Orbitron'] text-chrome mb-6">
            ENGINE
            <span className="block text-transparent bg-gradient-to-r from-red-500 to-red-600 bg-clip-text">
              ANATOMY
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore every component that makes our V6 engine a masterpiece of engineering. 
            From pistons to valvetrain, discover the precision behind the power.
          </p>
        </div>
      </section>

      {/* Interactive Components Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs value={activeComponent} onValueChange={setActiveComponent} className="w-full">
            {/* Component Selector */}
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-gray-800/50 rounded-lg p-2 mb-8">
              {Object.entries(components).map(([key, component]) => {
                const Icon = component.icon;
                return (
                  <TabsTrigger 
                    key={key} 
                    value={key} 
                    className="flex flex-col items-center space-y-2 p-4 rounded-lg data-[state=active]:bg-red-500 data-[state=active]:text-white transition-all duration-300"
                  >
                    <Icon className={`w-6 h-6 ${activeComponent === key ? component.animation : ''}`} />
                    <span className="text-sm font-medium">{component.title}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {/* Component Details */}
            {Object.entries(components).map(([key, component]) => (
              <TabsContent key={key} value={key} className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Illustration Side */}
                  <div className="dashboard-card h-96 flex items-center justify-center relative overflow-hidden">
                    {/* Placeholder for component illustration */}
                    <div className="relative">
                      <div className={`w-48 h-48 rounded-full bg-gradient-to-r from-red-500 to-red-600 ${component.animation} flex items-center justify-center`}>
                        <component.icon className="w-24 h-24 text-white" />
                      </div>
                      <div className="absolute inset-0 rounded-full border-4 border-gray-600 animate-pulse"></div>
                    </div>
                    
                    {/* Technical lines overlay */}
                    <div className="absolute inset-0 opacity-20">
                      <svg className="w-full h-full" viewBox="0 0 400 400">
                        <defs>
                          <pattern id="tech-lines" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20,0 L 0,0 0,20" fill="none" stroke="#3b82f6" strokeWidth="0.5"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#tech-lines)"/>
                        <circle cx="200" cy="200" r="100" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5">
                          <animateTransform
                            attributeName="transform"
                            attributeType="XML"
                            type="rotate"
                            from="0 200 200"
                            to="360 200 200"
                            dur="10s"
                            repeatCount="indefinite"/>
                        </circle>
                      </svg>
                    </div>
                  </div>

                  {/* Description Side */}
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold font-['Orbitron'] text-chrome mb-4">
                        {component.title}
                      </h2>
                      <p className="text-lg text-red-400 mb-6 font-semibold">
                        {component.description}
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        {component.details}
                      </p>
                    </div>

                    {/* Specifications */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {component.specs.map((spec, index) => (
                        <div key={index} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                          <div className="text-sm text-gray-400 uppercase tracking-wide mb-1">
                            {spec.label}
                          </div>
                          <div className="text-lg font-semibold text-white font-['Orbitron']">
                            {spec.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-['Orbitron'] text-chrome">
            Performance Metrics
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Power Output',
                value: '300',
                unit: 'HP',
                description: 'Peak horsepower at 6000 RPM',
                color: 'from-red-500 to-red-600'
              },
              {
                title: 'Efficiency',
                value: '35%',
                unit: 'Thermal',
                description: 'Fuel to power conversion rate',
                color: 'from-green-500 to-green-600'
              },
              {
                title: 'Reliability',
                value: '100K',
                unit: 'Miles',
                description: 'Expected operational lifespan',
                color: 'from-blue-500 to-blue-600'
              }
            ].map((metric, index) => (
              <div key={index} className="dashboard-card text-center group hover:scale-105 transition-transform">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${metric.color} flex items-center justify-center`}>
                  <span className="text-2xl font-bold text-white font-['Orbitron']">
                    {metric.value.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-chrome mb-2 font-['Orbitron']">
                  {metric.title}
                </h3>
                <div className="text-3xl font-bold text-white mb-2 font-['Orbitron']">
                  {metric.value}
                  <span className="text-lg text-gray-400 ml-1">{metric.unit}</span>
                </div>
                <p className="text-gray-400 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hardware;
