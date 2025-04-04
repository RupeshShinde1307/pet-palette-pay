
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { ArrowLeft } from 'lucide-react';

const PersonalInformation = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="px-4 pt-6 pb-20">
        <div className="flex items-center mb-6">
          <button 
            onClick={() => navigate('/profile')}
            className="mr-2 p-2 rounded-full hover:bg-gray-100"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold text-gray-800">Personal Information</h1>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-gray-600 mb-4">
            Manage your personal details and preferences.
          </p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                value="Pet Owner" 
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                value="pet.owner@example.com" 
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input 
                type="tel" 
                value="+91 98765 43210" 
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
              />
            </div>
          </div>
          
          <button className="mt-6 w-full bg-primary text-white py-2 rounded-lg font-medium">
            Edit Information
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default PersonalInformation;
