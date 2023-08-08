"use client"

import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet"
import SideBar from "./sidebar";
import { useState } from "react";

const MobileSidebar = () => {
  const [open, setOpen] = useState(false);


  return (
    <Sheet open={open} onOpenChange={setOpen} >
      <SheetTrigger className="pr-4 md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="w-32 p-0 pt-10 bg-secondary">
        <SideBar handleClick={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  );
}

export default MobileSidebar;


