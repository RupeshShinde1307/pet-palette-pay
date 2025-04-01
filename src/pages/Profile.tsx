
import { User, Settings, Bell, CreditCard, LogOut, HelpCircle, ChevronRight } from 'lucide-react';
import Layout from '../components/Layout';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';

const Profile = () => {
  const menuItems = [
    { icon: <User size={20} />, label: 'Personal Information', path: '/profile/personal' },
    { icon: <Bell size={20} />, label: 'Notifications', path: '/profile/notifications' },
    { icon: <CreditCard size={20} />, label: 'Payment Methods', path: '/profile/payment' },
    { icon: <Settings size={20} />, label: 'Settings', path: '/profile/settings' },
    { icon: <HelpCircle size={20} />, label: 'Help & Support', path: '/profile/support' },
    { icon: <LogOut size={20} className="text-red-500" />, label: 'Logout', path: '/logout', danger: true },
  ];

  return (
    <Layout>
      <div className="px-4 pt-6 pb-20">
        <h1 className="text-xl font-bold text-gray-800 mb-6">Profile</h1>
        
        {/* User Profile Card */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <div className="flex items-center">
            <Avatar className="h-16 w-16 mr-4">
              <AvatarImage src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=150&h=150&fit=crop" />
              <AvatarFallback>PO</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold text-lg">Pet Owner</h2>
              <p className="text-sm text-gray-500">pet.owner@example.com</p>
              <p className="text-sm text-gray-500">+91 98765 43210</p>
            </div>
          </div>
          <button className="mt-4 w-full py-2 border border-primary text-primary rounded-lg text-sm font-medium">
            Edit Profile
          </button>
        </div>
        
        {/* Pet Profile Section */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <h3 className="font-semibold mb-3">My Pets</h3>
          <div className="flex items-center">
            <Avatar className="h-12 w-12 mr-3">
              <AvatarImage src="https://images.unsplash.com/photo-1517423568366-8b83523034fd?w=150&h=150&fit=crop" />
              <AvatarFallback>B</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-medium">Buddy</h4>
              <p className="text-xs text-gray-500">Golden Retriever • 3 years</p>
            </div>
          </div>
          <button className="mt-3 flex items-center justify-center w-full p-2 border border-dashed border-gray-200 rounded-lg text-primary text-sm">
            <Plus size={16} className="mr-1" />
            <span>Add Pet</span>
          </button>
        </div>
        
        {/* Menu Items */}
        <div className="bg-white rounded-xl shadow-sm">
          {menuItems.map((item, index) => (
            <div 
              key={index}
              className={`flex items-center justify-between p-4 ${
                index !== menuItems.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                  item.danger ? 'bg-red-50' : 'bg-gray-100'
                }`}>
                  {item.icon}
                </div>
                <span className={`${item.danger ? 'text-red-500' : 'text-gray-800'}`}>
                  {item.label}
                </span>
              </div>
              <ChevronRight size={18} className="text-gray-400" />
            </div>
          ))}
        </div>
        
        <p className="text-center text-xs text-gray-500 mt-6">
          OSCPets Pay v1.0.0
        </p>
      </div>
    </Layout>
  );
};

export default Profile;
