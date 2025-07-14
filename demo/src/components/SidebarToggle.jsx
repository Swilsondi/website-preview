import React from 'react';
import { PanelLeft, Menu } from 'lucide-react';
import { useSidebar } from './ui/sidebar';
import { Button } from './ui/button';
import { useIsMobile } from '../hooks/use-mobile';

const SidebarToggle = () => {
  const { state, toggleSidebar } = useSidebar();
  const isOpen = state === "expanded";
  const isMobile = useIsMobile();

  // Tailwind: top-16 = 64px (navbar), left-2 = 0.5rem, left-[16rem] = 256px (sidebar width)
  // On desktop: md:top-6 md:left-6, md:left-[14rem] when open
  // On mobile: top-16 left-2 when closed, top-16 left-[16rem] when open
  let positionClass = '';
  if (isMobile) {
    positionClass = isOpen ? 'top-16 left-[16rem]' : 'top-16 left-2';
  } else {
    positionClass = isOpen ? 'md:top-6 md:left-[14rem]' : 'md:top-6 md:left-6';
  }

  return (
    <Button
      variant="ghost"
      onClick={toggleSidebar}
      className={`
        fixed z-30 transition-all duration-300 ease-in-out
        h-9 w-9 rounded-full backdrop-blur-sm border border-gray-700/50 shadow-md hover:shadow-lg
        ${positionClass}
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