import Homepage from "@/app/FirstView/Homepage";
import Navbar from "@/app/FirstView/Navbar";




export default function Home() {
  return (
    <>
        <div>
          <div>
          <Navbar/> 
          </div>
          <div className="overflow-y-auto max-h-[470px]" >
            <Homepage/>
          </div>
        </div>
    </>
  );
}
