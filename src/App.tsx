
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Transactions from "./pages/Transactions";
import Wallet from "./pages/Wallet";
import Profile from "./pages/Profile";
import ServiceDetails from "./pages/ServiceDetails";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";
import Rewards from "./pages/Rewards";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
