
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Clock, Phone, Award, ChevronRight } from 'lucide-react';
import Layout from '../components/Layout';
import PawLoader from '../components/PawLoader';

const ServiceDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PawLoader />;
  }

  // Mock data for demo
  const service = {
    id: id,
    name: id === '1' ? 'Pawsome Grooming' : id === '2' ? 'Vet Care Center' : 'Pet Supplies Plus',
    image: id === '1' 
      ? 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=500&h=350&fit=crop'
      : id === '2'
        ? 'https://images.unsplash.com/photo-1441057206919-63d19fac2369?w=500&h=350&fit=crop'
        : 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&h=350&fit=crop',
    category: id === '1' ? 'Grooming' : id === '2' ? 'Veterinary' : 'Pet Shop',
    rating: id === '1' ? 4.8 : id === '2' ? 4.9 : 4.6,
    reviewCount: id === '1' ? 128 : id === '2' ? 156 : 98,
    location: id === '1' ? '2.5 miles away' : id === '2' ? '1.8 miles away' : '3.2 miles away',
    address: '123 Pet Avenue, Pet City',
    phone: '+1 234 567 8901',
    hours: '9:00 AM - 6:00 PM',
    services: [
      { name: 'Basic Grooming', price: 30 },
      { name: 'Premium Package', price: 50 },
      { name: 'Spa Treatment', price: 75 },
    ],
    offers: [
      '10% off on first visit',
      'Get 2x Paw Points this week',
    ]
  };

  return (
    <Layout>
      <div className="pb-20">
        <div className="relative h-64">
          <img 
            src={service.image} 
            alt={service.name} 
            className="w-full h-full object-cover"
          />
          <button 
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md"
          >
            <ArrowLeft size={20} />
          </button>
        </div>
        
        <div className="p-4 -mt-6 bg-white rounded-t-3xl relative z-10">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-xl font-bold text-gray-800">{service.name}</h1>
              <p className="text-sm text-primary">{service.category}</p>
            </div>
            <div className="flex items-center bg-secondary px-3 py-1.5 rounded-full">
              <Star size={16} className="text-yellow-500 mr-1" fill="#F8CD38" />
              <span className="font-semibold">{service.rating}</span>
              <span className="text-gray-500 text-xs ml-1">({service.reviewCount})</span>
            </div>
          </div>
          
          <div className="flex items-center mb-4 text-gray-600">
            <div className="flex items-center mr-4">
              <MapPin size={16} className="mr-1" />
              <span className="text-sm">{service.address}</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span className="text-sm">{service.hours}</span>
            </div>
          </div>
          
          <div className="flex items-center mb-6">
            <button className="flex items-center justify-center bg-primary/10 text-primary rounded-full px-4 py-2 text-sm mr-3">
              <Phone size={16} className="mr-1" />
              Call
            </button>
            <button className="flex-1 bg-secondary text-gray-700 rounded-full px-4 py-2 text-sm font-medium">
              Get Directions
            </button>
          </div>
          
          <div className="mb-6">
            <h2 className="font-semibold text-gray-800 mb-3">Available Services</h2>
            <div className="bg-white rounded-xl border border-gray-100 divide-y">
              {service.services.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3">
                  <span className="text-gray-700">{item.name}</span>
                  <span className="font-medium">${item.price}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="font-semibold text-gray-800 mb-3">Special Offers</h2>
            <div className="bg-gradient-to-r from-accent/30 to-secondary/50 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <Award size={20} className="text-primary mr-2" />
                <h3 className="font-medium">Available Offers</h3>
              </div>
              <ul className="ml-7 list-disc">
                {service.offers.map((offer, index) => (
                  <li key={index} className="text-sm text-gray-700 mb-1">{offer}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <button 
            className="pet-button paw-effect w-full py-4 flex items-center justify-center"
            onClick={() => navigate('/payment')}
          >
            <span className="mr-2">Pay with OSCPets Pay</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceDetails;
