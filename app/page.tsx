import Image from "next/image";
import Sidebar from "./components/layout/Sidebar";
import StepCard from "./components/ui/StepCard";
import Button from "./components/ui/Button";
import ProcessSection from "./components/layout/ProcessSection";
import HeroSection from "./components/layout/HeroSection";




const pointsData = [

]
export default function Home() {
  return (
    <div className="flex min-h-full">
      <div className="">
        <Sidebar />
      </div>

      <div className="">
        <HeroSection />

       <ProcessSection />

        <div className="bg-[#dee7f1] mt-12 w-full h-[40rem]">
          <div className='w-[90%] m-auto pt-5'>
          <h1 className='' >POINT BREAKDOWN</h1>
          </div>
          
        </div>
      </div>
    </div>
  );
}
