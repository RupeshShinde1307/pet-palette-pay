
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Award, Gift, ChevronRight } from 'lucide-react';
import Layout from '../components/Layout';

const Rewards = () => {
  const navigate = useNavigate();

  const rewardItems = [
    { name: 'Free Basic Grooming', points: 500, progress: 195 },
    { name: '25% Off Next Vet Visit', points: 300, progress: 195 },
    { name: 'Pet Toy Bundle', points: 200, progress: 195 },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 p-4 pb-20">
        <div className="flex items-center mb-6">
          <button 
            onClick={() => navigate('/home')}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mr-4"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold text-gray-800">Paw Rewards</h1>
        </div>
        
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-5 text-white mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-white/80 text-sm">Available Points</p>
              <h2 className="text-3xl font-bold">195</h2>
            </div>
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
              <Award size={28} />
            </div>
          </div>
          
          <p className="text-sm text-white/90 mb-2">Recent Activity</p>
          <div className="bg-white/10 rounded-lg p-3 mb-1">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Pawsome Grooming</p>
                <p className="text-xs text-white/80">Today, 11:30 AM</p>
              </div>
              <p className="font-medium">+95 pts</p>
            </div>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Pet Supplies Plus</p>
                <p className="text-xs text-white/80">Sep 10, 3:15 PM</p>
              </div>
              <p className="font-medium">+100 pts</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-gray-800">Rewards for Your Pet</h2>
            <span className="text-sm text-primary">See All</span>
          </div>
          
          <div className="space-y-4">
            {rewardItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/30 rounded-full flex items-center justify-center text-primary mr-3">
                    <Gift size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <span className="text-sm text-gray-500">{item.points} pts</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                      <div 
                        className="bg-primary h-2.5 rounded-full" 
                        style={{ width: `${(item.progress / item.points) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">{item.progress} points</span>
                      <span className="text-gray-500">{item.points} points</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-secondary/50 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Award size={20} className="text-primary mr-2" />
              <span className="font-medium text-gray-800">Ways to Earn More</span>
            </div>
            <ChevronRight size={18} className="text-gray-400" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Rewards;
