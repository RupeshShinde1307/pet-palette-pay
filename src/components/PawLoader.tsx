
import { PawPrint } from 'lucide-react';

interface PawLoaderProps {
  message?: string;
}

const PawLoader = ({ message = "Loading..." }: PawLoaderProps) => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <div className="relative w-full h-16 overflow-hidden mb-4">
        <PawPrint 
          size={32} 
          className="absolute animate-paw-walk text-primary" 
          fill="#E6F7FF"
        />
      </div>
      
      <div className="flex items-center mb-2">
        <div className="w-4 h-4 rounded-full bg-primary animate-bounce-slight mr-1.5"></div>
        <div className="w-4 h-4 rounded-full bg-accent animate-bounce-slight animation-delay-200 mr-1.5"></div>
        <div className="w-4 h-4 rounded-full bg-secondary animate-bounce-slight animation-delay-400"></div>
      </div>
      
      <p className="text-gray-600 font-medium">{message}</p>
    </div>
  );
};

export default PawLoader;
