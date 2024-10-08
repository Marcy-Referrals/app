import Accordian from "../ui/Accordian";
function QuestionsSection() {
  return (
    <div className="  m-auto  h-[80vh]">
      <div className="w-[90%] m-auto ">
        <h1 className="   pt-5 ">FREQUENTLY ASKED QUESTIONS</h1>
        <p className="font-medium">
          Please refer to the details below for more information about our
          referral program.
        </p>
        <Accordian title='Test' body='Test' />
      </div>
    </div>
  );
}

export default QuestionsSection;
