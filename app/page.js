import Homepage from "@/components/Homepage";
import Navbar from "@/components/Navbar";




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
