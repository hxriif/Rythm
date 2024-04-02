import Display from "@/components/Display";
import Navbar from "@/components/Navbar";
import Player from "@/components/Player";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex">
      <Sidebar/>
      <Navbar/>
    </div>
    <div className="sticky z-20 bottom-0  w-full ">
   <Player/>
    </div>
    </>
  );
}
