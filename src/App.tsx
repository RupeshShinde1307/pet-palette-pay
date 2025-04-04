
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeProvider";
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
import PersonalInformation from "./pages/PersonalInformation";
import NotificationsPage from "./pages/NotificationsPage";
import PaymentMethods from "./pages/PaymentMethods";
import Settings from "./pages/Settings";
import Support from "./pages/Support";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
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
            <Route path="/profile/personal" element={<PersonalInformation />} />
            <Route path="/profile/notifications" element={<NotificationsPage />} />
            <Route path="/profile/payment" element={<PaymentMethods />} />
            <Route path="/profile/settings" element={<Settings />} />
            <Route path="/profile/support" element={<Support />} />
            <Route path="/service/:id" element={<ServiceDetails />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
