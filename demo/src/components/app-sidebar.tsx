import { Home, Settings, User, Phone, DollarSign, Briefcase } from "lucide-react"
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
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-gray-700 bg-gray-800/95 backdrop-blur-sm">
      <SidebarHeader className="border-b border-gray-700">
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
        <SidebarGroup>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <SidebarGroupLabel className="text-gray-400 font-medium px-2">Navigation</SidebarGroupLabel>
          </motion.div>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.1 * index + 0.5,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className="group transition-all duration-200 hover:bg-gray-700/80 hover:text-white text-gray-300 data-[active=true]:bg-indigo-600 data-[active=true]:text-white"
                      >
                        <item.icon className="transition-transform duration-200 group-hover:scale-110" />
                        <span className="font-medium">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </motion.div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
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