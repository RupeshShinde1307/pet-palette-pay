
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { ArrowLeft, Mail, Phone, MessageSquare } from 'lucide-react';

const Support = () => {
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
          <h1 className="text-xl font-bold text-gray-800">Help & Support</h1>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
          <h3 className="font-semibold mb-3">Contact Us</h3>
          
          <div className="space-y-4">
            <div className="flex items-center p-3 border border-gray-200 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <Mail className="text-blue-500 h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium">Email Support</h4>
                <p className="text-sm text-gray-600">support@oscpets.com</p>
              </div>
            </div>
            
            <div className="flex items-center p-3 border border-gray-200 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <Phone className="text-green-500 h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium">Phone Support</h4>
                <p className="text-sm text-gray-600">+91 98765 43210</p>
              </div>
            </div>
            
            <div className="flex items-center p-3 border border-gray-200 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                <MessageSquare className="text-purple-500 h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium">Live Chat</h4>
                <p className="text-sm text-gray-600">Available 9 AM - 6 PM</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
          <h3 className="font-semibold mb-3">FAQs</h3>
          
          <div className="space-y-4">
            <div className="border-b border-gray-100 pb-3">
              <h4 className="font-medium mb-2">How do I reset my password?</h4>
              <p className="text-sm text-gray-600">
                You can reset your password by going to the login screen and tapping on "Forgot Password".
              </p>
            </div>
            
            <div className="border-b border-gray-100 pb-3">
              <h4 className="font-medium mb-2">How do Paw Points work?</h4>
              <p className="text-sm text-gray-600">
                You earn Paw Points with every payment. 1 point is awarded for every ₹10 spent. Points can be redeemed for discounts on future services.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">How can I cancel a payment?</h4>
              <p className="text-sm text-gray-600">
                Contact our support team within 24 hours of making a payment to request a cancellation.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <button className="w-full bg-primary text-white py-2 rounded-lg font-medium">
            Submit a Request
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Support;
