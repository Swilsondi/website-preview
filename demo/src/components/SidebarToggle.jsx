import React from 'react';
import { PanelLeft, Menu } from 'lucide-react';
import { useSidebar } from './ui/sidebar';
import { Button } from './ui/button';

const SidebarToggle = () => {
  const { state, toggleSidebar } = useSidebar();
  const isOpen = state === "expanded";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleSidebar}
      className={`
        fixed z-30 transition-all duration-300 ease-in-out
        ${isOpen 
          ? 'top-[5.7rem] left-[14rem] bg-gray-800/70 hover:bg-gray-700' 
          : 'top-[4.5rem] left-4 bg-gray-800/70 hover:bg-gray-700'
        }
        h-9 w-9 rounded-full backdrop-blur-sm border border-gray-700/50 shadow-md
        hover:shadow-lg
      `}
      title={isOpen ? "Close Sidebar" : "Open Sidebar"}
    >
      {isOpen ? (
        <PanelLeft className="h-5 w-5 text-gray-300" />
      ) : (
        <Menu className="h-5 w-5 text-gray-300" />
      )}
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
};

export default SidebarToggle;