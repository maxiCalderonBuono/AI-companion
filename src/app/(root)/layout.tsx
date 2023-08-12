
import { Navbar } from "@/components/navbar";
import SideBar from "@/components/sidebar";


const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <div className="fixed inset-y-0 flex-col hidden w-20 mt-16 bg-red-500 md:flex">
        <SideBar />
      </div>
      <main className="w-full h-full pt-16 md:pl-20">
        {children}
      </main>
    </div>);
}

export default RootLayout;