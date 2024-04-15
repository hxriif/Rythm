import Homepage from "@/FirstVIew/Homepage";
import Navbar from "@/FirstVIew/Navbar";




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
