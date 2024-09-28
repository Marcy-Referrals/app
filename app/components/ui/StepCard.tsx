


interface StepCardProps {
    color: string,
    img: string,
    title: string,
    body: string,
    step: number
}



function StepCard({color, img, title, body, step}: StepCardProps) {
  return (
    <div>
              <div className="flex gap-3 ">
                {" "}
                <h1 className={ `h-[3.5rem] font-medium  mt-5  pb-2 text-[2.3rem] rounded-full text-center bg-[${color}] w-[3.5rem]` }>
                  {step}
                </h1>{" "}
                <h1 className="pt-6  font-medium pl-3 text-[1.8rem]">
                  {title}
                </h1>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className=" pt-10 font-medium text-[1.3rem] w-[30rem]">
                    {body}
                  </p>
                
                </div>

                <img className="w-[25rem] pt-10 " src={img}></img>
              </div>
            </div>
  )
}

export default StepCard