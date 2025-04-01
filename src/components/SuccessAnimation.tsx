
import { Check } from 'lucide-react';
import { useEffect, useState } from 'react';

interface SuccessAnimationProps {
  message: string;
  subMessage?: string;
}

const SuccessAnimation = ({ message, subMessage }: SuccessAnimationProps) => {
  const [showCheck, setShowCheck] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCheck(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24 mb-6">
        <div className={`absolute inset-0 bg-secondary rounded-full transform ${showCheck ? 'scale-100' : 'scale-0'} transition-transform duration-500`}></div>
        <div className={`absolute inset-0 flex items-center justify-center opacity-0 ${showCheck ? 'opacity-100' : ''} transition-opacity delay-300`}>
          <Check size={40} className="text-primary" strokeWidth={3} />
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{message}</h3>
        {subMessage && (
          <p className="text-gray-600">{subMessage}</p>
        )}
      </div>
      
      <div className="mt-8 flex justify-center">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1501286353178-1ec881214838?w=400&h=300&fit=crop" 
            alt="Happy pet" 
            className="w-40 h-40 object-cover rounded-full border-4 border-secondary animate-float" 
          />
          <span className="absolute -top-4 -right-4 text-4xl animate-bounce-slight">🎉</span>
        </div>
      </div>
    </div>
  );
};

export default SuccessAnimation;
