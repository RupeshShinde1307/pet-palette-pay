
import { useState } from 'react';
import { Wallet as WalletIcon, CreditCard, Banknote, Plus } from 'lucide-react';
import Layout from '../components/Layout';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';

const Wallet = () => {
  const [balance, setBalance] = useState(1200);
  const [topupAmount, setTopupAmount] = useState('');

  const presetAmounts = [500, 1000, 2000, 5000];

  const handleTopup = () => {
    const amount = parseInt(topupAmount);
    if (!isNaN(amount) && amount > 0) {
      setBalance(balance + amount);
      setTopupAmount('');
      // Here you would typically handle a real payment
      alert(`Successfully added ₹${amount} to your wallet!`);
    }
  };

  return (
    <Layout>
      <div className="px-4 pt-6 pb-20">
        <h1 className="text-xl font-bold text-gray-800 mb-1">OSCPets Wallet</h1>
        <p className="text-sm text-gray-500 mb-6">Manage your payments</p>
        
        {/* Balance Card */}
        <Card className="mb-6 overflow-hidden border-none shadow-md">
          <div className="bg-gradient-to-r from-primary to-primary/80 p-4 text-white">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">Available Balance</h3>
                <p className="text-3xl font-bold mt-1">₹{balance}</p>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <WalletIcon size={24} className="text-white" />
              </div>
            </div>
          </div>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-gray-500">Last topped up on May 2, 2023</span>
            </div>
          </CardContent>
        </Card>
        
        {/* Add Money Section */}
        <div className="mb-6">
          <h2 className="font-semibold text-gray-800 mb-3">Add Money</h2>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <Input
              type="number"
              placeholder="Enter amount in ₹"
              value={topupAmount}
              onChange={(e) => setTopupAmount(e.target.value)}
              className="mb-3"
            />
            
            <div className="grid grid-cols-2 gap-2 mb-4">
              {presetAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setTopupAmount(amount.toString())}
                  className="px-3 py-2 border border-gray-200 rounded-lg text-sm"
                >
                  ₹{amount}
                </button>
              ))}
            </div>
            
            <button 
              onClick={handleTopup}
              className="w-full py-3 bg-primary text-white rounded-lg font-medium"
            >
              Add Money
            </button>
          </div>
        </div>
        
        {/* Payment Methods */}
        <div>
          <h2 className="font-semibold text-gray-800 mb-3">Payment Methods</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <CreditCard size={20} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Debit/Credit Card</h3>
                  <p className="text-xs text-gray-500">Link your cards securely</p>
                </div>
              </div>
              <button className="text-primary">Add</button>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <Banknote size={20} className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">UPI</h3>
                  <p className="text-xs text-gray-500">Pay directly from your bank</p>
                </div>
              </div>
              <button className="text-primary">Add</button>
            </div>
            
            <button className="flex items-center justify-center w-full p-3 border border-dashed border-gray-200 rounded-xl text-primary">
              <Plus size={18} className="mr-2" />
              <span>Add New Payment Method</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Wallet;
