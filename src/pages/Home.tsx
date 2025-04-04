
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import CategoryCard from '../components/CategoryCard';
import ServiceCard from '../components/ServiceCard';
import PawLoader from '../components/PawLoader';
import { Scissors, ShoppingBag, Stethoscope, Dumbbell, Award, PawPrint } from 'lucide-react';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { id: 'all', icon: <PawPrint />, name: 'All' },
    { id: 'grooming', icon: <Scissors />, name: 'Grooming' },
    { id: 'veterinary', icon: <Stethoscope />, name: 'Veterinary' },
    { id: 'petshop', icon: <ShoppingBag />, name: 'Pet Shops' },
    { id: 'training', icon: <Dumbbell />, name: 'Training' },
  ];

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
      services: ['Haircuts', 'Coat clipping', 'Nail clipping', 'Teeth cleaning', 'Medicated baths']
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
      services: ['Summer cuts', 'Trims', 'Basic baths for cats and dogs']
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
      services: ['Mobile grooming', 'Tick & flea baths', 'Aromatherapy', 'Full-service grooming']
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
      services: ['General checkups', 'Vaccinations', 'Emergency care', 'Surgery']
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
      services: ['Dog training', 'Dog hostel']
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
      services: ['Obedience training', 'Refresher training', 'Puppy day-care']
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
      services: ['Pet supplies', 'Pet food', 'Accessories']
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
      services: ['Pet supplies', 'Pet food', 'Accessories']
    },
    {
      id: 'petshop3',
      name: 'Pets Spot',
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&h=350&fit=crop',
      category: 'Pet Shop',
      rating: 4.8,
      location: 'Baner, Pune',
      price: 0,
      phone: '+91 98765 43214',
      services: ['Pet supplies', 'Cat fostering', 'Pet grooming', 'Accessories']
    },
    {
      id: 'petshop4',
      name: 'Om Pet Shopee',
      image: 'https://images.unsplash.com/photo-1596854307943-279e29c90c14?w=500&h=350&fit=crop',
      category: 'Pet Shop',
      rating: 4.5,
      location: 'Koregaon Park, Pune',
      price: 0,
      phone: '+91 98765 43215',
      services: ['Food', 'Accessories', 'Supplements', 'Basic obedience training', 'Dog hostel']
    }
  ];

  // Filter services based on active category
  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(service => 
        service.category.toLowerCase() === activeCategory.replace('petshop', 'pet shop')
      );

  if (loading) {
    return <PawLoader />;
  }

  return (
    <Layout>
      <div className="px-4 pt-6 pb-20">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-bold text-gray-800">Hi, Pet Lover!</h1>
            <p className="text-sm text-gray-500">Find and pay for pet services</p>
          </div>
          <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
            <PawPrint size={20} className="text-primary" />
          </div>
        </div>

        <SearchBar />

        <div className="mt-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-gray-800">Categories</h2>
            <span className="text-sm text-primary">See All</span>
          </div>
          <div className="grid grid-cols-5 gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <div key={category.id} onClick={() => setActiveCategory(category.id)} className="cursor-pointer">
                <CategoryCard 
                  icon={category.icon} 
                  name={category.name} 
                  active={activeCategory === category.id}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-gray-800">
              {activeCategory === 'all' ? 'Services' : `${categories.find(c => c.id === activeCategory)?.name} Services`}
            </h2>
            <span className="text-sm text-primary">See All</span>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>

        <div className="mt-8 bg-accent/20 rounded-2xl p-4">
          <div className="flex items-start">
            <div className="mr-4">
              <Award size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Earn Paw Points!</h3>
              <p className="text-sm text-gray-600 mt-1">
                Pay with OSCPets Pay and earn rewards for every transaction
              </p>
              <button className="mt-3 px-4 py-2 bg-primary text-white rounded-full text-sm font-medium">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
