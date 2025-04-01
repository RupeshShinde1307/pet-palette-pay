
import { CalendarDays, ArrowDown, ArrowUp } from 'lucide-react';
import Layout from '../components/Layout';

const Transactions = () => {
  const transactions = [
    { 
      id: 1, 
      date: 'May 15, 2023',
      merchant: 'Pawsome Grooming',
      amount: 550,
      type: 'debit',
      category: 'Grooming'
    },
    { 
      id: 2, 
      date: 'May 10, 2023',
      merchant: 'Vet Care Center',
      amount: 1200,
      type: 'debit',
      category: 'Veterinary'
    },
    { 
      id: 3, 
      date: 'May 5, 2023',
      merchant: 'Pet Supplies Plus',
      amount: 800,
      type: 'debit',
      category: 'Pet Shop'
    },
    { 
      id: 4, 
      date: 'May 2, 2023',
      merchant: 'Added to Wallet',
      amount: 2000,
      type: 'credit',
      category: 'Top Up'
    },
  ];

  return (
    <Layout>
      <div className="px-4 pt-6 pb-20">
        <h1 className="text-xl font-bold text-gray-800 mb-1">Transactions</h1>
        <p className="text-sm text-gray-500 mb-6">View your payment history</p>
        
        <div className="flex gap-3 mb-6 overflow-x-auto pb-1">
          {['All', 'This Week', 'This Month', 'Last Month'].map((period) => (
            <button
              key={period}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap 
                ${period === 'All' 
                  ? 'bg-primary text-white' 
                  : 'border border-gray-200 bg-white text-gray-700'
                }`}
            >
              {period}
            </button>
          ))}
        </div>
        
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div 
              key={transaction.id} 
              className="p-4 bg-white rounded-xl shadow-sm flex items-center justify-between"
            >
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                  transaction.type === 'debit' ? 'bg-red-100' : 'bg-green-100'
                }`}>
                  {transaction.type === 'debit' 
                    ? <ArrowUp size={20} className="text-red-600" /> 
                    : <ArrowDown size={20} className="text-green-600" />
                  }
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">{transaction.merchant}</h3>
                  <div className="flex items-center mt-1">
                    <CalendarDays size={12} className="text-gray-400 mr-1" />
                    <p className="text-xs text-gray-500">{transaction.date}</p>
                  </div>
                </div>
              </div>
              <div className={`text-base font-medium ${
                transaction.type === 'debit' 
                  ? 'text-red-600' 
                  : 'text-green-600'
              }`}>
                {transaction.type === 'debit' ? '-' : '+'}₹{transaction.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Transactions;
