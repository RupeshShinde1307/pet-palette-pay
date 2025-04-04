
import { useState } from 'react';
import { Search as SearchIcon, MapPin, Star, Phone, IndianRupee } from 'lucide-react';
import Layout from '../components/Layout';
import { Input } from '../components/ui/input';
import { Link } from 'react-router-dom';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Sample data - in a real application this would come from an API
  const allServices = [
    // Grooming Services
    {
      id: 'grooming1',
      name: 'Twix & Butch Pet Salon',
      image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=500&h=350&fit=crop',
      category: 'Grooming',
      rating: 4.8,
      location: 'Kalyani Nagar, Pune',
      price: 2500,
      phone: '+91 98765 43210',
    },
    {
      id: 'grooming2',
      name: 'Groomingdale Pet Salon',
      image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=500&h=350&fit=crop',
      category: 'Grooming',
      rating: 4.6,
      location: 'Deccan Gymkhana, Pune',
      price: 1800,
      phone: '+91 98765 43211',
    },
    {
      id: 'grooming3',
      name: 'Pet Wagon',
      image: 'https://images.unsplash.com/photo-1518155317743-a8ff43ea6a5f?w=500&h=350&fit=crop',
      category: 'Grooming',
      rating: 4.7,
      location: 'Mobile service in Pune',
      price: 2200,
      phone: '+91 94220 22036',
    },
    
    // Veterinary Services
    {
      id: 'vet1',
      name: 'Pet House And Clinic',
      image: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369?w=500&h=350&fit=crop',
      category: 'Veterinary',
      rating: 4.9,
      location: 'Kaspate Wasti, Wakad, Pune',
      price: 800,
      phone: '020 6682 8561',
    },
    
    // Training Services
    {
      id: 'training1',
      name: 'Joella\'s Dog Care',
      image: 'https://images.unsplash.com/photo-1541599468348-e96984315921?w=500&h=350&fit=crop',
      category: 'Training',
      rating: 4.5,
      location: 'Viman Nagar, Pune',
      price: 3500,
      phone: '+91 98765 43212',
    },
    {
      id: 'training2',
      name: 'Happy Tails Boarding',
      image: 'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?w=500&h=350&fit=crop',
      category: 'Training',
      rating: 4.7,
      location: 'Bhugaon, Pune',
      price: 4000,
      phone: '+91 98765 43213',
    },
    
    // Pet Shops
    {
      id: 'petshop1',
      name: 'Khushi Pet Shopee',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&h=350&fit=crop',
      category: 'Pet Shop',
      rating: 4.6,
      location: 'Kalyani Nagar, Pune',
      price: 0,
      phone: '020 6682 8368',
    },
    {
      id: 'petshop2',
      name: 'Grand Pet Shop',
      image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500&h=350&fit=crop',
      category: 'Pet Shop',
      rating: 4.4,
      location: 'Nigdi-Pimpri Chinchwad, Pune',
      price: 0,
      phone: '020 6682 3885',
    },
  ];

  // Filter based on search query and selected category
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         service.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="px-4 pt-6 pb-20">
        <h1 className="text-xl font-bold text-gray-800 mb-4">Search</h1>
        
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <SearchIcon size={18} className="text-gray-400" />
          </div>
          <Input
            type="text"
            placeholder="Find pet services near you..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 py-3 rounded-full border border-gray-200"
            autoFocus
          />
        </div>

        <div className="flex overflow-x-auto gap-2 pb-2 mb-4">
          {['All', 'Grooming', 'Veterinary', 'Pet Shop', 'Training'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                selectedCategory === category 
                  ? 'bg-primary text-white' 
                  : 'border border-gray-200 bg-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {filteredServices.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No services found matching your search</p>
          </div>
        ) : (
          filteredServices.map((service) => (
            <Link key={service.id} to={`/service/${service.id}`}>
              <div className="mb-4 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-800">{service.name}</h3>
                      <span className="text-xs px-2 py-0.5 bg-secondary rounded-full inline-block mt-1">
                        {service.category}
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Star size={14} className="text-yellow-400 mr-1" fill="#FBBF24" />
                      <span>{service.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <MapPin size={14} className="mr-1" />
                    <span>{service.location}</span>
                  </div>
                  
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <Phone size={14} className="mr-1" />
                    <span>{service.phone}</span>
                  </div>
                  
                  {service.price > 0 && (
                    <div className="flex items-center mt-2 text-primary font-medium">
                      <IndianRupee size={14} className="mr-1" />
                      <span>Starting from {service.price}</span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </Layout>
  );
};

export default Search;
