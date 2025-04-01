
import { useState } from 'react';
import { Search as SearchIcon, MapPin, Star } from 'lucide-react';
import Layout from '../components/Layout';
import { Input } from '../components/ui/input';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const searchResults = [
    { 
      id: 1, 
      name: 'Pawsome Grooming',
      category: 'Grooming',
      distance: '2.5 miles away',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=500&h=350&fit=crop'
    },
    { 
      id: 2, 
      name: 'Vet Care Center',
      category: 'Veterinary',
      distance: '1.8 miles away',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369?w=500&h=350&fit=crop'
    },
    { 
      id: 3, 
      name: 'Pet Supplies Plus',
      category: 'Pet Shop',
      distance: '3.2 miles away',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&h=350&fit=crop'
    },
  ];

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
              className="px-4 py-2 rounded-full text-sm whitespace-nowrap border border-gray-200 bg-white"
            >
              {category}
            </button>
          ))}
        </div>
        
        {searchResults.map((result) => (
          <div key={result.id} className="mb-4 bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="h-40 overflow-hidden">
              <img 
                src={result.image} 
                alt={result.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">{result.name}</h3>
              <div className="flex items-center mt-1 mb-2">
                <span className="text-xs px-2 py-1 bg-secondary rounded-full mr-2">
                  {result.category}
                </span>
                <div className="flex items-center text-sm text-gray-500">
                  <Star size={14} className="text-yellow-400 mr-1" fill="#FBBF24" />
                  <span>{result.rating}</span>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin size={14} className="mr-1" />
                <span>{result.distance}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Search;
