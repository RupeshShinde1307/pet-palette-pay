
import { useState } from 'react';
import { ChevronRight, Gift, Award, Star, Calendar, Clipboard, Plus } from 'lucide-react';
import Layout from '../components/Layout';
import { Progress } from '../components/ui/progress';
import { Card, CardContent } from '../components/ui/card';

const Rewards = () => {
  const [points, setPoints] = useState(95);
  const [nextReward, setNextReward] = useState(200);
  
  const rewardHistory = [
    { id: 1, date: 'Apr 10, 2023', service: 'Pawsome Grooming', points: 95, status: 'Earned' },
    { id: 2, date: 'Mar 28, 2023', service: 'Pet Supplies Plus', points: 50, status: 'Earned' },
    { id: 3, date: 'Mar 15, 2023', service: 'Premium Pet Grooming', points: 100, status: 'Redeemed' },
  ];
  
  const availableRewards = [
    { id: 1, name: 'Free Pet Bath', points: 200, icon: <Gift size={20} /> },
    { id: 2, name: '20% Off Next Visit', points: 150, icon: <Star size={20} /> },
    { id: 3, name: 'Premium Pet Toy', points: 300, icon: <Award size={20} /> },
  ];

  const progressPercentage = Math.min(Math.round((points / nextReward) * 100), 100);

  return (
    <Layout>
      <div className="px-4 pt-6 pb-20">
        <h1 className="text-xl font-bold text-gray-800 mb-1">Paw Points Rewards</h1>
        <p className="text-sm text-gray-500 mb-6">Earn and redeem rewards for pet services</p>
        
        {/* Points Summary Card */}
        <Card className="mb-6 overflow-hidden border-none shadow-md">
          <div className="bg-gradient-to-r from-primary to-primary/80 p-4 text-white">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">Available Points</h3>
                <p className="text-3xl font-bold mt-1">{points}</p>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Award size={24} className="text-white" />
              </div>
            </div>
          </div>
          <CardContent className="p-4">
            <div className="mb-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">Next Reward: {nextReward} Points</span>
                <span className="text-sm text-primary font-medium">{progressPercentage}%</span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>
            <p className="text-xs text-gray-500">
              Earn more points by paying with OSCPets Pay
            </p>
          </CardContent>
        </Card>
        
        {/* Available Rewards */}
        <div className="mb-6">
          <h2 className="font-semibold text-gray-800 mb-3">Available Rewards</h2>
          <div className="space-y-3">
            {availableRewards.map((reward) => (
              <div 
                key={reward.id} 
                className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-3">
                    {reward.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{reward.name}</h3>
                    <p className="text-xs text-gray-500">{reward.points} Points</p>
                  </div>
                </div>
                <button 
                  className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                    points >= reward.points 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 text-gray-400'
                  }`}
                  disabled={points < reward.points}
                >
                  {points >= reward.points ? 'Redeem' : 'Locked'}
                </button>
              </div>
            ))}
            
            <button className="flex items-center justify-center w-full p-3 border border-dashed border-gray-200 rounded-xl text-primary">
              <Plus size={18} className="mr-2" />
              <span>Find More Rewards</span>
            </button>
          </div>
        </div>
        
        {/* Points History */}
        <div>
          <h2 className="font-semibold text-gray-800 mb-3">Points History</h2>
          <div className="space-y-3">
            {rewardHistory.map((item) => (
              <div 
                key={item.id} 
                className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm"
              >
                <div className="flex items-start">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                    item.status === 'Earned' ? 'bg-green-100' : 'bg-orange-100'
                  }`}>
                    {item.status === 'Earned' 
                      ? <Plus size={20} className="text-green-600" /> 
                      : <Clipboard size={20} className="text-orange-600" />
                    }
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{item.service}</h3>
                    <div className="flex items-center mt-1">
                      <Calendar size={12} className="text-gray-400 mr-1" />
                      <p className="text-xs text-gray-500">{item.date}</p>
                    </div>
                  </div>
                </div>
                <div className={`text-sm font-medium ${
                  item.status === 'Earned' ? 'text-green-600' : 'text-orange-600'
                }`}>
                  {item.status === 'Earned' ? '+' : '-'}{item.points}
                </div>
              </div>
            ))}
            
            <button className="flex items-center justify-center w-full p-3 text-primary text-sm">
              <span className="mr-1">View All History</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Rewards;
