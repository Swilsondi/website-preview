import { Home, User, Phone, DollarSign, Briefcase } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { DarkModeToggle } from "@/components/dark-mode-toggle"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "About",
    url: "/about",
    icon: User,
  },
  {
    title: "Services",
    url: "/services",
    icon: Briefcase,
  },
  {
    title: "Pricing",
    url: "/pricing",
    icon: DollarSign,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: Phone,
  },
  {
    title: "Showcase",
    url: "/showcase",
    icon: Briefcase,
  },
]

// Safe router hook that doesn't crash outside Router context
function useSafeLocation() {
  try {
    return useLocation();
  } catch (error) {
    // Return a default location object if useLocation fails (outside Router context)
    return { pathname: window.location.pathname };
  }
}

export function AppSidebar() {
  const location = useSafeLocation();

  // Function to handle link clicks
  const handleLinkClick = (url: string, e: React.MouseEvent) => {
    if (location.pathname === url) {
      e.preventDefault();
    }
  };

  return (
    <Sidebar className="border-r border-gray-700 bg-gray-800/95 backdrop-blur-sm">
      <SidebarHeader className="">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 px-4 py-3"
        >
          <div className="flex flex-col">
            <span className="font-bold text-lg text-white">
              TechMotiveSupreme
            </span>
          </div>
        </motion.div>
      </SidebarHeader>
      <SidebarContent>
        {/* Wrap sidebar items in a <ul> for accessibility */}
        <ul role="menu" className="space-y-2">
          {items.map((item) => (
            <li
              key={item.title}
              data-sidebar="menu-item"
              className="group/menu-item relative"
              role="none"
            >
              <a
                href={item.url}
                className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 text-white"
                onClick={(e) => handleLinkClick(item.url, e)}
                role="menuitem"
                tabIndex={0}
              >
                <item.icon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                <span>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </SidebarContent>
      <SidebarFooter className="border-t border-gray-700">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="p-4 text-center"
        >
          <p className="text-xs text-gray-400">
            © 2025 TechMotiveSupreme
          </p>
        </motion.div>
      </SidebarFooter>
    </Sidebar>
  )
}