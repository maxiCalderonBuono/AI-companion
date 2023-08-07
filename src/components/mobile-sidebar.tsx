import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet"
import SideBar from "./sidebar";




const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="pr-4 md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="w-32 p-0 pt-10 bg-secondary">
        <SheetClose>
          <SideBar />
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}

export default MobileSidebar;