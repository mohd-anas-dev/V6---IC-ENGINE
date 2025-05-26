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
          description: "Our custom-designed pistons are 3D-printed in high-quality plastic to replicate real high-performance designs. They feature detailed ring grooves and optimized skirt profiles for accurate representation and smooth operation within the V6 engine model.",
          specs: [
            "Material: PLA+ (3D Printed Plastic)",
            "Compression Ratio: Modeled at 10.5:1",
            "Piston Rings: 3 ",
            "Surface Treatment: Modeled Thermal Barrier Texture",
            "Weight: 45g each"
          ],
          animation: <PistonAnimation />,
          backgroundImage: "https://i.postimg.cc/Rh4GDLS1/Chat-GPT-Image-May-26-2025-12-03-52-AM.png"
        };
      case 'crankshaft':
        return {
          title: "Precision-Engineered Crankshaft",
          description: "The crankshaft is 3D-printed to replicate a real forged-steel design, serving as the backbone of our V6 engine model. Its counterweights and detailed journals ensure smooth rotation and accurate bearing simulation.",
          specs: [
            "Material: 3D-printed Plastic (for model representation)",
            "Configuration: 6-throw, 60° V6",
            "Main Bearings: 4 (Modeled)",
            "Counterweights: 6 (Integrated in Design)",
            "Treatment: Matte Plastic"
          ],
          animation: <CrankshaftAnimation />,
          backgroundImage: "https://i.postimg.cc/Kzy51DMX/Chat-GPT-Image-May-26-2025-12-06-38-AM.png"
        };
      case 'combustion':
        return {
          title: "Advanced Combustion Chamber",
          description: "Our combustion chamber is modeled to demonstrate optimized flame front propagation. The hemispherical shape and strategically placed mock spark plugs replicate the geometry for efficient combustion in real engines.",
          specs: [
            "Chamber Shape: Semi-Hemispherical",
            "Volume: 52cc",
            "Spark Plug Position: Central",
            "Swirl Ratio: 0.8",
            "Quench Area: Optimized for emissions"
          ],
          animation: <CombustionAnimation />,
          backgroundImage: "https://i.postimg.cc/s2g6Vc7T/Detailed-Engine-Model-in-3-D.png"
        };
      case 'valves':
        return {
          title: "Precision Valve Timing System",
          description: "The valve train is modeled with a DOHC layout to showcase high-performance engine design. Though non-functional, it simulates variable valve timing and features representational sodium-filled exhaust and hollow intake valves for thermal and weight management.",
          specs: [
            "Configuration: DOHC (Modeled)",
            "Valves per Cylinder: 4 (2 Intake, 2 Exhaust – Simulated)",
            "Intake Valve Diameter: 35mm",
            "Exhaust Valve Diameter: 30mm",
            "Cam Lift: 10.5mm intake, 9.8mm exhaust"
          ],
          animation: <ValveAnimation />,
          backgroundImage: "https://i.postimg.cc/c1tsx7c1/Chat-GPT-Image-May-25-2025-11-57-02-PM.png"
        };
      default:
        return {
          title: "",
          description: "",
          specs: [],
          animation: null,
          backgroundImage: ""
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
          <div className="lg:w-1/2 relative flex justify-center items-center p-8 bg-dark-asphalt rounded-lg">
            <img 
              src={currentContent.backgroundImage}
              alt="Component Background"
              className="absolute inset-0 w-full h-full object-cover opacity-50 rounded-lg"
            />
            <div className="relative z-10 w-full h-64">
              {currentContent.animation}
            </div>
          </div>
          
          {/* Component Description */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-orbitron text-black mb-4">{currentContent.title}</h3>
            <p className="text-black mb-6">{currentContent.description}</p>
            
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
