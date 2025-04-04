
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { ArrowLeft, Moon, Globe, Lock } from 'lucide-react';

const Settings = () => {
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
          <h1 className="text-xl font-bold text-gray-800">Settings</h1>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="border-b border-gray-100 p-4">
            <h3 className="font-semibold mb-3">Appearance</h3>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                  <Moon size={18} />
                </div>
                <span className="text-gray-800">Dark Mode</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
          
          <div className="border-b border-gray-100 p-4">
            <h3 className="font-semibold mb-3">Language</h3>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                  <Globe size={18} />
                </div>
                <span className="text-gray-800">English</span>
              </div>
              <select className="bg-gray-100 border border-gray-200 text-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none">
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="mr">Marathi</option>
              </select>
            </div>
          </div>
          
          <div className="p-4">
            <h3 className="font-semibold mb-3">Security</h3>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                  <Lock size={18} />
                </div>
                <span className="text-gray-800">App Lock</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <button className="w-full py-2 text-red-500">
            Clear App Data
          </button>
        </div>
        
        <p className="text-center text-xs text-gray-500 mt-6">
          App Version 1.0.0
        </p>
      </div>
    </Layout>
  );
};

export default Settings;
