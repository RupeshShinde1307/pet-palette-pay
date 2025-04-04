
import { Star, MapPin, IndianRupee, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  id: string;
  name: string;
  image: string;
  category: string;
  rating: number;
  location: string;
  price?: number;
  phone?: string;
  services?: string[];
}

const ServiceCard = ({ id, name, image, category, rating, location, price, phone, services }: ServiceCardProps) => {
  return (
    <Link to={`/service/${id}`}>
      <div className="bg-white rounded-2xl overflow-hidden card-shadow mb-4 hover:shadow-md transition-shadow">
        <div className="h-40 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-gray-800">{name}</h3>
              <p className="text-xs bg-secondary px-2 py-0.5 rounded-full inline-block mt-1">{category}</p>
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
          
          {phone && (
            <div className="flex items-center mt-2 text-gray-500">
              <Phone size={14} className="mr-1" />
              <p className="text-xs">{phone}</p>
            </div>
          )}
          
          {services && services.length > 0 && (
            <div className="mt-2">
              <p className="text-xs text-gray-600 font-medium">Services:</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {services.slice(0, 3).map((service, index) => (
                  <span key={index} className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">{service}</span>
                ))}
                {services.length > 3 && (
                  <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">+{services.length - 3} more</span>
                )}
              </div>
            </div>
          )}
          
          {price !== undefined && price > 0 && (
            <div className="flex items-center mt-2 text-primary font-medium">
              <IndianRupee size={14} className="mr-1" />
              <p className="text-sm">Starting from {price}</p>
            </div>
          )}
          
          {price === 0 && (
            <div className="mt-2">
              <p className="text-xs text-gray-600">Products & supplies available</p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
