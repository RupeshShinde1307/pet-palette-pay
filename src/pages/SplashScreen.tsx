
import { useState, useEffect } from 'react';
import { PawPrint } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const navigate = useNavigate();
  
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + 25;
        return newProgress <= 100 ? newProgress : 100;
      });
    }, 500);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    if (loadingProgress === 100) {
      const timeout = setTimeout(() => {
        navigate('/home');
      }, 500);
      
      return () => clearTimeout(timeout);
    }
  }, [loadingProgress, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <div className="w-32 h-32 mb-6 relative">
        <div className="absolute inset-0 rounded-full bg-secondary flex items-center justify-center">
          <PawPrint size={48} className="text-primary" fill="#E6F7FF" />
        </div>
        <svg className="w-full h-full absolute top-0 left-0" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="#EAEAEA"
            strokeWidth="6"
          />
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="#33C3F0"
            strokeWidth="6"
            strokeDasharray="289.27"
            strokeDashoffset={289.27 - (289.27 * loadingProgress) / 100}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />
        </svg>
      </div>
      
      <h1 className="text-2xl font-bold text-center mb-3 text-gray-800">OSCPets Pay</h1>
      <p className="text-center text-gray-600 max-w-xs">
        Hassle-free payments for pet services!
      </p>
      
      <div className="mt-12 flex space-x-2">
        {[0, 1, 2, 3].map((_, idx) => (
          <div
            key={idx}
            className={`w-2.5 h-2.5 rounded-full ${
              loadingProgress >= (idx + 1) * 25 
                ? 'bg-primary' 
                : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SplashScreen;
