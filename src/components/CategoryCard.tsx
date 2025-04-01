
import { ReactNode } from 'react';

interface CategoryCardProps {
  icon: ReactNode;
  name: string;
}

const CategoryCard = ({ icon, name }: CategoryCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="pet-category-icon text-primary">{icon}</div>
      <span className="text-sm font-medium text-gray-700">{name}</span>
    </div>
  );
};

export default CategoryCard;
