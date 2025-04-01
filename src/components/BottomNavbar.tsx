
import { Home, Search, FileText, Wallet, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const BottomNavbar = () => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/home' },
    { icon: Search, label: 'Search', path: '/search' },
    { icon: FileText, label: 'Transactions', path: '/transactions' },
    { icon: Wallet, label: 'Wallet', path: '/wallet' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex items-center justify-around px-2 z-10">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        
        return (
          <Link
            key={item.label}
            to={item.path}
            className={`flex flex-col items-center justify-center w-full h-full ${
              isActive ? 'text-primary' : 'text-gray-500'
            }`}
          >
            <Icon size={20} className={`${isActive ? 'animate-bounce-slight' : ''}`} />
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNavbar;
