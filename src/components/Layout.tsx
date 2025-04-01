
import { ReactNode } from 'react';
import BottomNavbar from './BottomNavbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1 pb-16">
        {children}
      </main>
      <BottomNavbar />
    </div>
  );
};

export default Layout;
