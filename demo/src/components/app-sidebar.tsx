import { Home, User, Phone, DollarSign, Briefcase } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Link, useLocation } from "react-router-dom"

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "About", url: "/about", icon: User },
  { title: "Services", url: "/services", icon: Briefcase },
  { title: "Pricing", url: "/pricing", icon: DollarSign },
  { title: "Contact", url: "/contact", icon: Phone },
  { title: "Showcase", url: "/showcase", icon: Briefcase },
]

function useSafeLocation() {
  try {
    return useLocation();
  } catch {
    return { pathname: window.location.pathname };
  }
}

export function AppSidebar() {
  const location = useSafeLocation();

  return (
    <Sidebar className="border-r border-white/[0.08] bg-black">
      <SidebarHeader>
        <div className="flex items-center gap-3 px-5 py-5 border-b border-white/[0.08]">
          <span className="font-bold text-xl text-white tracking-wide">
            TechMotive
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent className="py-4">
        <ul className="space-y-1 px-3">
          {items.map((item) => {
            const isActive = location.pathname === item.url
            return (
              <li key={item.title}>
                <Link
                  to={item.url}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-colors duration-150 ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-neutral-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </SidebarContent>

      <SidebarFooter className="border-t border-white/[0.08] px-5 py-4">
        <p className="text-sm text-neutral-600">
          © 2025 TechMotiveSupreme
        </p>
      </SidebarFooter>
    </Sidebar>
  )
}
