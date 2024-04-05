import Navbar from "@/components/Navbar";
import Player from "@/components/Player";
import Sidebar from "@/components/Sidebar";



export default function Home() {
  return (
    <>
    <div className="flex h-screen ">
      <Navbar/>
    </div>
    <div className="sticky z-20 bottom-0  w-full   ">
   {/* <Player/> */}
    </div>
    </>
  );
}
