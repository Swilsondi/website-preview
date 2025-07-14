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
      onClick={toggleSidebar}
      className={`
        fixed z-30 transition-all duration-300 ease-in-out
        top-16 left-2 md:top-6 md:left-6
        ${isOpen ? 'md:left-[14rem] left-[70vw]' : ''}
        h-9 w-9 rounded-full backdrop-blur-sm border border-gray-700/50 shadow-md hover:shadow-lg
      `}
      title={isOpen ? "Close Sidebar" : "Open Sidebar"}
      style={{
        // On mobile, push the button to the right of the sidebar when open
        left: isOpen && window.innerWidth < 768 ? '16rem' : undefined
      }}
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