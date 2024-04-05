import About from "@/components/About";
import Homepage from "@/components/Homepage";
import Navbar from "@/components/Navbar";
import Player from "@/components/Player";
import Sidebar from "@/components/Sidebar";



export default function Home() {
  return (
    <>
        <div>
          <div className="" >
          <Navbar /> 
          </div>
          <div className="overflow-y-auto max-h-[470px]" >
            <Homepage/>
          </div>
        </div>
    </>
  );
}
