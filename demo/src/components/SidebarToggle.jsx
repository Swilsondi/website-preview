import React from 'react';
import { PanelLeft, Menu } from 'lucide-react';
import { useSidebar } from './ui/sidebar';
import { Button } from './ui/button';

const SidebarToggle = () => {
  const { state, toggleSidebar } = useSidebar();
  const isOpen = state === "expanded";

  // On mobile: always top-16 left-2
  // On desktop: top-6 md:left-6 when closed, md:left-[14rem] when open
  const desktopLeftClass = isOpen ? 'md:left-[14rem]' : 'md:left-6';

  return (
    <Button
      variant="ghost"
      onClick={toggleSidebar}
      className={`fixed z-30 transition-all duration-300 ease-in-out h-9 w-9 rounded-full backdrop-blur-sm border border-gray-700/50 shadow-md hover:shadow-lg top-16 left-2 ${desktopLeftClass}`}
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