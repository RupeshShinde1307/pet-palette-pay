
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { ArrowLeft, Bell } from 'lucide-react';

const NotificationsPage = () => {
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
          <h1 className="text-xl font-bold text-gray-800">Notifications</h1>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
          <p className="text-gray-600 mb-4">
            Manage your notification preferences.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Bell size={18} className="text-primary" />
                </div>
                <span>Payment Updates</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Bell size={18} className="text-primary" />
                </div>
                <span>Service Updates</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Bell size={18} className="text-primary" />
                </div>
                <span>Promotional Messages</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-semibold mb-3">Recent Notifications</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-3 py-1">
              <h4 className="font-medium">Payment Successful</h4>
              <p className="text-sm text-gray-600">Your payment of ₹2,500 was successful.</p>
              <p className="text-xs text-gray-400 mt-1">2 days ago</p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-3 py-1">
              <h4 className="font-medium">Reward Points Added</h4>
              <p className="text-sm text-gray-600">You earned 250 paw points.</p>
              <p className="text-xs text-gray-400 mt-1">1 week ago</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotificationsPage;
