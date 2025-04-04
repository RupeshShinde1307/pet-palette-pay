
import { ReactNode } from 'react';

interface CategoryCardProps {
  icon: ReactNode;
  name: string;
  active?: boolean;
}

const CategoryCard = ({ icon, name, active = false }: CategoryCardProps) => {
  return (
    <div className={`flex flex-col items-center justify-center p-3 rounded-xl 
      ${active 
        ? 'bg-primary text-white shadow-md' 
        : 'bg-white text-gray-700 shadow-sm hover:shadow-md'
      } transition-all duration-300`}>
      <div className={`${active ? 'text-white' : 'text-primary'} mb-1`}>{icon}</div>
      <span className="text-xs font-medium">{name}</span>
    </div>
  );
};

export default CategoryCard;
