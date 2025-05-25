
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  PistonAnimation, 
  CrankshaftAnimation, 
  ValveAnimation, 
  CombustionAnimation 
} from '../components/animations/EngineParts';

const HardwarePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('pistons');
  
  const tabs = [
    { id: 'pistons', label: 'Pistons' },
    { id: 'crankshaft', label: 'Crankshaft' },
    { id: 'combustion', label: 'Combustion Chamber' },
    { id: 'valves', label: 'Valve System' }
  ];
  
  const getTabContent = (tabId: string) => {
    switch(tabId) {
      case 'pistons':
        return {
          title: "High-Performance Pistons",
          description: "Our custom-designed pistons are crafted from high-grade aluminum alloy, featuring precision ring grooves and optimized skirt profiles. Each piston undergoes rigorous quality control to ensure perfect fit and performance.",
          specs: [
            "Material: Forged Aluminum Alloy",
            "Compression Ratio: 10.5:1",
            "Piston Rings: 3 (Compression, Oil Control)",
            "Surface Treatment: Thermal Barrier Coating",
            "Weight: 320g each"
          ],
          animation: <PistonAnimation />
        };
      case 'crankshaft':
        return {
          title: "Precision-Engineered Crankshaft",
          description: "The crankshaft is the backbone of our V6 engine, machined from a solid billet of forged steel. Its counterweighted design ensures smooth operation throughout the RPM range, with precision-ground journals for optimal bearing contact.",
          specs: [
            "Material: Forged Steel",
            "Configuration: 6-throw, 60° V6",
            "Main Bearings: 4",
            "Counterweights: 6",
            "Treatment: Nitride hardening"
          ],
          animation: <CrankshaftAnimation />
        };
      case 'combustion':
        return {
          title: "Advanced Combustion Chamber",
          description: "Our combustion chamber design optimizes the flame front propagation for efficient fuel burning. The hemispherical shape with strategically positioned spark plugs creates the ideal environment for complete combustion.",
          specs: [
            "Chamber Shape: Semi-Hemispherical",
            "Volume: 52cc",
            "Spark Plug Position: Central",
            "Swirl Ratio: 0.8",
            "Quench Area: Optimized for emissions"
          ],
          animation: <CombustionAnimation />
        };
      case 'valves':
        return {
          title: "Precision Valve Timing System",
          description: "The valve train features dual overhead camshafts (DOHC) with variable valve timing capability. The system includes sodium-filled exhaust valves for better heat dissipation and hollow intake valves to reduce reciprocating mass.",
          specs: [
            "Configuration: DOHC (Dual Overhead Camshaft)",
            "Valves per Cylinder: 4 (2 Intake, 2 Exhaust)",
            "Intake Valve Diameter: 35mm",
            "Exhaust Valve Diameter: 30mm",
            "Cam Lift: 10.5mm intake, 9.8mm exhaust"
          ],
          animation: <ValveAnimation />
        };
      default:
        return {
          title: "",
          description: "",
          specs: [],
          animation: null
        };
    }
  };
  
  const currentContent = getTabContent(activeTab);
  
  return (
    <div className="page-container">
      {/* Page Header */}
      <motion.div 
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold font-orbitron text-chrome-silver mb-4">Hardware & Mechanism</h1>
        <div className="h-1 w-24 bg-racing-red mx-auto mb-6"></div>
        <p className="text-metallic-grey max-w-2xl mx-auto">
          Explore the precision-engineered components that bring our V6 engine to life, showcasing the perfect harmony of form and function.
        </p>
      </motion.div>
      
      {/* Engine Overview */}
      <section className="mb-16">
        <motion.div 
          className="metal-panel p-8 blueprint-bg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-orbitron text-chrome-silver mb-4">V6 Engine Architecture</h2>
              <p className="text-metallic-grey mb-4">
              Our V6 engine model features a 60-degree V configuration, offering a compact layout and visually smooth mechanical motion. The engine block is 3D-printed using durable plastic filament, designed to replicate real engine geometry.
              </p>
              <p className="text-metallic-grey mb-4">
              Though non-functional in combustion, the model simulates a 3.5-liter V6 with a quad-cam layout, showcasing realistic valve movement and rotational dynamics powered by a 9V DC motor.
              </p>
              
              <div className="mt-6 bg-engine-black p-4 rounded-lg border border-metallic-grey">
                <h3 className="text-lg font-orbitron text-chrome-silver mb-3">Engine Specifications</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-metallic-grey">Configuration</span>
                    <span className="text-chrome-silver">60° V6</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-metallic-grey">Displacement</span>
                    <span className="text-chrome-silver">3.5L (3498cc)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-metallic-grey">Bore × Stroke</span>
                    <span className="text-chrome-silver">94mm × 84mm</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-metallic-grey">Compression Ratio</span>
                    <span className="text-chrome-silver">Non-functional (visual model only)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-metallic-grey">Power Output</span>
                    <span className="text-chrome-silver">Powered by a 100 RPM DC motor</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-metallic-grey">Torque</span>
                    <span className="text-chrome-silver">Not measured, simulated rotation.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center items-center">
              <img 
                src="https://i.postimg.cc/tgyT7B5G/V6-IC-ENGINE.png" 
                alt="V6 Engine" 
                className="rounded-lg max-h-96 object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* Component Details with Tabs */}
      <section>
        <h2 className="section-title">Engine Components</h2>
        
        {/* Tab Navigation */}
        <div className="flex overflow-x-auto mb-8 pb-2 border-b border-metallic-grey">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-orbitron text-sm transition-all duration-300 whitespace-nowrap
                ${activeTab === tab.id 
                  ? 'text-neon-blue border-b-2 border-neon-blue' 
                  : 'text-metallic-grey hover:text-chrome-silver'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Tab Content */}
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col lg:flex-row gap-8 p-6 metal-panel"
        >
          {/* Component Visualization */}
          <div className="lg:w-1/2 flex justify-center items-center p-8 bg-dark-asphalt rounded-lg">
            {currentContent.animation}
          </div>
          
          {/* Component Description */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-orbitron text-chrome-silver mb-4">{currentContent.title}</h3>
            <p className="text-metallic-grey mb-6">{currentContent.description}</p>
            
            <div className="bg-engine-black p-4 rounded-lg border border-metallic-grey">
              <h4 className="text-lg font-orbitron text-chrome-silver mb-3">Technical Specifications</h4>
              <ul className="space-y-2">
                {currentContent.specs.map((spec, index) => (
                  <li key={index} className="text-metallic-grey flex items-center">
                    <div className="w-2 h-2 bg-racing-red rounded-full mr-2"></div>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HardwarePage;
