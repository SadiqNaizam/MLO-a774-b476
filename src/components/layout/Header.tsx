import React from 'react';
import TopHeaderComponent from '../Dashboard/TopHeader';
import { cn } from '@/lib/utils';

interface HeaderProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ isSidebarOpen, onToggleSidebar, className }) => {
  return (
    <TopHeaderComponent
      isSidebarOpen={isSidebarOpen}
      onToggleSidebar={onToggleSidebar}
      className={cn(className)}
    />
  );
};

export default Header;
