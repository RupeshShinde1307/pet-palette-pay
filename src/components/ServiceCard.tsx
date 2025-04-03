
import { Star, MapPin, IndianRupee } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  id: string;
  name: string;
  image: string;
  category: string;
  rating: number;
  location: string;
  price?: number;
}

const ServiceCard = ({ id, name, image, category, rating, location, price }: ServiceCardProps) => {
  return (
    <Link to={`/service/${id}`}>
      <div className="bg-white rounded-2xl overflow-hidden card-shadow mb-4">
        <div className="h-40 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-gray-800">{name}</h3>
              <p className="text-xs text-primary font-medium mt-1">{category}</p>
            </div>
            <div className="flex items-center bg-secondary px-2 py-1 rounded-full">
              <Star size={14} className="text-yellow-500 mr-1" fill="#F8CD38" />
              <span className="text-xs font-medium">{rating}</span>
            </div>
          </div>
          <div className="flex items-center mt-2 text-gray-500">
            <MapPin size={14} className="mr-1" />
            <p className="text-xs">{location}</p>
          </div>
          {price && (
            <div className="flex items-center mt-2 text-primary font-medium">
              <IndianRupee size={14} className="mr-1" />
              <p className="text-sm">{price}</p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
