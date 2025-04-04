
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { ArrowLeft, CreditCard, Plus } from 'lucide-react';

const PaymentMethods = () => {
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
          <h1 className="text-xl font-bold text-gray-800">Payment Methods</h1>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
          <p className="text-gray-600 mb-4">
            Manage your payment methods for quick checkout.
          </p>
          
          <div className="border border-gray-200 rounded-lg p-3 mb-3 relative">
            <div className="absolute top-3 right-3 px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
              Default
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                <CreditCard className="text-blue-500" />
              </div>
              <div>
                <h3 className="font-medium">•••• •••• •••• 4242</h3>
                <p className="text-xs text-gray-500">Expires 12/25</p>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-3 mb-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-purple-100 rounded-md flex items-center justify-center mr-3">
                <CreditCard className="text-purple-500" />
              </div>
              <div>
                <h3 className="font-medium">•••• •••• •••• 8456</h3>
                <p className="text-xs text-gray-500">Expires 08/27</p>
              </div>
            </div>
          </div>
          
          <button className="w-full py-2 flex items-center justify-center border border-dashed border-gray-300 rounded-lg text-primary">
            <Plus size={18} className="mr-2" />
            Add Payment Method
          </button>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-semibold mb-3">Payment Preferences</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Save Payment Methods</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Payment Confirmation</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentMethods;
