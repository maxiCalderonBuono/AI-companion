"use client"

import { Menu, Sparkles } from "lucide-react"
import Link from "next/link"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import { UserButton } from "@clerk/nextjs"
import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"
import Mobilesidebar from "./mobile-sidebar"



const font = Poppins({
  weight: "600",
  subsets: ["latin"]
})

export const Navbar = () => {
  return (
    <header className="fixed z-50 flex items-center justify-between w-full h-16 px-4 py-2 border-b border-primary/10 bg-secondary">
      <div className="flex items-center">
        <Mobilesidebar />
        <Link href="/"><h1 className={cn("hidden text-xl font-bold md:block md:text-3xl text-yellow-400/95", font.className)}>companion.ai</h1></Link>
      </div>
      <div className="flex items-center gap-x-3">
        <Button size="sm" variant="premium">Upgrade <Sparkles className="w-4 h-4 ml-2 text-white fill-white" /></Button>
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  )
}