
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Clock, Phone, Award, ChevronRight, IndianRupee } from 'lucide-react';
import Layout from '../components/Layout';
import PawLoader from '../components/PawLoader';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";

const ServiceDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [mapOpen, setMapOpen] = useState(false);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleCall = (phoneNumber: string) => {
    // Use tel: protocol to initiate a call
    window.location.href = `tel:${phoneNumber}`;
  };

  if (loading) {
    return <PawLoader />;
  }

  // This would be fetched from an API in a real application
  const allServices = [
    // Grooming Services
    {
      id: 'grooming1',
      name: 'Twix & Butch Pet Salon',
      image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=500&h=350&fit=crop',
      category: 'Grooming',
      rating: 4.8,
      reviewCount: 128,
      location: 'Kalyani Nagar, Pune',
      address: '123 Pet Avenue, Kalyani Nagar, Pune',
      price: 2500,
      phone: '+91 98765 43210',
      hours: '9:00 AM - 6:00 PM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6175453526224!2d-73.98657412412566!3d40.748447537538435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0xaca05ca48ab0c23!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1704887880561!5m2!1sen!2sus',
      services: [
        { name: 'Basic Grooming', price: 1500 },
        { name: 'Premium Package', price: 2500 },
        { name: 'Spa Treatment', price: 3600 },
      ],
      offers: [
        '10% off on first visit',
        'Get 2x Paw Points this week',
      ]
    },
    {
      id: 'grooming2',
      name: 'Groomingdale Pet Salon',
      image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=500&h=350&fit=crop',
      category: 'Grooming',
      rating: 4.6,
      reviewCount: 98,
      location: 'Deccan Gymkhana, Pune',
      address: '456 Grooming Street, Deccan Gymkhana, Pune',
      price: 1800,
      phone: '+91 98765 43211',
      hours: '10:00 AM - 7:00 PM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6175453526224!2d-73.98657412412566!3d40.748447537538435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0xaca05ca48ab0c23!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1704887880561!5m2!1sen!2sus',
      services: [
        { name: 'Summer Cut', price: 1200 },
        { name: 'Trim', price: 800 },
        { name: 'Basic Bath', price: 1500 },
      ],
      offers: [
        '15% off for new customers',
        'Free nail trim with any service',
      ]
    },
    // Add similar detailed data for other services here
    // ...
  ];

  // Find the service matching the ID from the URL
  const service = allServices.find(s => s.id === id) || {
    id: id || '',
    name: 'Service not found',
    image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=500&h=350&fit=crop',
    category: 'Unknown',
    rating: 0,
    reviewCount: 0,
    location: 'Location not available',
    address: 'Address not available',
    phone: 'Phone not available',
    hours: 'Hours not available',
    mapUrl: '',
    services: [],
    offers: []
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
            <button 
              className="flex items-center justify-center bg-primary/10 text-primary rounded-full px-4 py-2 text-sm mr-3"
              onClick={() => handleCall(service.phone)}
            >
              <Phone size={16} className="mr-1" />
              Call
            </button>
            <button 
              className="flex-1 bg-secondary text-gray-700 rounded-full px-4 py-2 text-sm font-medium"
              onClick={() => setMapOpen(true)}
            >
              Get Directions
            </button>
          </div>
          
          <div className="mb-6">
            <h2 className="font-semibold text-gray-800 mb-3">Available Services</h2>
            <div className="bg-white rounded-xl border border-gray-100 divide-y">
              {service.services && service.services.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3">
                  <span className="text-gray-700">{item.name}</span>
                  <div className="flex items-center font-medium">
                    <IndianRupee size={14} className="mr-1" />
                    <span>{item.price}</span>
                  </div>
                </div>
              ))}
              {(!service.services || service.services.length === 0) && (
                <div className="p-3 text-center text-gray-500">No services available</div>
              )}
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
                {service.offers && service.offers.map((offer, index) => (
                  <li key={index} className="text-sm text-gray-700 mb-1">{offer}</li>
                ))}
                {(!service.offers || service.offers.length === 0) && (
                  <li className="text-sm text-gray-700">No current offers available</li>
                )}
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

      {/* Google Maps Dialog */}
      <Dialog open={mapOpen} onOpenChange={setMapOpen}>
        <DialogContent className="sm:max-w-md h-[70vh]">
          <DialogHeader>
            <DialogTitle>Directions to {service.name}</DialogTitle>
          </DialogHeader>
          <div className="h-full w-full">
            <iframe
              src={service.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '0.5rem' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[50vh]"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default ServiceDetails;
