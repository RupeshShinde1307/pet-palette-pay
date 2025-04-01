
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import CategoryCard from '../components/CategoryCard';
import ServiceCard from '../components/ServiceCard';
import PawLoader from '../components/PawLoader';
import { Scissors, ShoppingBag, Stethoscope, Dumbbell, Award, PawPrint } from 'lucide-react';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { icon: <Scissors />, name: 'Grooming' },
    { icon: <ShoppingBag />, name: 'Pet Shops' },
    { icon: <Stethoscope />, name: 'Veterinary' },
    { icon: <Dumbbell />, name: 'Training' },
  ];

  const featuredServices = [
    {
      id: '1',
      name: 'Pawsome Grooming',
      image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=500&h=350&fit=crop',
      category: 'Grooming',
      rating: 4.8,
      location: '2.5 miles away',
    },
    {
      id: '2',
      name: 'Vet Care Center',
      image: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369?w=500&h=350&fit=crop',
      category: 'Veterinary',
      rating: 4.9,
      location: '1.8 miles away',
    },
    {
      id: '3',
      name: 'Pet Supplies Plus',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&h=350&fit=crop',
      category: 'Pet Shop',
      rating: 4.6,
      location: '3.2 miles away',
    },
  ];

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
          <div className="grid grid-cols-4 gap-3">
            {categories.map((category, index) => (
              <CategoryCard key={index} icon={category.icon} name={category.name} />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-gray-800">Featured Services</h2>
            <span className="text-sm text-primary">See All</span>
          </div>
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
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
