
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SuccessAnimation from '../components/SuccessAnimation';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/rewards');
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white">
      <SuccessAnimation 
        message="Payment Successful!" 
        subMessage="You earned 95 Paw Points for your next pet visit!"
      />
    </div>
  );
};

export default PaymentSuccess;
