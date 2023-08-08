"use client"

import { cn } from "@/lib/utils";
import { Home, Plus, Settings } from "lucide-react";
import { usePathname, useRouter } from "next/navigation"


type SideBar = {
  handleClick?: () => void
}

const SideBar = ({ handleClick }: SideBar) => {


  const pathname = usePathname()
  const router = useRouter()

  const routes = [
    {
      icon: Home,
      href: "/",
      label: "Home",
      pro: false
    },
    {
      icon: Plus,
      href: "/companion/new",
      label: "Create",
      pro: true
    },
    {
      icon: Settings,
      href: "/settings",
      label: "Settings",
      pro: false
    }
  ]

  const onNavigation = (url: string, pro: boolean) => {

    if (handleClick) handleClick()

    return router.push(url)
  }


  return (

    <aside className="flex flex-col h-full space-y-4 text-primary bg-secondary">
      <div className="flex justify-center flex-1 p-3">
        <div className="space-y-2">
          {routes.map(route => (
            <div onClick={() => onNavigation(route.href, route.pro)} key={route.href} className={cn("text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition", pathname === route.href && "bg-primary/10 text-primary")}>
              <div className="flex flex-col items-center flex-1 gap-y-2">
                <route.icon className="w-5 h-5" />
                {route.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>

  );
}

export default SideBar;