import Step1 from "@/components/Step1/Step1";
import Step2 from "@/components/Step2/Step2";
import Step3 from "@/components/Step3/Step3";
import StepContainer from "@/components/StepContainer/StepContainer";

export default function DashBoard() {
  return (
    <div
      className={`w-full p-0 pb-4 md:py-8 md:px-4 flex justify-center bg-primarylightblue`}
    >
      <div
        className={`rounded-lg flex flex-col md:flex-row justify-center 
        p-0 md:p-3.5 md:h-650 w-full md:w-[95%] xl:w-[75%]
        bg-primarylightblue md:bg-primarywhite`}
      >
        <StepContainer />
        <Step1 />
      </div>
    </div>
  );
}
