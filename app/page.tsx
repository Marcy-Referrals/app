import Image from "next/image";
import Sidebar from "./components/layout/Sidebar";
import StepCard from "./components/ui/StepCard";

const processData = [
  {
    title: "SUBMIT YOUR REFERAL",
    body: `Fill out the referral form here to start the process. You'll
            be directed to a simple form where you can enter the details
            of the person you'd like to refer to the Marcy Lab School
            Fellowship.`,
    color: "red",
    img: "/marcy2.png",
    step: 1,
  },

  {
    title: "LEVEL UP YOUR REFERAL",
    body: `Sharing a prospect’s LinkedIn profile is highly encouraged. This simple step helps us get a sense of who the prospect is and how they might fit into our program.
Additionally, while optional, uploading a resume is also encouraged. This can help streamline the process by providing a more detailed look at their qualifications.`,
    color: "#f8bac9",
    img: "/marcy4.jpg",
    step: 2,
  },

  {
    title: "EARN POINTS",
    body: `You earn points by referring prospects to the Marcy Lab School as they move through different stages, such as scheduling a tour, completing an application, or becoming a fellow. These points can then be exchanged for rewards as you accumulate them.`,
    color: '#a6c2b4',
    img: 'marcy3.png',
    step: 3
  },
];



const pointsData = [

]
export default function Home() {
  return (
    <div className="flex min-h-full">
      <div className="">
        <Sidebar />
      </div>

      <div className="">
        <div className=" relative overflow-hidden h-[30rem]">
          <img className="w-full   absolute " src="/marcy1.jpg"></img>
          <div className="w-full h-[30rem]  absolute z-[1] bg-white opacity-80"></div>
          <div className="z-[100] relative">
            <h1 className="w-[80%] pt-[5%]  text-[5rem]   m-auto text-center">
              THE MARCY LAB SCHOOL REFERRAL HUB{" "}
            </h1>
            <p className=" w-[60%] text-center pt-5   m-auto text-[1.2rem] font-medium">
              {" "}
              Know someone who belongs at Marcy? As a fellow, alum, or staff
              member, refer top talent through the Marcy Lab School Referral
              Program.
            </p>
          </div>
        </div>

        <div className="  mt-10 w-[90%]  border-t-[0.3rem] m-auto border-t-[#261f1d]">
          <h1>THE PROCESS</h1>
          <p className="w-[30rem] pb-10 font-medium">
            {" "}
            Earn points when your referral connects with our recruitment team,
            tours the campus, or submits an application. It’s an easy way to
            support our community and get rewarded along the way.
          </p>
          <div>
            {processData.map(({ img, color, body, title, step }) => {
              return (
                <div className="border-t-[0.1rem] pb-10 border-t-[#261f1d]">
                  <StepCard
                    step={step}
                    img={img}
                    color={color}
                    body={body}
                    title={title}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-[#dee7f1] mt-12 w-full h-[40rem]">
          <div className='w-[90%] m-auto pt-5'>
          <h1 className='' >POINT BREAKDOWN</h1>
          </div>
          
        </div>
      </div>
    </div>
  );
}
