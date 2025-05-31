import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(true);

  const toggleSidebar = React.useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  return (
    <div className={cn("min-h-screen bg-background", className)}>
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <Header isSidebarOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />
      
      {/* This div wraps the main content area and adjusts its left margin based on sidebar state */}
      <div 
        className={cn(
          "transition-all duration-300 ease-in-out",
          isSidebarOpen ? "ml-64" : "ml-0"
        )}
      >
        {/* Main content area itself */}
        <main 
          className={cn(
            "min-h-[calc(100vh-4rem)]", // Ensures main takes up height below header (h-16 or 4rem)
            "overflow-y-auto",         // Required for scrollable main content, from overall.sizing.mainContent
            "px-6 py-4",               // Padding from mainContent.layout
            "mt-16"                    // Margin-top from mainContent.layout (due to fixed h-16 header)
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainAppLayout;
