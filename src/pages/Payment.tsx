
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Wallet, Smartphone, PlusCircle, ChevronRight, Calculator } from 'lucide-react';
import Layout from '../components/Layout';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../components/ui/form";
import { useForm } from "react-hook-form";

const Payment = () => {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const [discountedAmount, setDiscountedAmount] = useState(0);
  
  const form = useForm({
    defaultValues: {
      amount: "",
      paymentMethod: "card"
    }
  });

  const paymentOptions = [
    { id: 'card', name: 'Credit Card', icon: CreditCard, label: '**** 1234' },
    { id: 'wallet', name: 'OSCPets Wallet', icon: Wallet, label: 'Balance: $120' },
    { id: 'mobile', name: 'Mobile Payment', icon: Smartphone, label: 'Apple/Google Pay' },
  ];

  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setAmount(value);
    // Calculate 10% discount
    setDiscountedAmount(value * 0.9);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 p-4 pb-20">
        <div className="flex items-center mb-6">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mr-4"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold text-gray-800">Payment</h1>
        </div>
        
        {/* OSCPets Pay Logo */}
        <div className="flex justify-center mb-6">
          <img 
            src="/lovable-uploads/673ae4f3-96af-4735-b06d-e5379afb05d1.png"
            alt="OSCPets Pay Logo" 
            className="h-16"
            onClick={() => setIsCalculatorOpen(true)}
          />
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-5">
          <h2 className="font-semibold text-gray-800 mb-3">Order Summary</h2>
          <div className="border-b border-gray-100 pb-3 mb-3">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Basic Grooming</span>
              <span>$30.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Spa Treatment</span>
              <span>$75.00</span>
            </div>
            <div className="flex justify-between text-sm text-green-600">
              <span>First Visit Discount</span>
              <span>-$10.00</span>
            </div>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>$95.00</span>
          </div>
          <button 
            className="mt-3 w-full py-2 flex items-center justify-center bg-primary/10 text-primary rounded-lg text-sm"
            onClick={() => setIsCalculatorOpen(true)}
          >
            <Calculator size={16} className="mr-2" />
            Custom Payment Amount
          </button>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-6">
          <h2 className="font-semibold text-gray-800 mb-3">Payment Method</h2>
          <div className="space-y-3">
            {paymentOptions.map((option) => {
              const Icon = option.icon;
              return (
                <div 
                  key={option.id}
                  className={`flex items-center p-3 border rounded-xl ${
                    selectedPayment === option.id 
                      ? 'border-primary bg-primary/5' 
                      : 'border-gray-200'
                  }`}
                  onClick={() => setSelectedPayment(option.id)}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    selectedPayment === option.id ? 'bg-primary text-white' : 'bg-gray-100'
                  }`}>
                    <Icon size={20} />
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="font-medium text-gray-800">{option.name}</p>
                    <p className="text-xs text-gray-500">{option.label}</p>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center
                    ${selectedPayment === option.id ? 'border-primary' : 'border-gray-300'}">
                    {selectedPayment === option.id && (
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                    )}
                  </div>
                </div>
              );
            })}
            
            <button className="flex items-center w-full p-3 border border-dashed border-gray-200 rounded-xl text-gray-500">
              <PlusCircle size={20} className="mr-2" />
              <span>Add Payment Method</span>
            </button>
          </div>
        </div>
        
        <div className="bg-secondary/50 rounded-xl p-4 mb-8">
          <div className="flex items-start">
            <Wallet size={20} className="text-primary mr-2 mt-0.5" />
            <div>
              <p className="font-medium text-gray-800">Earn 95 Paw Points</p>
              <p className="text-sm text-gray-600">
                Complete this payment and earn points for future discounts!
              </p>
            </div>
          </div>
        </div>
        
        <button 
          className="pet-button paw-effect w-full py-4 flex items-center justify-center"
          onClick={() => navigate('/payment-success')}
        >
          <span className="mr-2">Pay {isCalculatorOpen && amount > 0 ? `$${discountedAmount.toFixed(2)}` : '$95.00'}</span>
          <ChevronRight size={18} />
        </button>

        {/* Payment Calculator Dialog */}
        <Dialog open={isCalculatorOpen} onOpenChange={setIsCalculatorOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center">Custom Payment Amount</DialogTitle>
            </DialogHeader>
            
            <div className="py-4">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Enter Payment Amount
                </label>
                <Input
                  type="number"
                  placeholder="0.00"
                  value={amount || ""}
                  onChange={handleAmountChange}
                  className="text-xl font-semibold"
                />
              </div>
              
              {amount > 0 && (
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Original Amount:</span>
                    <span className="font-medium">${amount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-green-600">Discount (10%):</span>
                    <span className="font-medium text-green-600">-${(amount * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-semibold mt-2 pt-2 border-t border-green-200">
                    <span>You Pay:</span>
                    <span>${discountedAmount.toFixed(2)}</span>
                  </div>
                </div>
              )}
              
              <div className="mt-6 space-y-2">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Select Payment Method</h3>
                <RadioGroup 
                  defaultValue={selectedPayment}
                  onValueChange={setSelectedPayment}
                  className="space-y-2"
                >
                  {paymentOptions.map((option) => (
                    <div 
                      key={option.id}
                      className="flex items-center p-3 border rounded-lg"
                    >
                      <RadioGroupItem value={option.id} id={option.id} className="mr-3" />
                      <FormLabel htmlFor={option.id} className="flex-1 cursor-pointer">
                        <div className="flex items-center">
                          <option.icon size={16} className="mr-2" />
                          <span>{option.name}</span>
                        </div>
                      </FormLabel>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              
              <button 
                className="mt-6 w-full bg-primary text-white py-3 rounded-lg font-medium"
                onClick={() => setIsCalculatorOpen(false)}
              >
                Confirm
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
};

export default Payment;
