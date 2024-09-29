import Button from "../ui/Button"
function HeroSection() {
  return (
    <div className=" relative overflow-hidden h-[30rem]">
          <img className="w-full   absolute " src="/marcy1.jpg"></img>
          <div className="w-full h-[30rem]  absolute z-[1] bg-white opacity-80"></div>
          <div className="z-[100] relative">
            <h1 className="w-[80%] pt-[5%]  text-[5rem]   m-auto text-center">
              THE MARCY LAB SCHOOL REFERRAL HUB{" "}
            </h1>
            <p className="  pb-5 w-[60%] text-center pt-5   m-auto text-[1.2rem] font-medium">
              {" "}
              Know someone who belongs at Marcy? As a fellow, alum, or staff
              member, refer top talent through the Marcy Lab School Referral
              Program.
            </p>
            <div className='m-auto w-[10rem]'>
            <Button  text='START A REFERRAL' />
            </div>
            
          </div>
        </div>
  )
}

export default HeroSection