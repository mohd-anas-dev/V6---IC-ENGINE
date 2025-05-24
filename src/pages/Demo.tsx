
import { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

const Demo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [rpm, setRpm] = useState([0]);
  const [volume, setVolume] = useState([50]);

  const handleStartEngine = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      // Simulate engine startup
      const interval = setInterval(() => {
        setRpm(prev => {
          const newRpm = Math.min(prev[0] + 100, 6000);
          if (newRpm >= 6000) {
            clearInterval(interval);
          }
          return [newRpm];
        });
      }, 100);
    } else {
      setRpm([0]);
    }
  };

  const resetDemo = () => {
    setIsPlaying(false);
    setRpm([0]);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black font-['Orbitron'] text-chrome mb-6">
            ENGINE
            <span className="block text-transparent bg-gradient-to-r from-red-500 to-red-600 bg-clip-text">
              DEMO
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Experience the power and precision of our V6 engine in action. Watch as each component 
            works in perfect harmony to deliver exceptional performance.
          </p>
        </div>
      </section>

      {/* Video/Demo Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Video Container */}
          <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden shadow-2xl border border-gray-600">
            {/* Placeholder Video */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="text-center">
                <div className={`w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center ${isPlaying ? 'engine-glow animate-spin' : ''}`}>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 flex items-center justify-center">
                    {isPlaying ? (
                      <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                    ) : (
                      <Play className="w-8 h-8 text-gray-600" />
                    )}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-['Orbitron']">
                  {isPlaying ? 'Engine Running' : 'V6 Engine Demo'}
                </h3>
                <p className="text-gray-400">
                  {isPlaying ? 'Watch the pistons fire in sequence' : 'Click Start Engine to begin demo'}
                </p>
              </div>
            </div>

            {/* Video Overlay Controls */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button
                      onClick={handleStartEngine}
                      className={`w-12 h-12 rounded-full ${isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} flex items-center justify-center`}
                    >
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                    </Button>
                    
                    <Button
                      onClick={resetDemo}
                      variant="outline"
                      className="w-12 h-12 rounded-full border-gray-600 hover:bg-gray-700"
                    >
                      <RotateCcw className="w-5 h-5" />
                    </Button>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Button
                      onClick={() => setIsMuted(!isMuted)}
                      variant="ghost"
                      className="w-10 h-10 rounded-full"
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </Button>
                    
                    <div className="w-20">
                      <Slider
                        value={volume}
                        onValueChange={setVolume}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Engine Controls */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* RPM Gauge */}
            <div className="dashboard-card">
              <h3 className="text-xl font-bold text-chrome mb-4 font-['Orbitron']">RPM Monitor</h3>
              <div className="relative">
                <div className="w-48 h-48 mx-auto relative">
                  {/* Gauge Background */}
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#374151"
                      strokeWidth="4"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="4"
                      strokeDasharray={`${(rpm[0] / 6000) * 502.65} 502.65`}
                      strokeLinecap="round"
                      transform="rotate(-90 100 100)"
                      className="transition-all duration-300"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white font-['Orbitron']">
                        {rpm[0].toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-400">RPM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Engine Stats */}
            <div className="dashboard-card">
              <h3 className="text-xl font-bold text-chrome mb-4 font-['Orbitron']">Engine Status</h3>
              <div className="space-y-4">
                {[
                  { label: 'Temperature', value: `${Math.round(20 + (rpm[0] / 6000) * 80)}°C`, status: rpm[0] > 4000 ? 'warning' : 'normal' },
                  { label: 'Oil Pressure', value: `${Math.round(30 + (rpm[0] / 6000) * 40)} PSI`, status: 'normal' },
                  { label: 'Fuel Flow', value: `${Math.round(5 + (rpm[0] / 6000) * 15)} L/h`, status: 'normal' },
                  { label: 'Power Output', value: `${Math.round((rpm[0] / 6000) * 300)} HP`, status: rpm[0] > 5000 ? 'excellent' : 'normal' }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-300">{stat.label}</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-white font-['Orbitron']">{stat.value}</span>
                      <div className={`w-3 h-3 rounded-full ${
                        stat.status === 'excellent' ? 'bg-green-400' :
                        stat.status === 'warning' ? 'bg-yellow-400' : 'bg-blue-400'
                      } ${isPlaying ? 'animate-pulse' : ''}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Data */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-['Orbitron'] text-chrome">
            Performance Data
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Max RPM', value: '6000', unit: 'RPM' },
              { label: 'Peak Power', value: '300', unit: 'HP' },
              { label: 'Peak Torque', value: '350', unit: 'lb-ft' },
              { label: 'Redline', value: '6500', unit: 'RPM' },
              { label: '0-60 mph', value: '5.2', unit: 'sec' },
              { label: 'Top Speed', value: '155', unit: 'mph' },
              { label: 'Fuel Economy', value: '25', unit: 'mpg' },
              { label: 'Displacement', value: '3.5', unit: 'L' }
            ].map((metric, index) => (
              <div key={index} className="dashboard-card text-center">
                <div className="text-2xl font-bold text-red-400 font-['Orbitron'] mb-1">
                  {metric.value}
                  <span className="text-sm text-gray-400 ml-1">{metric.unit}</span>
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;
