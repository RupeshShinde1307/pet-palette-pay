
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import Layout from '../components/Layout';
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Moon, Globe, Lock } from 'lucide-react';
import { useTheme } from '../contexts/ThemeProvider';

const Settings = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();

  const handleThemeChange = (checked: boolean) => {
    const newTheme = checked ? 'dark' : 'light';
    setTheme(newTheme);
    toast({
      title: `${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} mode activated`,
      description: `App theme has been changed to ${newTheme} mode.`,
    });
  };

  return (
    <Layout>
      <div className="px-4 pt-6 pb-20 dark:bg-gray-900 dark:text-white">
        <div className="flex items-center mb-6">
          <button 
            onClick={() => navigate('/profile')}
            className="mr-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">Settings</h1>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm mb-6">
          <div className="border-b border-gray-100 dark:border-gray-700 p-4">
            <h3 className="font-semibold mb-3 dark:text-white">Appearance</h3>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3">
                  <Moon size={18} className="dark:text-primary" />
                </div>
                <span className="text-gray-800 dark:text-white">Dark Mode</span>
              </div>
              <Switch 
                checked={theme === 'dark'}
                onCheckedChange={handleThemeChange}
              />
            </div>
          </div>
          
          <div className="border-b border-gray-100 dark:border-gray-700 p-4">
            <h3 className="font-semibold mb-3 dark:text-white">Language</h3>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3">
                  <Globe size={18} />
                </div>
                <span className="text-gray-800 dark:text-white">English</span>
              </div>
              <select className="bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-white rounded-md px-3 py-2 text-sm focus:outline-none">
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="mr">Marathi</option>
              </select>
            </div>
          </div>
          
          <div className="p-4">
            <h3 className="font-semibold mb-3 dark:text-white">Security</h3>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3">
                  <Lock size={18} />
                </div>
                <span className="text-gray-800 dark:text-white">App Lock</span>
              </div>
              <Switch />
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
          <button className="w-full py-2 text-red-500">
            Clear App Data
          </button>
        </div>
        
        <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-6">
          App Version 1.0.0
        </p>
      </div>
    </Layout>
  );
};

export default Settings;
