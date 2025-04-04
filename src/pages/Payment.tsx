
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Wallet, Smartphone, PlusCircle, ChevronRight, Calculator, IndianRupee } from 'lucide-react';
import Layout from '../components/Layout';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../components/ui/form";
import { useForm } from "react-hook-form";
import { Button } from "../components/ui/button";
import { toast } from "../hooks/use-toast";

const Payment = () => {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const [discountedAmount, setDiscountedAmount] = useState(0);
  const [isConfirmed, setIsConfirmed] = useState(false);
  
  const form = useForm({
    defaultValues: {
      amount: "",
      paymentMethod: "card"
    }
  });

  const paymentOptions = [
    { id: 'card', name: 'Credit Card', icon: CreditCard, label: '**** 1234' },
    { id: 'wallet', name: 'OSCPets Wallet', icon: Wallet, label: 'Balance: ₹9,500' },
    { id: 'mobile', name: 'Mobile Payment', icon: Smartphone, label: 'UPI/GPay/PhonePe' },
  ];

  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setAmount(value);
    // Calculate 10% discount
    setDiscountedAmount(value * 0.9);
  };

  const handleConfirm = () => {
    if (amount <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid payment amount",
        variant: "destructive"
      });
      return;
    }
    
    setIsConfirmed(true);
    setIsCalculatorOpen(false);
  };

  const handlePayWithOSCPets = () => {
    toast({
      title: "Processing payment",
      description: `Processing ₹${discountedAmount.toFixed(2)} with OSCPets`,
    });
    
    // Simulate payment processing
    setTimeout(() => {
      navigate('/payment-success');
    }, 1500);
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
          />
        </div>
        
        {/* Custom Payment Section */}
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-5">
          <h2 className="font-semibold text-gray-800 mb-3">Custom Payment</h2>
          <p className="text-sm text-gray-600 mb-4">
            Enter a custom payment amount and get 10% discount on your transaction.
          </p>
          <button 
            className="w-full py-2 flex items-center justify-center bg-primary/10 text-primary rounded-lg text-sm"
            onClick={() => {
              setIsCalculatorOpen(true);
              setIsConfirmed(false);
            }}
          >
            <Calculator size={16} className="mr-2" />
            Enter Payment Amount
          </button>
        </div>
        
        {/* Custom Payment Confirmed Box */}
        {isConfirmed && amount > 0 && (
          <div className="bg-green-50 rounded-2xl shadow-sm p-4 mb-5">
            <h2 className="font-semibold text-gray-800 mb-3">Custom Payment</h2>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Original Amount</span>
              <div className="flex items-center">
                <IndianRupee size={14} className="mr-1" />
                <span>{amount.toFixed(2)}</span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-2 text-green-600">
              <span>Discount (10%)</span>
              <div className="flex items-center">
                <span>-</span>
                <IndianRupee size={14} className="mx-1" />
                <span>{(amount * 0.1).toFixed(2)}</span>
              </div>
            </div>
            <div className="flex justify-between items-center font-semibold border-t border-green-200 pt-2 mt-2">
              <span>Final Amount</span>
              <div className="flex items-center">
                <IndianRupee size={14} className="mr-1" />
                <span>{discountedAmount.toFixed(2)}</span>
              </div>
            </div>
            <Button 
              className="mt-3 w-full bg-green-600 hover:bg-green-700"
              onClick={handlePayWithOSCPets}
            >
              <Wallet size={16} className="mr-2" />
              Pay with OSCPets
            </Button>
          </div>
        )}
        
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
              <p className="font-medium text-gray-800">Earn Paw Points on Your Payment</p>
              <p className="text-sm text-gray-600">
                Complete this payment and earn points for future discounts!
              </p>
            </div>
          </div>
        </div>
        
        <button 
          className="pet-button paw-effect w-full py-4 flex items-center justify-center"
          onClick={() => {
            if (isConfirmed && amount > 0) {
              handlePayWithOSCPets();
            } else {
              setIsCalculatorOpen(true);
            }
          }}
        >
          {isConfirmed && amount > 0 ? (
            <span className="mr-2 flex items-center">
              Pay <IndianRupee size={16} className="mx-1" />
              {discountedAmount.toFixed(2)}
            </span>
          ) : (
            <span className="mr-2">Enter Payment Amount</span>
          )}
          <ChevronRight size={18} />
        </button>

        {/* Payment Calculator Dialog */}
        <Dialog open={isCalculatorOpen} onOpenChange={setIsCalculatorOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center">Custom Payment Amount</DialogTitle>
              <DialogDescription className="text-center text-sm text-gray-500">
                Enter your payment amount below to get a 10% discount
              </DialogDescription>
            </DialogHeader>
            
            <div className="py-4">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Enter Payment Amount (₹)
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
                    <div className="flex items-center font-medium">
                      <IndianRupee size={14} className="mr-1" />
                      <span>{amount.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-green-600">Discount (10%):</span>
                    <div className="flex items-center font-medium text-green-600">
                      <span>-</span>
                      <IndianRupee size={14} className="mx-1" />
                      <span>{(amount * 0.1).toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="flex justify-between font-semibold mt-2 pt-2 border-t border-green-200">
                    <span>You Pay:</span>
                    <div className="flex items-center">
                      <IndianRupee size={14} className="mr-1" />
                      <span>{discountedAmount.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="mt-6 space-y-2">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Select Payment Method</h3>
                <Form {...form}>
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
                        <label htmlFor={option.id} className="flex-1 cursor-pointer">
                          <div className="flex items-center">
                            <option.icon size={16} className="mr-2" />
                            <span>{option.name}</span>
                          </div>
                        </label>
                      </div>
                    ))}
                  </RadioGroup>
                </Form>
              </div>
              
              <button 
                className="mt-6 w-full bg-primary text-white py-3 rounded-lg font-medium"
                onClick={handleConfirm}
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
