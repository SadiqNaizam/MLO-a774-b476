import React from 'react';
import SidebarNav from '../Dashboard/SidebarNav';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isSidebarOpen: boolean;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, className }) => {
  return (
    <SidebarNav
      className={cn(
        'transition-transform duration-300 ease-in-out',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
        className
      )}
    />
  );
};

export default Sidebar;
