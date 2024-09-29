import StepCard from "../ui/StepCard"


const processData = [
    {
      title: "SUBMIT YOUR REFERAL",
      body: `Fill out the referral form here to start the process. You'll
              be directed to a simple form where you can enter the details
              of the person you'd like to refer to the Marcy Lab School
              Fellowship.`,
      color: "#ef541e",
      img: "/marcy2.png",
      step: 1,
      button: {invert: true, text: 'SUBMIT A REFERRAL'}
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
  
function ProcessSection() {
  return (
    <div className="  mt-10 w-[90%]  border-t-[0.3rem] m-auto border-t-[#261f1d]">
    <h1>THE PROCESS</h1>
    <p className="w-[30rem] pb-10 font-medium">
      {" "}
      Earn points when your referral connects with our recruitment team,
      tours the campus, or submits an application. It’s an easy way to
      support our community and get rewarded along the way.
    </p>
    <div>
      {processData.map(({ img, color, body, title, step, button }) => {
        return (
          <div className="border-t-[0.1rem] pb-10 border-t-[#261f1d]">
            <StepCard
              step={step}
              img={img}
              color={color}
              body={body}
              title={title}
              button={button}
            />
          </div>
        );
      })}
    </div>
  </div>
  )
}

export default ProcessSection